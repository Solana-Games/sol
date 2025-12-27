use anchor_lang::prelude::*;
use anchor_lang::system_program;
use crate::{constants::*, errors::CasinoError, state::*};

#[derive(Accounts)]
pub struct OracleSubmitRandom<'info> {
    #[account(
        mut,
        seeds = [GLOBAL_AUTHORITY_SEED],
        bump = global_state.bump,
        constraint = global_state.oracle_authority == oracle.key() @ CasinoError::UnauthorizedOracle
    )]
    pub global_state: Account<'info, GlobalState>,
    
    #[account(
        mut,
        seeds = [PLAYER_POOL_SEED, player.key().as_ref()],
        bump = player_account.bump
    )]
    pub player_account: Account<'info, PlayerAccount>,
    
    /// CHECK: Player account
    #[account(mut)]
    pub player: AccountInfo<'info>,
    
    /// CHECK: Vault PDA
    #[account(
        mut,
        seeds = [VAULT_SEED],
        bump
    )]
    pub vault: AccountInfo<'info>,
    
    pub oracle: Signer<'info>,
    
    pub system_program: Program<'info, System>,
}

pub fn handler(
    ctx: Context<OracleSubmitRandom>,
    random_value: u64,
    game_id: u64,
) -> Result<()> {
    let global_state = &mut ctx.accounts.global_state;
    let player_account = &mut ctx.accounts.player_account;
    
    // Use Oracle's smart brain algorithm to determine outcome
    // Oracle provides verifiable random number
    let result = (random_value % 100) < 50; // 50% win chance for demo
    
    if result {
        // Player wins - calculate payout (example for coinflip)
        let bet_amount = 10_000_000; // This should be stored in game state
        let payout = bet_amount * COINFLIP_MULTIPLIER / 100;
        
        // Transfer payout from vault to player
        let vault_bump = ctx.bumps.vault;
        let seeds = &[VAULT_SEED, &[vault_bump]];
        let signer = &[&seeds[..]];
        
        let cpi_context = CpiContext::new_with_signer(
            ctx.accounts.system_program.to_account_info(),
            system_program::Transfer {
                from: ctx.accounts.vault.to_account_info(),
                to: ctx.accounts.player.to_account_info(),
            },
            signer,
        );
        system_program::transfer(cpi_context, payout)?;
        
        player_account.total_won += payout;
        global_state.vault_balance -= payout;
        
        msg!("Player WON! Payout: {} lamports", payout);
    } else {
        msg!("Player LOST. Better luck next time!");
    }
    
    msg!("Oracle random value: {}", random_value);
    msg!("Game ID: {}", game_id);
    
    Ok(())
}
