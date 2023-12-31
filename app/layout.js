import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  generator: 'Next.js',
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
      <meta name="theme-color" content="#fff" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
