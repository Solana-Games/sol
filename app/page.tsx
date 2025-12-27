'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GameCard } from '@/components/GameCard';
import { StatsPanel } from '@/components/StatsPanel';
import { OraclePanel } from '@/components/OraclePanel';

export default function Home() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-black/30 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-green-500 flex items-center justify-center">
                <span className="text-2xl">🎲</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                SuperCharged Casino
              </h1>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/game-builder" className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition">
                🎮 Build Game
              </Link>
              <Link href="/profile" className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition">
                👤 Profile
              </Link>
              <Link href="/admin" className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 transition">
                ⚙️ Admin
              </Link>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50 transition">
                Connect Wallet
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-green-400 bg-clip-text text-transparent animate-pulse-slow">
            🚀 Supercharged Gaming Experience
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            AI-Powered Oracle • Provably Fair • Create Your Own Games
          </p>
          <div className="flex justify-center space-x-4">
            <div className="card-gradient rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-400">$1.2M+</div>
              <div className="text-sm text-gray-400">Total Volume</div>
            </div>
            <div className="card-gradient rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">10K+</div>
              <div className="text-sm text-gray-400">Active Players</div>
            </div>
            <div className="card-gradient rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-400">250+</div>
              <div className="text-sm text-gray-400">User Games</div>
            </div>
          </div>
        </section>

        {/* Oracle AI Panel */}
        <OraclePanel />

        {/* Games Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">🎰 Play Games</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GameCard
              title="Coinflip"
              emoji="🪙"
              multiplier="1.96x"
              description="50/50 chance to double your bet"
              onPlay={() => setSelectedGame('coinflip')}
            />
            <GameCard
              title="Dice"
              emoji="🎲"
              multiplier="5.88x"
              description="Guess the number 1-6"
              onPlay={() => setSelectedGame('dice')}
            />
            <GameCard
              title="Roulette"
              emoji="🎡"
              multiplier="35.28x"
              description="Classic casino roulette"
              onPlay={() => setSelectedGame('roulette')}
            />
          </div>
        </section>

        {/* Stats Section */}
        <StatsPanel />

        {/* Features Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">✨ Platform Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card-gradient rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">🧠</div>
              <h4 className="font-bold mb-2">Smart Oracle</h4>
              <p className="text-sm text-gray-400">AI-powered randomness for optimal betting strategies</p>
            </div>
            <div className="card-gradient rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">🎮</div>
              <h4 className="font-bold mb-2">Game Builder</h4>
              <p className="text-sm text-gray-400">Create custom games with remix-like interface</p>
            </div>
            <div className="card-gradient rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">🌐</div>
              <h4 className="font-bold mb-2">Subdomain Hosting</h4>
              <p className="text-sm text-gray-400">Host your games on custom subdomains</p>
            </div>
            <div className="card-gradient rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="font-bold mb-2">Automation</h4>
              <p className="text-sm text-gray-400">Automated workflows and profit optimization</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-black/30 backdrop-blur-lg py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Supercharged Solana Casino • Powered by AI Oracle • Built on Solana</p>
          <p className="text-sm mt-2">Play responsibly. Must be 18+</p>
        </div>
      </footer>
    </div>
  );
}
