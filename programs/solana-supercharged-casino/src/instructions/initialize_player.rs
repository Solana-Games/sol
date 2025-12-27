use anchor_lang::prelude::*;
use crate::{constants::*, state::PlayerAccount};

#[derive(Accounts)]
pub struct InitializePlayer<'info> {
    #[account(
        init,
        payer = owner,
        space = PlayerAccount::LEN,
        seeds = [PLAYER_POOL_SEED, owner.key().as_ref()],
        bump
    )]
    pub player_account: Account<'info, PlayerAccount>,
    
    #[account(mut)]
    pub owner: Signer<'info>,
    
    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<InitializePlayer>) -> Result<()> {
    let player_account = &mut ctx.accounts.player_account;
    
    player_account.owner = ctx.accounts.owner.key();
    player_account.total_wagered = 0;
    player_account.total_won = 0;
    player_account.games_played = 0;
    player_account.username = String::from("Player");
    player_account.avatar = String::from("");
    player_account.created_games = 0;
    player_account.bump = ctx.bumps.player_account;
    
    msg!("Player account initialized: {}", player_account.owner);
    
    Ok(())
}
