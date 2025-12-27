use anchor_lang::prelude::*;

declare_id!("SuPeRcHaRgEdCaSiNo1111111111111111111111111");

pub mod constants;
pub mod errors;
pub mod instructions;
pub mod state;

use constants::*;
use errors::*;
use instructions::*;
use state::*;

#[program]
pub mod solana_supercharged_casino {
    use super::*;

    /// Initialize the global casino platform
    pub fn initialize(ctx: Context<Initialize>, oracle_authority: Pubkey) -> Result<()> {
        instructions::initialize::handler(ctx, oracle_authority)
    }

    /// Update platform settings (admin only)
    pub fn update_settings(
        ctx: Context<UpdateSettings>,
        house_edge: u16,
        min_bet: u64,
        max_bet: u64,
    ) -> Result<()> {
        instructions::update_settings::handler(ctx, house_edge, min_bet, max_bet)
    }

    /// Initialize player account
    pub fn initialize_player(ctx: Context<InitializePlayer>) -> Result<()> {
        instructions::initialize_player::handler(ctx)
    }

    /// Play coinflip game with Oracle randomness
    pub fn play_coinflip(
        ctx: Context<PlayGame>,
        bet_amount: u64,
        prediction: u8,
    ) -> Result<()> {
        instructions::play_coinflip::handler(ctx, bet_amount, prediction)
    }

    /// Play dice game with Oracle randomness
    pub fn play_dice(
        ctx: Context<PlayGame>,
        bet_amount: u64,
        prediction: u8,
    ) -> Result<()> {
        instructions::play_dice::handler(ctx, bet_amount, prediction)
    }

    /// Play roulette game with Oracle randomness
    pub fn play_roulette(
        ctx: Context<PlayGame>,
        bet_amount: u64,
        prediction: u8,
    ) -> Result<()> {
        instructions::play_roulette::handler(ctx, bet_amount, prediction)
    }

    /// Create custom user game
    pub fn create_user_game(
        ctx: Context<CreateUserGame>,
        game_name: String,
        game_config: String,
        subdomain: String,
    ) -> Result<()> {
        instructions::create_user_game::handler(ctx, game_name, game_config, subdomain)
    }

    /// Oracle provides random number
    pub fn oracle_submit_random(
        ctx: Context<OracleSubmitRandom>,
        random_value: u64,
        game_id: u64,
    ) -> Result<()> {
        instructions::oracle_submit_random::handler(ctx, random_value, game_id)
    }

    /// Admin withdraws funds
    pub fn admin_withdraw(ctx: Context<AdminWithdraw>, amount: u64) -> Result<()> {
        instructions::admin_withdraw::handler(ctx, amount)
    }

    /// Admin deposits to vault
    pub fn admin_deposit(ctx: Context<AdminDeposit>, amount: u64) -> Result<()> {
        instructions::admin_deposit::handler(ctx, amount)
    }

    /// Update user profile
    pub fn update_profile(
        ctx: Context<UpdateProfile>,
        username: String,
        avatar: String,
    ) -> Result<()> {
        instructions::update_profile::handler(ctx, username, avatar)
    }
}
