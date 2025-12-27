# 🚀 Deployment Guide

## Prerequisites

### System Requirements
- Node.js 18.x or higher
- Rust 1.70+
- Solana CLI 1.17+
- Anchor CLI 0.29+
- Git

### Accounts Required
- Solana wallet with SOL for deployment
- Admin wallet for platform management
- Oracle authority wallet

## Step 1: Environment Setup

### Install Solana CLI
```bash
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
```

### Install Anchor
```bash
cargo install --git https://github.com/coral-xyz/anchor avm --locked --force
avm install 0.29.0
avm use 0.29.0
```

### Configure Solana
```bash
# Set to devnet for testing
solana config set --url devnet

# Or mainnet for production
solana config set --url mainnet-beta

# Generate keypair (or use existing)
solana-keygen new
```

## Step 2: Clone and Setup

```bash
# Clone repository
git clone https://github.com/Solana-Games/sol.git
cd sol

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

## Step 3: Configure Environment

Edit `.env.local`:
```env
# Network
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_RPC_ENDPOINT=https://api.devnet.solana.com

# Program ID (update after deployment)
NEXT_PUBLIC_PROGRAM_ID=SuPeRcHaRgEdCaSiNo1111111111111111111111111

# Oracle API (configure your Oracle service)
NEXT_PUBLIC_ORACLE_API_URL=https://oracle.casino.sol/api

# Admin Settings
ADMIN_WALLET=YOUR_ADMIN_WALLET_ADDRESS
ORACLE_AUTHORITY=YOUR_ORACLE_WALLET_ADDRESS
```

## Step 4: Build Smart Contracts

```bash
# Build the program
anchor build

# Get program ID
solana address -k target/deploy/solana_supercharged_casino-keypair.json

# Update program ID in:
# - Anchor.toml
# - programs/solana-supercharged-casino/src/lib.rs (declare_id!)
# - lib/solana.ts

# Rebuild after updating IDs
anchor build
```

## Step 5: Deploy Smart Contracts

### Devnet Deployment
```bash
# Airdrop SOL for deployment (devnet only)
solana airdrop 5

# Deploy
anchor deploy

# Verify deployment
solana program show YOUR_PROGRAM_ID
```

### Mainnet Deployment
```bash
# Ensure you have enough SOL for deployment (~5-10 SOL)
solana balance

# Deploy to mainnet
anchor deploy --provider.cluster mainnet

# Verify
solana program show YOUR_PROGRAM_ID --url mainnet-beta
```

## Step 6: Initialize Platform

```bash
# Create initialization script
cat > scripts/initialize.ts << 'EOF'
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";

async function main() {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.SolanaSuperchargedCasino;
  
  // Initialize platform
  const tx = await program.methods
    .initialize(oracleAuthority)
    .accounts({
      globalState: globalStatePDA,
      admin: provider.wallet.publicKey,
      vault: vaultPDA,
      systemProgram: anchor.web3.SystemProgram.programId,
    })
    .rpc();

  console.log("Platform initialized:", tx);
}

main();
EOF

# Run initialization
anchor run initialize
```

## Step 7: Deploy Frontend

### Vercel Deployment

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to Vercel**
- Go to https://vercel.com
- Import your GitHub repository
- Configure environment variables
- Deploy

3. **Set Environment Variables in Vercel**
```
NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
NEXT_PUBLIC_RPC_ENDPOINT=https://api.mainnet-beta.solana.com
NEXT_PUBLIC_PROGRAM_ID=YOUR_DEPLOYED_PROGRAM_ID
NEXT_PUBLIC_ORACLE_API_URL=https://oracle.casino.sol/api
```

### Alternative: Traditional Hosting

```bash
# Build production version
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "casino" -- start
pm2 save
pm2 startup
```

## Step 8: Configure DNS (for subdomains)

### For User Game Subdomains

1. **Add DNS Records**
```
Type: CNAME
Name: *.casino.sol
Target: your-deployment-url.vercel.app
```

2. **Configure Next.js Rewrites** (next.config.js)
```javascript
module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/game/:subdomain',
        has: [
          {
            type: 'host',
            value: '(?<subdomain>.*).casino.sol',
          },
        ],
      },
    ];
  },
};
```

## Step 9: Initialize Admin Vault

```bash
# Deposit initial liquidity to vault
anchor run deposit-vault -- --amount 100

# Verify vault balance
anchor run check-vault
```

## Step 10: Set Up Oracle Service

### Deploy Oracle Backend
```bash
cd oracle-service
npm install
npm run build

# Configure Oracle
cp .env.example .env
# Edit .env with:
# - Oracle wallet private key
# - RPC endpoint
# - Program ID

# Start Oracle service
npm start

# Or with PM2
pm2 start npm --name "oracle" -- start
```

### Configure Oracle Monitoring
```bash
# Set up health checks
# Add monitoring alerts
# Configure backup Oracles
```

## Post-Deployment Checklist

- [ ] Smart contracts deployed and verified
- [ ] Frontend deployed and accessible
- [ ] Admin panel accessible with correct permissions
- [ ] Vault has sufficient liquidity
- [ ] Oracle service running and healthy
- [ ] DNS configured for subdomains
- [ ] Environment variables set correctly
- [ ] Test all game functionality
- [ ] Test game creation
- [ ] Test admin functions
- [ ] Monitor logs for errors
- [ ] Set up analytics
- [ ] Configure alerts

## Monitoring

### Smart Contract Monitoring
```bash
# Watch program logs
solana logs YOUR_PROGRAM_ID

# Monitor transactions
solana transaction-history YOUR_PROGRAM_ID
```

### Frontend Monitoring
- Set up error tracking (Sentry)
- Configure analytics (Google Analytics)
- Monitor performance (Vercel Analytics)

### Oracle Monitoring
- Health check endpoint: `/health`
- Metrics endpoint: `/metrics`
- Set up uptime monitoring

## Troubleshooting

### Common Issues

**Program deployment fails**
- Ensure sufficient SOL in wallet
- Check program size limits
- Verify Anchor version compatibility

**Frontend doesn't connect**
- Verify RPC endpoint is correct
- Check wallet adapter configuration
- Ensure program ID matches

**Oracle not responding**
- Check Oracle service logs
- Verify wallet has sufficient SOL
- Check RPC connection

### Getting Help
- Discord: discord.gg/supercharged-casino
- GitHub Issues: github.com/Solana-Games/sol/issues
- Email: support@casino.sol

## Security Considerations

### Before Mainnet
- [ ] Complete security audit
- [ ] Test on devnet thoroughly
- [ ] Set up multi-sig admin wallet
- [ ] Configure rate limiting
- [ ] Implement monitoring and alerts
- [ ] Have emergency shutdown procedure
- [ ] Set up bug bounty program

### Regular Maintenance
- Monitor for suspicious activity
- Regular security audits
- Keep dependencies updated
- Backup critical data
- Test disaster recovery

## Upgrading

### Smart Contract Updates
```bash
# Build new version
anchor build

# Upgrade program (requires upgrade authority)
solana program deploy --program-id YOUR_PROGRAM_ID target/deploy/solana_supercharged_casino.so

# Run migration script if needed
anchor run migrate
```

### Frontend Updates
```bash
# Deploy new version
git push origin main

# Vercel will auto-deploy
# Or manually: vercel --prod
```

## Support

For deployment support:
- Technical docs: docs.casino.sol
- Email: deploy@casino.sol
- Discord: #deployment channel
