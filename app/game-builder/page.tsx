'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GameBuilderPage() {
  const [gameName, setGameName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [gameType, setGameType] = useState('custom');
  const [multiplier, setMultiplier] = useState('2');
  const [winChance, setWinChance] = useState('50');
  const [description, setDescription] = useState('');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-black/30 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Game Builder Studio
              </h1>
            </Link>
            <Link href="/" className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 transition">
              ← Back to Casino
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Builder Form */}
          <div className="space-y-6">
            <div className="card-gradient rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">🎨 Create Your Game</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Game Name</label>
                  <input
                    type="text"
                    value={gameName}
                    onChange={(e) => setGameName(e.target.value)}
                    placeholder="My Awesome Game"
                    className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subdomain</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={subdomain}
                      onChange={(e) => setSubdomain(e.target.value)}
                      placeholder="mygame"
                      className="flex-1 px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                    <span className="text-gray-400">.casino.sol</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Your game will be hosted at: {subdomain || 'mygame'}.casino.sol
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Game Type</label>
                  <select
                    value={gameType}
                    onChange={(e) => setGameType(e.target.value)}
                    className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none"
                  >
                    <option value="custom">Custom Game</option>
                    <option value="coinflip">Coinflip Variant</option>
                    <option value="dice">Dice Variant</option>
                    <option value="slots">Slots Machine</option>
                    <option value="lottery">Lottery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Win Multiplier</label>
                  <input
                    type="number"
                    value={multiplier}
                    onChange={(e) => setMultiplier(e.target.value)}
                    placeholder="2"
                    className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Win Chance (%)</label>
                  <input
                    type="number"
                    value={winChance}
                    onChange={(e) => setWinChance(e.target.value)}
                    placeholder="50"
                    min="1"
                    max="99"
                    className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                  <div className="mt-2 h-2 bg-black/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
                      style={{ width: `${winChance}%` }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your game..."
                    rows={4}
                    className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
                  />
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50 rounded-lg transition font-bold">
                  🚀 Deploy Game
                </button>
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="card-gradient rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">⚙️ Advanced Settings</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
                  <span className="text-sm">Enable Oracle AI optimization</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
                  <span className="text-sm">Allow public access</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span className="text-sm">Require minimum balance</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span className="text-sm">Enable leaderboard</span>
                </label>
              </div>
            </div>
          </div>

          {/* Preview & Templates */}
          <div className="space-y-6">
            {/* Live Preview */}
            <div className="card-gradient rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">👁️ Live Preview</h2>
              <div className="bg-black/40 rounded-lg p-8 text-center border-2 border-dashed border-purple-500/30">
                <div className="text-6xl mb-4">🎲</div>
                <h3 className="text-2xl font-bold mb-2">{gameName || 'Your Game Name'}</h3>
                <p className="text-gray-400 mb-4">{description || 'Your game description will appear here'}</p>
                <div className="inline-block px-4 py-2 bg-purple-600/20 rounded-lg mb-4">
                  <div className="text-sm text-gray-400">Win Multiplier</div>
                  <div className="text-2xl font-bold text-purple-400">{multiplier}x</div>
                </div>
                <div className="space-y-2">
                  <button className="w-full py-3 bg-purple-600 rounded-lg">
                    Place Bet
                  </button>
                  <div className="text-xs text-gray-400">
                    {winChance}% chance to win
                  </div>
                </div>
              </div>
            </div>

            {/* Game Templates */}
            <div className="card-gradient rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">📚 Game Templates</h3>
              <div className="space-y-3">
                <button className="w-full p-4 bg-black/40 hover:bg-black/60 rounded-lg text-left transition group">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold group-hover:text-purple-400 transition">🪙 Classic Coinflip</div>
                      <div className="text-sm text-gray-400">Simple 50/50 game</div>
                    </div>
                    <div className="text-2xl">→</div>
                  </div>
                </button>

                <button className="w-full p-4 bg-black/40 hover:bg-black/60 rounded-lg text-left transition group">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold group-hover:text-purple-400 transition">🎰 Lucky Slots</div>
                      <div className="text-sm text-gray-400">3-reel slot machine</div>
                    </div>
                    <div className="text-2xl">→</div>
                  </div>
                </button>

                <button className="w-full p-4 bg-black/40 hover:bg-black/60 rounded-lg text-left transition group">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold group-hover:text-purple-400 transition">🎟️ Mega Lottery</div>
                      <div className="text-sm text-gray-400">Daily lottery draws</div>
                    </div>
                    <div className="text-2xl">→</div>
                  </div>
                </button>

                <button className="w-full p-4 bg-black/40 hover:bg-black/60 rounded-lg text-left transition group">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold group-hover:text-purple-400 transition">🃏 Card Battle</div>
                      <div className="text-sm text-gray-400">High card wins</div>
                    </div>
                    <div className="text-2xl">→</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Revenue Calculator */}
            <div className="card-gradient rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">💰 Revenue Estimator</h3>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-black/30 rounded">
                  <span className="text-sm">Est. Daily Players</span>
                  <span className="font-bold text-green-400">~50</span>
                </div>
                <div className="flex justify-between p-3 bg-black/30 rounded">
                  <span className="text-sm">Avg. Bet Size</span>
                  <span className="font-bold">0.1 SOL</span>
                </div>
                <div className="flex justify-between p-3 bg-black/30 rounded">
                  <span className="text-sm">Your Commission (2%)</span>
                  <span className="font-bold text-purple-400">~0.1 SOL/day</span>
                </div>
                <div className="flex justify-between p-3 bg-green-500/20 rounded">
                  <span className="font-bold">Est. Monthly Revenue</span>
                  <span className="font-bold text-green-400">~3 SOL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Games Section */}
        <div className="mt-8 card-gradient rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">🎮 My Created Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/40 rounded-lg p-4 border border-purple-500/20">
              <div className="text-3xl mb-2">🎲</div>
              <h3 className="font-bold mb-1">Lucky Roll</h3>
              <p className="text-sm text-gray-400 mb-3">luckyroll.casino.sol</p>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-gray-400">Plays: 234</span>
                <span className="text-green-400">+2.3 SOL</span>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition">
                  Edit
                </button>
                <button className="flex-1 py-2 bg-gray-600 hover:bg-gray-700 rounded text-sm transition">
                  Stats
                </button>
              </div>
            </div>

            <div className="bg-black/40 rounded-lg p-4 border border-purple-500/20 opacity-60">
              <div className="text-3xl mb-2">🎰</div>
              <h3 className="font-bold mb-1">Mega Slots</h3>
              <p className="text-sm text-gray-400 mb-3">megaslots.casino.sol</p>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-gray-400">Plays: 89</span>
                <span className="text-green-400">+0.8 SOL</span>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition">
                  Edit
                </button>
                <button className="flex-1 py-2 bg-gray-600 hover:bg-gray-700 rounded text-sm transition">
                  Stats
                </button>
              </div>
            </div>

            <div className="bg-black/40 rounded-lg p-4 border-2 border-dashed border-purple-500/30 flex items-center justify-center cursor-pointer hover:border-purple-500/60 transition">
              <div className="text-center">
                <div className="text-4xl mb-2">+</div>
                <div className="text-sm text-gray-400">Create New Game</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
