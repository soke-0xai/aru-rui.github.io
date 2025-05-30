import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '夢泡アーカイブ',
  description: '或るいの作品集',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link href="https://fonts.googleapis.com/earlyaccess/hannari.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}