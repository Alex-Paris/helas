import './globals.css'

import type { Metadata } from 'next'
import { Roboto_Flex as RobotoFlex } from 'next/font/google'

const roboto = RobotoFlex({
  weight: 'variable',
  variable: '--font-roboto-flex',
  axes: [
    'wdth',
    'slnt',
    'GRAD',
    'XTRA',
    'YOPQ',
    'YTLC',
    'YTUC',
    'YTAS',
    'YTDE',
    'YTFI',
    'opsz',
  ],
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
      <body className={roboto.variable}>{children}</body>
    </html>
  )
}
