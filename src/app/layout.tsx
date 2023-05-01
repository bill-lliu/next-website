import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Siyi Bill Liu',
  description: 'An Interactive Personal Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <main>
            {/* global nav bar */}
            {/* <nav>
              <Link href="/">Home</Link>
              <Link href="/portfolio">Portfolio</Link>
            </nav> */}
            {children}
            {/* global footer */}
            {/* <footer>©</footer> */}
          </main>
        </body>
    </html>
  )
}
