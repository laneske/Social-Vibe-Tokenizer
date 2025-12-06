'use client';

import { ReactNode } from 'react';
import { WagmiConfig } from 'wagmi';
import { wagmiClient } from '@/lib/wagmi';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig client={wagmiClient}>
      {children}
    </WagmiConfig>
  );
}
