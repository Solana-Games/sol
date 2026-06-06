import './globals.css'
import '@/lib/env'
import type { Metadata } from 'next'
import { WalletProvider } from '@/components/WalletProvider'

export const metadata: Metadata = {
  title: 'Supercharged Solana Casino',
  description: 'AI-Powered Casino Platform with User Game Builder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  )
}
