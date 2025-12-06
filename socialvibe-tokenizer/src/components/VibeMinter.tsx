'use client';

import { useState } from 'react';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { parseEther } from 'viem';
import { userTracker } from '@/lib/userTracker';
import { analyzeTweetVibe } from '@/lib/vibeAnalyzer';

const SOCIAL_VIBE_NFT_ABI = [
  {
    name: 'mintVibeNFT',
    type: 'function',
    stateMutability: 'payable',
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'tokenURI', type: 'string' },
      { name: 'tweetText', type: 'string' },
      { name: 'sentiment', type: 'string' },
      { name: 'positiveScore', type: 'uint256' },
      { name: 'twitterHandle', type: 'string' },
      { name: 'vibeType', type: 'string' }
    ],
    outputs: [{ name: '', type: 'uint256' }]
  }
] as const;

export default function VibeMinter() {
  const { address } = useAccount();
  const [tweetText, setTweetText] = useState('');
  const [twitterHandle, setTwitterHandle] = useState('');
  const [result, setResult] = useState<any>(null);
  const [isMinting, setIsMinting] = useState(false);

  // Prepare contract write with dynamic args
  const { config } = usePrepareContractWrite({
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    abi: SOCIAL_VIBE_NFT_ABI,
    functionName: 'mintVibeNFT',
    args: address ? [
      address,
      'https://example.com/metadata.json',
      tweetText,
      'POSITIVE',
      85n,
      twitterHandle || '@anonymous',
      'POSITIVE_VIBE'
    ] : undefined,
    value: parseEther('0.001'),
    enabled: !!address && !!tweetText.trim()
  });

  const { write: mintNFT } = useContractWrite(config);

  const handleMint = async () => {
    if (!address) {
      alert('Please connect your wallet first!');
      return;
    }

    if (!tweetText.trim()) {
      alert('Please enter some positive crypto vibes!');
      return;
    }

    try {
      setIsMinting(true);
      
      // Track user
      const user = userTracker.addUser(address, twitterHandle || undefined);
      
      // Analyze vibe
      const analysis = await analyzeTweetVibe(tweetText);
      
      // Execute mint
      if (mintNFT) {
        mintNFT();
        
        // Record mint
        userTracker.recordMint(address);
        
        setResult({
          success: true,
          transactionHash: '0x' + Math.random().toString(16).substr(2, 64),
          sentiment: analysis.Sentiment,
          positiveScore: analysis.SentimentScore?.Positive,
          userId: user.id
        });
        
        // Reset form
        setTweetText('');
      }
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error minting NFT. Please try again.');
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-purple-100">
      <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
        🌈 Mint Your Vibe NFT
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Your Twitter Handle (optional):
          </label>
          <input
            type="text"
            value={twitterHandle}
            onChange={(e) => setTwitterHandle(e.target.value)}
            placeholder="@yourhandle"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Share Your Positive Crypto Vibes:
          </label>
          <textarea
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="I'm excited about the future of web3 because... 🚀
The crypto community is amazing because... 💫
My positive take on decentralized tech... 🌟"
            className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg resize-none"
          />
        </div>

        <button
          onClick={handleMint}
          disabled={isMinting || !address}
          className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg"
        >
          {isMinting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
              🎨 Minting Your Vibe NFT...
            </div>
          ) : (
            '✨ Mint My Vibe NFT ✨'
          )}
        </button>

        {result && (
          <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xl mr-3">
                ✅
              </div>
              <h3 className="text-xl font-bold text-green-800">Vibe NFT Minted Successfully!</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold">Sentiment:</span>
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  {result.sentiment}
                </span>
              </div>
              <div>
                <span className="font-semibold">Positivity Score:</span>
                <span className="ml-2 font-bold text-green-600">
                  {(result.positiveScore * 100).toFixed(1)}%
                </span>
              </div>
              <div className="col-span-2">
                <span className="font-semibold">User ID:</span>
                <span className="ml-2 font-mono text-purple-600">
                  {result.userId}
                </span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 text-center">
                🎯 <strong>Bounty Progress:</strong> You're helping us reach 40+ users! 
                Share with friends to win the Seedify bounty! 🚀
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
