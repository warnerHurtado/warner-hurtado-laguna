import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ContentBase } from './components/Content'

import Providers from './providers'
import "../globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Warner Portfolio - Web Developer and Programmer with 4 years of experience',
  description: 'Hire Warner to create your web or mobile application. Frontend Developer. Specialised in creating unique applications.',
  icons: {
    icon: [
      {
        url: '/icons/favicon.png',
        href: '/icons/favicon.png',
      },
    ]
  }
}

type LayoutProps = {
  children: React.ReactNode
  params: {
    lng: string
  }
}

export default function RootLayout({
  children, params: { lng }
}: LayoutProps) {

  return (
    <html lang={lng} >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body className={inter.className}>
        <Providers>
          <ContentBase lng={lng}>
            {children}
          </ContentBase>
        </Providers>
      </body>
    </html>
  )
}
