import { http, createConfig } from 'wagmi';
import { polygonMumbai, hardhat } from 'wagmi/chains';
import { metaMask } from 'wagmi/connectors';

// Create wagmi config for v3
export const config = createConfig({
  chains: [hardhat, polygonMumbai],
  connectors: [
    metaMask({
      shimDisconnect: true,
    }),
  ],
  transports: {
    [hardhat.id]: http('http://127.0.0.1:8545'),
    [polygonMumbai.id]: http(),
  },
});

// Export chains for components
export const chains = [hardhat, polygonMumbai];
