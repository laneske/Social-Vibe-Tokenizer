// Simple ethers.js provider setup - no wagmi complexity
import { JsonRpcProvider } from 'ethers';

export const getProvider = () => {
  if (typeof window === 'undefined') return null;
  
  // Connect to local Hardhat node
  return new JsonRpcProvider('http://127.0.0.1:8545');
};

