# ⚙️ Admin Guide

## Overview
The Admin Control Panel provides full platform management capabilities.

## Accessing Admin Panel
Navigate to `/admin` and connect with admin wallet.

## Features

### 📊 Platform Statistics
Monitor real-time platform performance:
- Total volume
- Total games played
- House profit
- Active players
- User created games

### 💰 Vault Management
Control platform liquidity:
- View current vault balance
- Deposit SOL to vault
- Withdraw profits
- Ensure sufficient balance for payouts

### ⚙️ Platform Settings
Configure platform parameters:
- **House Edge**: Set platform fee (in basis points)
- **Min Bet**: Minimum bet amount in lamports
- **Max Bet**: Maximum bet amount in lamports

### 🧠 Oracle Configuration
Manage Oracle AI:
- View Oracle status
- Update Oracle authority
- Monitor random number generation

### 🎮 Recent Games
Monitor platform activity:
- View recent game history
- Track player wins/losses
- Identify patterns

## Best Practices

### Vault Management
1. Maintain 2x max bet as minimum balance
2. Regular profit withdrawals
3. Monitor vault health

### Settings Optimization
1. Adjust house edge based on competition
2. Set appropriate bet limits
3. Test changes on devnet first

## Security
- Only admin wallet can access panel
- All actions require signature
- Multi-sig recommended for production

## Support
Contact: admin@casino.sol
