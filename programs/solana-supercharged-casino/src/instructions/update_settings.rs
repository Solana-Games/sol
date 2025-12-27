use anchor_lang::prelude::*;
use crate::{constants::*, errors::CasinoError, state::GlobalState};

#[derive(Accounts)]
pub struct UpdateSettings<'info> {
    #[account(
        mut,
        seeds = [GLOBAL_AUTHORITY_SEED],
        bump = global_state.bump,
        constraint = global_state.admin == admin.key() @ CasinoError::Unauthorized
    )]
    pub global_state: Account<'info, GlobalState>,
    
    pub admin: Signer<'info>,
}

pub fn handler(
    ctx: Context<UpdateSettings>,
    house_edge: u16,
    min_bet: u64,
    max_bet: u64,
) -> Result<()> {
    let global_state = &mut ctx.accounts.global_state;
    
    global_state.house_edge = house_edge;
    global_state.min_bet = min_bet;
    global_state.max_bet = max_bet;
    
    msg!("Settings updated!");
    msg!("House edge: {}bps", house_edge);
    msg!("Min bet: {} lamports", min_bet);
    msg!("Max bet: {} lamports", max_bet);
    
    Ok(())
}
