use anchor_lang::prelude::*;

/// Global platform state
#[account]
pub struct GlobalState {
    pub admin: Pubkey,
    pub oracle_authority: Pubkey,
    pub house_edge: u16,
    pub min_bet: u64,
    pub max_bet: u64,
    pub total_volume: u64,
    pub total_games: u64,
    pub vault_balance: u64,
    pub bump: u8,
}

impl GlobalState {
    pub const LEN: usize = 8 + 32 + 32 + 2 + 8 + 8 + 8 + 8 + 8 + 1;
}

/// Player account with stats and profile
#[account]
pub struct PlayerAccount {
    pub owner: Pubkey,
    pub total_wagered: u64,
    pub total_won: u64,
    pub games_played: u64,
    pub username: String,
    pub avatar: String,
    pub created_games: u64,
    pub bump: u8,
}

impl PlayerAccount {
    pub const LEN: usize = 8 + 32 + 8 + 8 + 8 + (4 + 32) + (4 + 64) + 8 + 1;
}

/// Individual game state
#[account]
pub struct GameState {
    pub player: Pubkey,
    pub game_type: GameType,
    pub bet_amount: u64,
    pub prediction: u8,
    pub result: u8,
    pub payout: u64,
    pub oracle_random: u64,
    pub resolved: bool,
    pub timestamp: i64,
    pub game_id: u64,
}

impl GameState {
    pub const LEN: usize = 8 + 32 + 1 + 8 + 1 + 1 + 8 + 8 + 1 + 8 + 8;
}

/// User-created game
#[account]
pub struct UserGame {
    pub creator: Pubkey,
    pub game_name: String,
    pub game_config: String,
    pub subdomain: String,
    pub total_plays: u64,
    pub total_volume: u64,
    pub active: bool,
    pub created_at: i64,
    pub bump: u8,
}

impl UserGame {
    pub const LEN: usize = 8 + 32 + (4 + 64) + (4 + 256) + (4 + 32) + 8 + 8 + 1 + 8 + 1;
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Copy, PartialEq, Eq)]
pub enum GameType {
    Coinflip,
    Dice,
    Roulette,
    UserCustom,
}
