import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ContentBase } from './components/Content'

import Providers from './providers'
import "../globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Warner Portfolio - Web Developer and Programmer with 4 years of experience',
  description: 'Hire Warner to create your web or mobile application. Frontend Developer. Specialized in creating unique applications.',
  icons: {
    icon: [
      {
        url: '/icons/favicon.png',
        href: '/icons/favicon.png',
      },
    ]
  },
  openGraph: {
    type: "website",
    url: "https://warner-hurtado-laguna.vercel.app/",
    title: "Warner Hurtado - About",
    description: "Software Engineer, specialized in frontend and backend development.",
    siteName: "Warner Hurtado Laguna",
    images: [{
      url: "https://warner-hurtado-laguna.vercel.app/images/opengraphImage.jpg",
    }],
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
        <meta name="google-site-verification" content="3yDzkR5ciC5g6Zezd2ir7hdictdNu5FfVECl_QJoWX0" />
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
