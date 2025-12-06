import { createClient, configureChains } from 'wagmi';
import { hardhat } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';

const { publicClient, webSocketPublicClient } = configureChains(
  [hardhat],
  [publicProvider()]
);

export const wagmiClient = createClient({
  autoConnect: false,
  connectors: [
    new InjectedConnector({
      chains: [hardhat],
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

