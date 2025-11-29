'use client';

import { useState } from 'react';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { parseEther } from 'viem';

export const useVibeMinter = () => {
  const { address } = useAccount();
  const [isMinting, setIsMinting] = useState(false);
  
  const { config } = usePrepareContractWrite({
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    abi: [
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
    ],
    functionName: 'mintVibeNFT',
    args: [
      address,
      'https://example.com/metadata.json',
      'Test tweet about positive crypto vibes!',
      'POSITIVE',
      85,
      '@testuser',
      'POSITIVE_VIBE'
    ],
    value: parseEther('0.001')
  });

  const { write: mintNFT } = useContractWrite(config);

  const mintVibe = async (tweetText: string, twitterHandle: string, sentiment: string, score: number) => {
    if (!mintNFT) {
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
      
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            hash: '0x' + Math.random().toString(16).substr(2, 64),
            sentiment,
            score
          });
        }, 2000);
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
