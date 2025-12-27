use anchor_lang::prelude::*;
use crate::{constants::*, errors::CasinoError, state::PlayerAccount};

#[derive(Accounts)]
pub struct UpdateProfile<'info> {
    #[account(
        mut,
        seeds = [PLAYER_POOL_SEED, owner.key().as_ref()],
        bump = player_account.bump,
        constraint = player_account.owner == owner.key() @ CasinoError::Unauthorized
    )]
    pub player_account: Account<'info, PlayerAccount>,
    
    pub owner: Signer<'info>,
}

pub fn handler(ctx: Context<UpdateProfile>, username: String, avatar: String) -> Result<()> {
    let player_account = &mut ctx.accounts.player_account;
    
    require!(username.len() <= 32, CasinoError::UsernameTooLong);
    
    player_account.username = username.clone();
    player_account.avatar = avatar;
    
    msg!("Profile updated for user: {}", username);
    
    Ok(())
}
