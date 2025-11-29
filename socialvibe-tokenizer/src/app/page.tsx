'use client';

import { useState } from 'react';
import VibeMinter from '@/components/VibeMinter';
import AdminDashboard from '@/components/AdminDashboard';
import LiveProgress from '@/components/LiveProgress';

export default function Home() {
  const [view, setView] = useState<'minter' | 'dashboard'>('minter');

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
            🌈 SocialVibe Tokenizer
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Turn positive social vibes into tradable NFTs for the @Seedify bounty
          </p>
          
          {/* Navigation */}
          <div className="flex gap-4 justify-center mb-8">
            <button
              onClick={() => setView('minter')}
              className={`px-6 py-3 rounded-xl font-bold transition ${
                view === 'minter'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              ✨ Mint NFT
            </button>
            <button
              onClick={() => setView('dashboard')}
              className={`px-6 py-3 rounded-xl font-bold transition ${
                view === 'dashboard'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              🎯 Dashboard
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          {view === 'minter' ? <VibeMinter /> : <AdminDashboard />}
        </div>
      </div>

      {/* Live Progress Widget */}
      <LiveProgress />
    </main>
  );
}
