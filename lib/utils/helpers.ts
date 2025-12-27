/**
 * Utility functions for the casino platform
 */

/**
 * Format a number to currency
 */
export const formatCurrency = (amount: number, decimals: number = 2): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
};

/**
 * Format SOL amount from lamports
 */
export const lamportsToSOL = (lamports: number): number => {
  return lamports / 1e9;
};

/**
 * Convert SOL to lamports
 */
export const solToLamports = (sol: number): number => {
  return Math.floor(sol * 1e9);
};

/**
 * Shorten wallet address
 */
export const shortenAddress = (address: string, chars: number = 4): string => {
  if (!address) return '';
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};

/**
 * Calculate expected value for a bet
 */
export const calculateEV = (
  betAmount: number,
  winChance: number,
  multiplier: number
): number => {
  const winAmount = betAmount * multiplier;
  const loseAmount = betAmount;
  return winChance * winAmount - (1 - winChance) * loseAmount;
};

/**
 * Calculate house edge percentage
 */
export const calculateHouseEdge = (
  winChance: number,
  multiplier: number
): number => {
  const fairMultiplier = 1 / winChance;
  return ((fairMultiplier - multiplier) / fairMultiplier) * 100;
};

/**
 * Format time ago
 */
export const timeAgo = (timestamp: number): string => {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
    }
  }

  return 'just now';
};

/**
 * Validate subdomain format
 */
export const isValidSubdomain = (subdomain: string): boolean => {
  const regex = /^[a-z0-9]{3,32}$/;
  return regex.test(subdomain);
};

/**
 * Generate random game result (client-side demo only)
 */
export const generateRandomResult = (max: number): number => {
  return Math.floor(Math.random() * max);
};

/**
 * Check if user won
 */
export const checkWin = (prediction: number, result: number): boolean => {
  return prediction === result;
};

/**
 * Calculate payout amount
 */
export const calculatePayout = (
  betAmount: number,
  multiplier: number,
  won: boolean
): number => {
  return won ? betAmount * multiplier : 0;
};

/**
 * Validate bet amount
 */
export const isValidBet = (
  amount: number,
  minBet: number,
  maxBet: number,
  balance: number
): { valid: boolean; error?: string } => {
  if (amount < minBet) {
    return { valid: false, error: `Minimum bet is ${lamportsToSOL(minBet)} SOL` };
  }
  if (amount > maxBet) {
    return { valid: false, error: `Maximum bet is ${lamportsToSOL(maxBet)} SOL` };
  }
  if (amount > balance) {
    return { valid: false, error: 'Insufficient balance' };
  }
  return { valid: true };
};

/**
 * Format large numbers with abbreviations
 */
export const abbreviateNumber = (num: number): string => {
  if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
  return num.toString();
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
};

/**
 * Sleep utility
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
