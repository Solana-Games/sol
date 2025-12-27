import { Connection, PublicKey } from '@solana/web3.js';
import { Program, AnchorProvider } from '@coral-xyz/anchor';

// Configuration
export const PROGRAM_ID = new PublicKey('SuPeRcHaRgEdCaSiNo1111111111111111111111111');
export const NETWORK = 'devnet';
export const RPC_ENDPOINT = 'https://api.devnet.solana.com';

// Create connection
export const getConnection = () => {
  return new Connection(RPC_ENDPOINT, 'confirmed');
};

// Get program
export const getProgram = (provider: AnchorProvider) => {
  // This would be the actual IDL in production
  // return new Program(IDL, PROGRAM_ID, provider);
  return null; // Placeholder
};

// PDA derivation helpers
export const getGlobalStatePDA = async () => {
  const [pda] = await PublicKey.findProgramAddress(
    [Buffer.from('global-authority')],
    PROGRAM_ID
  );
  return pda;
};

export const getPlayerAccountPDA = async (player: PublicKey) => {
  const [pda] = await PublicKey.findProgramAddress(
    [Buffer.from('player-pool'), player.toBuffer()],
    PROGRAM_ID
  );
  return pda;
};

export const getUserGamePDA = async (subdomain: string) => {
  const [pda] = await PublicKey.findProgramAddress(
    [Buffer.from('user-game'), Buffer.from(subdomain)],
    PROGRAM_ID
  );
  return pda;
};

export const getVaultPDA = async () => {
  const [pda] = await PublicKey.findProgramAddress(
    [Buffer.from('vault')],
    PROGRAM_ID
  );
  return pda;
};

// Format helpers
export const formatSOL = (lamports: number) => {
  return (lamports / 1e9).toFixed(4) + ' SOL';
};

export const formatAddress = (address: string) => {
  if (!address) return '';
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

// Game type helpers
export enum GameType {
  Coinflip = 0,
  Dice = 1,
  Roulette = 2,
  UserCustom = 3,
}

export const getGameName = (type: GameType) => {
  switch (type) {
    case GameType.Coinflip:
      return 'Coinflip';
    case GameType.Dice:
      return 'Dice';
    case GameType.Roulette:
      return 'Roulette';
    case GameType.UserCustom:
      return 'Custom';
  }
};

// Constants
export const HOUSE_EDGE_DEFAULT = 200; // 2% in basis points
export const MIN_BET_DEFAULT = 10_000_000; // 0.01 SOL
export const MAX_BET_DEFAULT = 10_000_000_000; // 10 SOL
