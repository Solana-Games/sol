import { z } from "zod";

const envSchema = z.object({
  // Solana network configuration
  NEXT_PUBLIC_SOLANA_NETWORK: z
    .string()
    .min(1)
    .default("devnet"),
  NEXT_PUBLIC_RPC_ENDPOINT: z
    .string()
    .url("NEXT_PUBLIC_RPC_ENDPOINT must be a valid URL"),
  NEXT_PUBLIC_PROGRAM_ID: z
    .string()
    .min(1, "NEXT_PUBLIC_PROGRAM_ID is required"),

  // Oracle configuration
  NEXT_PUBLIC_ORACLE_API_URL: z
    .string()
    .url("NEXT_PUBLIC_ORACLE_API_URL must be a valid URL")
    .optional(),
  NEXT_PUBLIC_ORACLE_ENABLED: z
    .string()
    .optional()
    .default("false"),

  // Admin configuration (server-side only, optional at validation time)
  ADMIN_WALLET: z.string().optional(),
  ORACLE_AUTHORITY: z.string().optional(),

  // Feature flags
  NEXT_PUBLIC_ENABLE_GAME_BUILDER: z.string().optional().default("false"),
  NEXT_PUBLIC_ENABLE_ORACLE: z.string().optional().default("false"),
  NEXT_PUBLIC_ENABLE_LEADERBOARD: z.string().optional().default("false"),

  // Platform settings
  NEXT_PUBLIC_MIN_BET_SOL: z.string().optional().default("0.01"),
  NEXT_PUBLIC_MAX_BET_SOL: z.string().optional().default("10"),
  NEXT_PUBLIC_HOUSE_EDGE_BPS: z.string().optional().default("200"),

  // Optional integrations
  NEXT_PUBLIC_RPC_WSS_ENDPOINT: z.string().url().optional(),
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().optional(),
  NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:");
  for (const issue of parsedEnv.error.issues) {
    console.error(`  ${issue.path.join(".")}: ${issue.message}`);
  }
  throw new Error("Invalid environment variables. See above for details.");
}

export const env = parsedEnv.data;
