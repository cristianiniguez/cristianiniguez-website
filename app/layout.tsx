import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import clsx from 'clsx'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin']
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Cristian Iñiguez | Web Developer',
  description: 'Web Developer with passion for technology and software'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={clsx(spaceGrotesk.variable, inter.variable, 'h-full antialiased')}>
      <body className='min-h-full flex flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
