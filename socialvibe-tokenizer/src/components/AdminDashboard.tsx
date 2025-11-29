'use client';

import { useState, useEffect } from 'react';
import { userTracker } from '@/lib/userTracker';

export default function AdminDashboard() {
  const [stats, setStats] = useState(userTracker.getStats());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setStats(userTracker.getStats());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  const progress = stats.progress;
  const usersNeeded = 40 - stats.totalUsers;

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
      <h2 className="text-4xl font-bold text-purple-800 mb-8 text-center">
        🎯 Bounty Progress Dashboard
      </h2>
      
      <div className="mb-12">
        <div className="flex justify-between mb-4">
          <span className="text-lg font-semibold text-purple-800">User Acquisition Progress</span>
          <span className="text-lg font-semibold text-purple-800">
            {stats.totalUsers}/40 Users
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-8 mb-4 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-8 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-4"
            style={{ width: `${progress}%` }}
          >
            {progress >= 15 && (
              <span className="text-white font-bold text-sm">
                {progress.toFixed(1)}%
              </span>
            )}
          </div>
        </div>
        
        <div className="text-center">
          <p className={`text-2xl font-bold ${
            usersNeeded <= 10 ? 'text-green-600' : 
            usersNeeded <= 20 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {usersNeeded > 0 ? 
              `🎯 ${usersNeeded} more user${usersNeeded === 1 ? '' : 's'} needed!` : 
              '🎉 GOAL ACHIEVED! 🎉'
            }
          </p>
          {usersNeeded > 0 && (
            <p className="text-gray-600 mt-2">
              Share with crypto friends to help us win the Seedify bounty!
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl text-center text-white shadow-lg">
          <div className="text-4xl font-bold mb-2">{stats.totalUsers}</div>
          <div className="text-purple-100">Active Users</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-6 rounded-2xl text-center text-white shadow-lg">
          <div className="text-4xl font-bold mb-2">{stats.totalMints}</div>
          <div className="text-blue-100">Vibe NFTs Minted</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-400 p-6 rounded-2xl text-center text-white shadow-lg">
          <div className="text-4xl font-bold mb-2">
            {((stats.totalMints / Math.max(stats.totalUsers, 1)) * 100).toFixed(1)}%
          </div>
          <div className="text-green-100">Mint Rate</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-purple-200 shadow-lg">
          <h3 className="font-bold text-purple-800 mb-4 text-xl flex items-center">
            👥 Recent Users
            <span className="ml-2 bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded-full">
              {stats.recentUsers.length}
            </span>
          </h3>
          <div className="space-y-3">
            {stats.recentUsers.length > 0 ? (
              stats.recentUsers.map((user, index) => (
                <div key={user.id} className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-purple-800">
                        {user.twitterHandle || 'Anonymous'}
                      </div>
                      <div className="text-xs text-purple-600">
                        {user.walletAddress.slice(0, 8)}...{user.walletAddress.slice(-6)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-purple-700">
                      {user.nftsMinted} NFT{user.nftsMinted !== 1 ? 's' : ''}
                    </div>
                    <div className="text-xs text-purple-500">
                      {new Date(user.joinedDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-2">👤</div>
                <p>No users yet</p>
                <p className="text-sm">Be the first to mint a Vibe NFT!</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-pink-200 shadow-lg">
          <h3 className="font-bold text-pink-800 mb-4 text-xl flex items-center">
            🎨 Quick Actions
          </h3>
          <div className="space-y-4">
            <button 
              onClick={() => navigator.clipboard.writeText('http://localhost:3000')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition duration-200 flex items-center justify-center"
            >
              📋 Copy Test Link
            </button>
            
            <button 
              onClick={() => {
                const tweetText = encodeURIComponent(
                  "🚀 I'm testing SocialVibe Tokenizer for the @Seedify bounty! " +
                  "Turning positive crypto vibes into NFTs. Join me and get a free Founder NFT! " +
                  "#Seedify #Bounty #Web3 #NFT"
                );
                window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
              }}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-4 rounded-xl transition duration-200 flex items-center justify-center"
            >
              🐦 Share on Twitter
            </button>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl">
            <h4 className="font-bold text-green-800 mb-2">🎯 Bounty Submission Checklist</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li className={stats.totalUsers >= 40 ? 'line-through text-green-500' : ''}>
                ✅ 40+ Real Users: {stats.totalUsers}/40
              </li>
              <li>✅ Functional App: ✓ Running</li>
              <li>✅ Real Utility: ✓ Vibe NFTs</li>
              <li>✅ Business Plan: ✓ Ready</li>
              <li>✅ Unique Concept: ✓ Social Vibes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
