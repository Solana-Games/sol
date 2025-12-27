'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [minBet, setMinBet] = useState('0.01');
  const [maxBet, setMaxBet] = useState('10');
  const [houseEdge, setHouseEdge] = useState('2');
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-amber-500/20 bg-black/30 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-red-500 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent">
                Admin Control Panel
              </h1>
            </Link>
            <Link href="/" className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 transition">
              ← Back to Casino
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Platform Stats */}
          <div className="card-gradient rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">📊 Platform Statistics</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                <span>Total Volume</span>
                <span className="font-bold text-green-400">1,234.56 SOL</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                <span>Total Games Played</span>
                <span className="font-bold text-purple-400">10,452</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                <span>House Profit</span>
                <span className="font-bold text-amber-400">+24.69 SOL</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                <span>Active Players</span>
                <span className="font-bold text-blue-400">1,234</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                <span>User Created Games</span>
                <span className="font-bold text-pink-400">256</span>
              </div>
            </div>
          </div>

          {/* Vault Management */}
          <div className="card-gradient rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">💰 Vault Management</h2>
            <div className="mb-6">
              <div className="text-center p-4 bg-black/30 rounded-lg mb-4">
                <div className="text-sm text-gray-400">Vault Balance</div>
                <div className="text-3xl font-bold text-green-400">567.89 SOL</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Deposit to Vault</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      placeholder="Amount in SOL"
                      className="flex-1 px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                    <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition">
                      Deposit
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Withdraw from Vault</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="Amount in SOL"
                      className="flex-1 px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                    <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 rounded-lg transition">
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Settings */}
          <div className="card-gradient rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">⚙️ Platform Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">House Edge (%)</label>
                <input
                  type="number"
                  value={houseEdge}
                  onChange={(e) => setHouseEdge(e.target.value)}
                  className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Minimum Bet (SOL)</label>
                <input
                  type="number"
                  value={minBet}
                  onChange={(e) => setMinBet(e.target.value)}
                  className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Maximum Bet (SOL)</label>
                <input
                  type="number"
                  value={maxBet}
                  onChange={(e) => setMaxBet(e.target.value)}
                  className="w-full px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>

              <button className="w-full py-3 bg-amber-600 hover:bg-amber-700 rounded-lg transition font-bold">
                💾 Save Settings
              </button>
            </div>
          </div>

          {/* Oracle Configuration */}
          <div className="card-gradient rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">🧠 Oracle Configuration</h2>
            <div className="space-y-4">
              <div className="p-3 bg-black/30 rounded">
                <div className="text-sm text-gray-400">Oracle Status</div>
                <div className="font-bold text-green-400 flex items-center mt-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Active
                </div>
              </div>

              <div className="p-3 bg-black/30 rounded">
                <div className="text-sm text-gray-400">Oracle Authority</div>
                <div className="font-mono text-xs mt-1 break-all">
                  7xK9...3mP2
                </div>
              </div>

              <div className="p-3 bg-black/30 rounded">
                <div className="text-sm text-gray-400">Random Numbers Generated</div>
                <div className="font-bold text-purple-400 mt-1">10,452</div>
              </div>

              <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition">
                🔄 Update Oracle Authority
              </button>
            </div>
          </div>

          {/* Recent Games */}
          <div className="card-gradient rounded-lg p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">🎮 Recent Games</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-purple-500/30">
                    <th className="pb-2">Player</th>
                    <th className="pb-2">Game</th>
                    <th className="pb-2">Bet</th>
                    <th className="pb-2">Result</th>
                    <th className="pb-2">Payout</th>
                    <th className="pb-2">Time</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[...Array(10)].map((_, i) => (
                    <tr key={i} className="border-b border-purple-500/10">
                      <td className="py-2 font-mono text-xs">7xK9...{i}mP2</td>
                      <td className="py-2">Coinflip</td>
                      <td className="py-2">0.{i}5 SOL</td>
                      <td className="py-2">
                        {i % 2 === 0 ? (
                          <span className="text-green-400">Win</span>
                        ) : (
                          <span className="text-red-400">Loss</span>
                        )}
                      </td>
                      <td className="py-2">{i % 2 === 0 ? `${(0.05 * (i + 1) * 1.96).toFixed(2)} SOL` : '-'}</td>
                      <td className="py-2 text-gray-400">{i + 1}m ago</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
