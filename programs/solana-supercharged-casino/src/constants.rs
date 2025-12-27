use anchor_lang::prelude::*;

#[constant]
pub const GLOBAL_AUTHORITY_SEED: &[u8] = b"global-authority";

#[constant]
pub const PLAYER_POOL_SEED: &[u8] = b"player-pool";

#[constant]
pub const USER_GAME_SEED: &[u8] = b"user-game";

#[constant]
pub const VAULT_SEED: &[u8] = b"vault";

#[constant]
pub const GAME_SEED: &[u8] = b"game";

// Platform fee: 2% (200 basis points)
#[constant]
pub const HOUSE_EDGE_DEFAULT: u16 = 200;

// Minimum bet: 0.01 SOL
#[constant]
pub const MIN_BET_DEFAULT: u64 = 10_000_000;

// Maximum bet: 10 SOL
#[constant]
pub const MAX_BET_DEFAULT: u64 = 10_000_000_000;

// Coinflip game multiplier (2x - minus house edge)
#[constant]
pub const COINFLIP_MULTIPLIER: u64 = 196; // 1.96x after 2% house edge

// Dice game (guess number 1-6) multiplier
#[constant]
pub const DICE_MULTIPLIER: u64 = 588; // 5.88x after 2% house edge

// Roulette multipliers vary by bet type
#[constant]
pub const ROULETTE_STRAIGHT_MULTIPLIER: u64 = 3528; // 35.28x after 2% house edge
