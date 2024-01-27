import './globals.css'

import type { Metadata } from 'next'
import { Roboto_Flex as RobotoFlex } from 'next/font/google'

const inter = RobotoFlex({
  weight: ['700'],
  variable: '--font-roboto-flex',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hélas',
  description: 'Nelios Page Test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="el">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
