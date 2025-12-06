'use client';

import { useState } from 'react';
import { useAccount, useWriteContract } from 'wagmi';
import { parseEther } from 'viem';

export const useVibeMinter = () => {
  const { address } = useAccount();
  const [isMinting, setIsMinting] = useState(false);
  
  const { writeContract } = useWriteContract();
  
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

  const mintVibe = async (tweetText: string, twitterHandle: string, sentiment: string, score: number) => {
    if (!writeContract || !address) {
      console.error('Contract not ready');
      return;
    }

    setIsMinting(true);
    try {
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

      const tokenURI = "https://socialvibe-nfts.s3.amazonaws.com/metadata/base.json";
      
      writeContract({
        address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        abi: SOCIAL_VIBE_NFT_ABI,
        functionName: 'mintVibeNFT',
        args: [
          address,
          tokenURI,
          tweetText,
          sentiment,
          BigInt(score),
          twitterHandle,
          'POSITIVE_VIBE'
        ],
        value: parseEther('0.001'),
      });
      
    } catch (error) {
      console.error('Minting error:', error);
      throw error;
    } finally {
      setIsMinting(false);
    }
  };

  return { mintVibe, isMinting };
};
