use anchor_lang::prelude::*;
use anchor_lang::system_program;
use crate::{constants::*, state::GlobalState};

#[derive(Accounts)]
pub struct AdminDeposit<'info> {
    #[account(
        mut,
        seeds = [GLOBAL_AUTHORITY_SEED],
        bump = global_state.bump
    )]
    pub global_state: Account<'info, GlobalState>,
    
    #[account(mut)]
    pub admin: Signer<'info>,
    
    /// CHECK: Vault PDA
    #[account(
        mut,
        seeds = [VAULT_SEED],
        bump
    )]
    pub vault: AccountInfo<'info>,
    
    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<AdminDeposit>, amount: u64) -> Result<()> {
    let global_state = &mut ctx.accounts.global_state;
    
    let cpi_context = CpiContext::new(
        ctx.accounts.system_program.to_account_info(),
        system_program::Transfer {
            from: ctx.accounts.admin.to_account_info(),
            to: ctx.accounts.vault.to_account_info(),
        },
    );
    system_program::transfer(cpi_context, amount)?;
    
    global_state.vault_balance += amount;
    
    msg!("Admin deposited {} lamports to vault", amount);
    
    Ok(())
}
