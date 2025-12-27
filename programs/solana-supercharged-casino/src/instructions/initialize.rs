use anchor_lang::prelude::*;
use crate::{constants::*, state::GlobalState};

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init,
        payer = admin,
        space = GlobalState::LEN,
        seeds = [GLOBAL_AUTHORITY_SEED],
        bump
    )]
    pub global_state: Account<'info, GlobalState>,
    
    #[account(mut)]
    pub admin: Signer<'info>,
    
    /// CHECK: Vault PDA
    #[account(
        seeds = [VAULT_SEED],
        bump
    )]
    pub vault: AccountInfo<'info>,
    
    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<Initialize>, oracle_authority: Pubkey) -> Result<()> {
    let global_state = &mut ctx.accounts.global_state;
    
    global_state.admin = ctx.accounts.admin.key();
    global_state.oracle_authority = oracle_authority;
    global_state.house_edge = HOUSE_EDGE_DEFAULT;
    global_state.min_bet = MIN_BET_DEFAULT;
    global_state.max_bet = MAX_BET_DEFAULT;
    global_state.total_volume = 0;
    global_state.total_games = 0;
    global_state.vault_balance = 0;
    global_state.bump = ctx.bumps.global_state;
    
    msg!("Casino platform initialized successfully!");
    msg!("Admin: {}", global_state.admin);
    msg!("Oracle: {}", global_state.oracle_authority);
    
    Ok(())
}
