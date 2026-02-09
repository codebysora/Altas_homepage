import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { DifyChatbot } from '@/components/dify-chatbot'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AI・業務自動化コンサルティング | 自由は、仕組みから生まれる',
  description: '人がやらなくていい仕事は、仕組みに任せる。AIと自動化で業務の裏側を整え、現場が本来やるべき仕事に集中できる状態をつくります。',
  generator: 'ATLAS',
  icons: {
    icon: [
      {
        url: '/Atlas_Tahoe_Icon.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Atlas_Tahoe_Icon.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/Atlas_Tahoe_Icon.webp',
        type: 'image/webp',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <DifyChatbot />
      </body>
    </html>
  )
}
