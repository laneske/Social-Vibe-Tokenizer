'use client';

import { useState, useEffect } from 'react';
import { userTracker } from '@/lib/userTracker';

export default function LiveProgress() {
  const [stats, setStats] = useState(userTracker.getStats());
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      setStats(userTracker.getStats());
      setTimeElapsed(Date.now() - startTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  const usersPerHour = timeElapsed > 0 ? 
    (stats.totalUsers / (timeElapsed / 3600000)).toFixed(1) : '0';

  return (
    <div className="fixed top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-green-200 z-50 min-w-64">
      <div className="text-center">
        <h3 className="font-bold text-green-800 text-lg mb-2">🎯 LIVE PROGRESS</h3>
        
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-green-50 p-2 rounded-lg">
            <div className="text-2xl font-bold text-green-700">{stats.totalUsers}</div>
            <div className="text-xs text-green-600">USERS</div>
          </div>
          <div className="bg-blue-50 p-2 rounded-lg">
            <div className="text-2xl font-bold text-blue-700">{stats.totalMints}</div>
            <div className="text-xs text-blue-600">NFTS</div>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${stats.progress}%` }}
          ></div>
        </div>
        
        <div className="text-xs text-gray-600 mb-2">
          {stats.totalUsers}/40 users • {stats.progress.toFixed(1)}%
        </div>

        <div className="text-xs text-purple-600 font-semibold">
          ⚡ {usersPerHour} users/hour
        </div>

        {stats.totalUsers > 0 && (
          <div className="mt-2 text-xs text-orange-600">
            🎯 Need {40 - stats.totalUsers} more to win!
          </div>
        )}
      </div>
    </div>
  );
}
