'use client';

import { useState, useEffect } from 'react';

export function OraclePanel() {
  const [isActive, setIsActive] = useState(true);
  const [prediction, setPrediction] = useState('Analyzing...');

  useEffect(() => {
    const predictions = [
      'High winning probability on Coinflip',
      'Favorable conditions for Dice game',
      'Optimal betting window detected',
      'Market conditions favorable',
      'Smart contract variance low',
    ];

    const interval = setInterval(() => {
      setPrediction(predictions[Math.floor(Math.random() * predictions.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-12">
      <div className="card-gradient rounded-lg p-6 border-2 border-purple-500/50 glow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-pulse-slow">
              <span className="text-2xl">🧠</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Oracle AI Smart Brain
              </h3>
              <div className="flex items-center space-x-2">
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></span>
                <span className="text-sm text-gray-400">{isActive ? 'Active' : 'Offline'}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Predictions Made</div>
            <div className="text-2xl font-bold text-purple-400">10,452</div>
          </div>
        </div>

        <div className="bg-black/40 rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">💡</div>
            <div className="flex-1">
              <div className="text-sm text-gray-400 mb-1">Current Prediction</div>
              <div className="font-bold text-purple-300">{prediction}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-black/40 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-400 mb-1">Accuracy</div>
            <div className="text-lg font-bold text-green-400">94.5%</div>
          </div>
          <div className="bg-black/40 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-400 mb-1">Confidence</div>
            <div className="text-lg font-bold text-purple-400">High</div>
          </div>
          <div className="bg-black/40 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-400 mb-1">Network</div>
            <div className="text-lg font-bold text-blue-400">Optimal</div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50 rounded-lg transition font-bold">
            🎯 Get AI Recommendation
          </button>
        </div>
      </div>
    </section>
  );
}
