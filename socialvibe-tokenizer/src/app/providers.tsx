'use client';

import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  // No wrapper needed - using ethers directly
  return <>{children}</>;
}
