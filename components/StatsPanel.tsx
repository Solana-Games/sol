'use client';

export function StatsPanel() {
  return (
    <section className="mb-12">
      <h3 className="text-3xl font-bold mb-6">📈 Live Platform Stats</h3>
      <div className="card-gradient rounded-lg p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-black/30 rounded-lg">
            <div className="text-sm text-gray-400 mb-1">24h Volume</div>
            <div className="text-2xl font-bold text-green-400">125.4 SOL</div>
          </div>
          <div className="text-center p-4 bg-black/30 rounded-lg">
            <div className="text-sm text-gray-400 mb-1">24h Games</div>
            <div className="text-2xl font-bold text-purple-400">1,234</div>
          </div>
          <div className="text-center p-4 bg-black/30 rounded-lg">
            <div className="text-sm text-gray-400 mb-1">Players Online</div>
            <div className="text-2xl font-bold text-blue-400 flex items-center justify-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              89
            </div>
          </div>
          <div className="text-center p-4 bg-black/30 rounded-lg">
            <div className="text-sm text-gray-400 mb-1">Biggest Win</div>
            <div className="text-2xl font-bold text-amber-400">8.5 SOL</div>
          </div>
        </div>
      </div>
    </section>
  );
}
