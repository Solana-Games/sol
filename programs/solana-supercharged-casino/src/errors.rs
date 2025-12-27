use anchor_lang::prelude::*;

#[error_code]
pub enum CasinoError {
    #[msg("Unauthorized: Only admin can perform this action")]
    Unauthorized,
    
    #[msg("Invalid bet amount: Must be between min and max bet")]
    InvalidBetAmount,
    
    #[msg("Insufficient player balance")]
    InsufficientPlayerBalance,
    
    #[msg("Insufficient vault balance")]
    InsufficientVaultBalance,
    
    #[msg("Invalid prediction value")]
    InvalidPrediction,
    
    #[msg("Oracle not authorized")]
    UnauthorizedOracle,
    
    #[msg("Game already resolved")]
    GameAlreadyResolved,
    
    #[msg("Game not found")]
    GameNotFound,
    
    #[msg("Invalid game configuration")]
    InvalidGameConfig,
    
    #[msg("Subdomain already taken")]
    SubdomainTaken,
    
    #[msg("Username too long (max 32 chars)")]
    UsernameTooLong,
    
    #[msg("Invalid random value")]
    InvalidRandomValue,
}
