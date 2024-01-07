import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ContentBase } from './components/Content'

import Providers from './providers'
import "../globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Porfolio de Warner - Desarrollador y Programador Web con 4 años de experiencia',
  description: 'Contrata a Warner para crear tu aplicación web o móvil. Desarrollador Frontend. Especializado en crear aplicaciones únicas.',
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
