use anchor_lang::prelude::*;
use crate::{constants::*, errors::CasinoError, state::*};

#[derive(Accounts)]
#[instruction(subdomain: String)]
pub struct CreateUserGame<'info> {
    #[account(
        init,
        payer = creator,
        space = UserGame::LEN,
        seeds = [USER_GAME_SEED, subdomain.as_bytes()],
        bump
    )]
    pub user_game: Account<'info, UserGame>,
    
    #[account(
        mut,
        seeds = [PLAYER_POOL_SEED, creator.key().as_ref()],
        bump = player_account.bump
    )]
    pub player_account: Account<'info, PlayerAccount>,
    
    #[account(mut)]
    pub creator: Signer<'info>,
    
    pub system_program: Program<'info, System>,
}

pub fn handler(
    ctx: Context<CreateUserGame>,
    game_name: String,
    game_config: String,
    subdomain: String,
) -> Result<()> {
    let user_game = &mut ctx.accounts.user_game;
    let player_account = &mut ctx.accounts.player_account;
    
    // Validate inputs
    require!(game_name.len() <= 64, CasinoError::InvalidGameConfig);
    require!(game_config.len() <= 256, CasinoError::InvalidGameConfig);
    require!(subdomain.len() <= 32, CasinoError::InvalidGameConfig);
    
    user_game.creator = ctx.accounts.creator.key();
    user_game.game_name = game_name.clone();
    user_game.game_config = game_config;
    user_game.subdomain = subdomain.clone();
    user_game.total_plays = 0;
    user_game.total_volume = 0;
    user_game.active = true;
    user_game.created_at = Clock::get()?.unix_timestamp;
    user_game.bump = ctx.bumps.user_game;
    
    player_account.created_games += 1;
    
    msg!("User game created: {}", game_name);
    msg!("Subdomain: {}.casino.sol", subdomain);
    msg!("Creator: {}", user_game.creator);
    
    Ok(())
}
