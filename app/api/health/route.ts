import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV,
    solana_network: process.env.NEXT_PUBLIC_SOLANA_NETWORK ?? "devnet",
  });
}
