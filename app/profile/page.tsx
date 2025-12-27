'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [username, setUsername] = useState('CryptoGamer');
  const [avatar, setAvatar] = useState('🎮');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-green-500/20 bg-black/30 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Player Profile
              </h1>
            </Link>
            <Link href="/" className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 transition">
              ← Back to Casino
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="card-gradient rounded-lg p-6">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-6xl">
                {avatar}
              </div>
              
              {isEditing ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 bg-black/40 border border-green-500/30 rounded-lg focus:border-green-500 focus:outline-none text-center"
                  />
                  <input
                    type="text"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    placeholder="Choose emoji"
                    className="w-full px-4 py-2 bg-black/40 border border-green-500/30 rounded-lg focus:border-green-500 focus:outline-none text-center"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex-1 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex-1 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-2">{username}</h2>
                  <p className="text-sm text-gray-400 font-mono mb-4">7xK9...3mP2</p>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition"
                  >
                    ✏️ Edit Profile
                  </button>
                </>
              )}
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between p-3 bg-black/30 rounded">
                <span className="text-sm">Member Since</span>
                <span className="text-sm font-bold">Nov 2024</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-black/30 rounded">
                <span className="text-sm">Level</span>
                <span className="text-sm font-bold text-purple-400">Diamond 💎</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-black/30 rounded">
                <span className="text-sm">Created Games</span>
                <span className="text-sm font-bold text-green-400">2</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overall Stats */}
            <div className="card-gradient rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-green-400">📊 Overall Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-black/30 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400">1,234</div>
                  <div className="text-sm text-gray-400">Games Played</div>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-lg">
                  <div className="text-3xl font-bold text-green-400">+45.6</div>
                  <div className="text-sm text-gray-400">Total Won (SOL)</div>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-lg">
                  <div className="text-3xl font-bold text-amber-400">234.5</div>
                  <div className="text-sm text-gray-400">Total Wagered (SOL)</div>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400">52%</div>
                  <div className="text-sm text-gray-400">Win Rate</div>
                </div>
              </div>
            </div>

            {/* Game Stats */}
            <div className="card-gradient rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-green-400">🎮 Game Statistics</h2>
              <div className="space-y-4">
                <div className="p-4 bg-black/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🪙</span>
                      <div>
                        <div className="font-bold">Coinflip</div>
                        <div className="text-sm text-gray-400">567 plays</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-400">+12.3 SOL</div>
                      <div className="text-sm text-gray-400">54% win rate</div>
                    </div>
                  </div>
                  <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '54%' }} />
                  </div>
                </div>

                <div className="p-4 bg-black/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🎲</span>
                      <div>
                        <div className="font-bold">Dice</div>
                        <div className="text-sm text-gray-400">345 plays</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-400">-8.2 SOL</div>
                      <div className="text-sm text-gray-400">15% win rate</div>
                    </div>
                  </div>
                  <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500" style={{ width: '15%' }} />
                  </div>
                </div>

                <div className="p-4 bg-black/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🎡</span>
                      <div>
                        <div className="font-bold">Roulette</div>
                        <div className="text-sm text-gray-400">322 plays</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-400">+41.5 SOL</div>
                      <div className="text-sm text-gray-400">8% win rate</div>
                    </div>
                  </div>
                  <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '8%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Games */}
            <div className="card-gradient rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-green-400">📜 Recent Games</h2>
              <div className="space-y-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">
                        {i % 3 === 0 ? '🪙' : i % 3 === 1 ? '🎲' : '🎡'}
                      </span>
                      <div>
                        <div className="font-bold text-sm">
                          {i % 3 === 0 ? 'Coinflip' : i % 3 === 1 ? 'Dice' : 'Roulette'}
                        </div>
                        <div className="text-xs text-gray-400">{i + 1} min ago</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">0.{i}5 SOL</div>
                      {i % 2 === 0 ? (
                        <div className="text-xs text-green-400">Won +0.{i}8 SOL</div>
                      ) : (
                        <div className="text-xs text-red-400">Lost</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="card-gradient rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-green-400">🏆 Achievements</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-black/30 rounded-lg">
                  <div className="text-4xl mb-2">🎯</div>
                  <div className="text-sm font-bold">First Win</div>
                  <div className="text-xs text-gray-400">Unlocked</div>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-lg">
                  <div className="text-4xl mb-2">💯</div>
                  <div className="text-sm font-bold">100 Games</div>
                  <div className="text-xs text-gray-400">Unlocked</div>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-lg">
                  <div className="text-4xl mb-2">🔥</div>
                  <div className="text-sm font-bold">Hot Streak</div>
                  <div className="text-xs text-gray-400">Unlocked</div>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-lg opacity-50">
                  <div className="text-4xl mb-2">💎</div>
                  <div className="text-sm font-bold">High Roller</div>
                  <div className="text-xs text-gray-400">Locked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
