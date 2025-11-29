import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SocialVibe Tokenizer',
  description: 'Turn positive social vibes into NFTs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
