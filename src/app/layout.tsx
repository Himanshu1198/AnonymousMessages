import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anonymous Messages',
  description: 'Send messages anonymouly',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <head>
        {/* Set the title dynamically using Next.js Head component */}
        <title>{metadata.title as string}</title>

        {/* Optionally, include other meta tags, stylesheets, etc. */}
        <meta name='description' content={metadata.description as string} />

        {/* Include global styles */}
        <link rel='stylesheet' href='/path/to/globals.css' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest'/>
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
