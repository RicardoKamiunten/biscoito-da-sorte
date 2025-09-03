import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Biscoito da Sorte - Descubra sua fortuna',
  description: 'Aplicação interativa de biscoito da sorte.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header>
  
        </header>

        <main>{children}</main>

        <footer>
          
        </footer>
      </body>
    </html>
  )
}
