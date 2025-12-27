use anchor_lang::prelude::*;
use anchor_lang::system_program;
use crate::{constants::*, errors::CasinoError, state::*};

#[derive(Accounts)]
pub struct PlayGame<'info> {
    #[account(
        mut,
        seeds = [GLOBAL_AUTHORITY_SEED],
        bump = global_state.bump
    )]
    pub global_state: Account<'info, GlobalState>,
    
    #[account(
        mut,
        seeds = [PLAYER_POOL_SEED, player.key().as_ref()],
        bump = player_account.bump
    )]
    pub player_account: Account<'info, PlayerAccount>,
    
    #[account(mut)]
    pub player: Signer<'info>,
    
    /// CHECK: Vault PDA
    #[account(
        mut,
        seeds = [VAULT_SEED],
        bump
    )]
    pub vault: AccountInfo<'info>,
    
    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<PlayGame>, bet_amount: u64, prediction: u8) -> Result<()> {
    let global_state = &mut ctx.accounts.global_state;
    let player_account = &mut ctx.accounts.player_account;
    
    // Validate bet amount
    require!(
        bet_amount >= global_state.min_bet && bet_amount <= global_state.max_bet,
        CasinoError::InvalidBetAmount
    );
    
    // Validate prediction (0 or 1 for coinflip)
    require!(prediction <= 1, CasinoError::InvalidPrediction);
    
    // Check vault has enough balance for potential payout
    let potential_payout = bet_amount * COINFLIP_MULTIPLIER / 100;
    require!(
        ctx.accounts.vault.lamports() >= potential_payout,
        CasinoError::InsufficientVaultBalance
    );
    
    // Transfer bet from player to vault
    let cpi_context = CpiContext::new(
        ctx.accounts.system_program.to_account_info(),
        system_program::Transfer {
            from: ctx.accounts.player.to_account_info(),
            to: ctx.accounts.vault.to_account_info(),
        },
    );
    system_program::transfer(cpi_context, bet_amount)?;
    
    // Update stats
    player_account.total_wagered += bet_amount;
    player_account.games_played += 1;
    global_state.total_volume += bet_amount;
    global_state.total_games += 1;
    global_state.vault_balance += bet_amount;
    
    msg!("Coinflip game started!");
    msg!("Bet: {} lamports", bet_amount);
    msg!("Prediction: {}", if prediction == 0 { "Tails" } else { "Heads" });
    msg!("Awaiting Oracle random number...");
    
    Ok(())
}
