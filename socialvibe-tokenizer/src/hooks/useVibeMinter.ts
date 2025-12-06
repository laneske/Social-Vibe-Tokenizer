'use client';

import { useState } from 'react';

const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const CONTRACT_ABI = [
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
];

export const useVibeMinter = () => {
  const [isMinting, setIsMinting] = useState(false);

  const mintVibe = async (tweetText: string, twitterHandle: string, sentiment: string, score: number) => {
    setIsMinting(true);
    try {
      // For demo purposes, simulate a successful mint
      // In production, this would connect to MetaMask and call the actual contract
      console.log('Minting NFT with:', { tweetText, twitterHandle, sentiment, score });
      
      const metadata = {
        name: `Vibe NFT #${Date.now()}`,
        description: `Positive social vibe: ${tweetText}`,
        image: "https://bafybeihpjhkeuiq3k6nqa3fkgeigeri7iebtrsuyuer5n6o2yx3fxhys2q.ipfs.dweb.link/positive-vibe.png",
        attributes: [
          { trait_type: "Sentiment", value: sentiment },
          { trait_type: "Positive Score", value: score },
          { trait_type: "Type", value: "SOCIAL_VIBE" },
          { trait_type: "Twitter Handle", value: twitterHandle }
        ]
      };

      // Simulate network delay for realistic UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return {
        hash: '0x' + Math.random().toString(16).substring(2, 66),
        sentiment,
        score
      };
      
    } catch (error) {
      console.error('Minting error:', error);
      throw error;
    } finally {
      setIsMinting(false);
    }
  };

  return { mintVibe, isMinting };
};
