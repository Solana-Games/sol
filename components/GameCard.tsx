'use client';

interface GameCardProps {
  title: string;
  emoji: string;
  multiplier: string;
  description: string;
  onPlay: () => void;
}

export function GameCard({ title, emoji, multiplier, description, onPlay }: GameCardProps) {
  return (
    <div className="card-gradient rounded-lg p-6 hover:shadow-xl hover:shadow-purple-500/30 transition-all transform hover:scale-105">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-float">{emoji}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="inline-block px-4 py-2 bg-purple-600/30 rounded-full mb-3">
          <span className="text-xl font-bold text-purple-400">{multiplier}</span>
        </div>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <button
          onClick={onPlay}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50 rounded-lg transition font-bold"
        >
          Play Now
        </button>
      </div>
    </div>
  );
}
