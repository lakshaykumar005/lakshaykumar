import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://lakshaykumar.vercel.app'),
  title: 'Lakshay Kumar - Full Stack Developer',
  description:
    'Passionate full stack web developer with expertise in Python, Java, JavaScript, React, Node.js, Flutter, and AI technologies. View my portfolio and get in touch!',
  openGraph: {
    type: 'website',
    url: 'https://lakshaykumar.vercel.app',
    title: 'Lakshay Kumar - Full Stack Developer',
    description:
      'Passionate full stack web developer with expertise in Python, Java, JavaScript, React, Node.js, Flutter, and AI technologies.',
    siteName: 'Lakshay Kumar Portfolio',
    images: [
      {
        url: 'https://lakshaykumar.vercel.app/LOGO.png',
        width: 1024,
        height: 1024,
        alt: 'Lakshay Kumar - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshay Kumar - Full Stack Developer',
    description:
      'Passionate full stack web developer with expertise in Python, Java, JavaScript, React, Node.js, Flutter, and AI technologies.',
    images: ['https://lakshaykumar.vercel.app/LOGO.png'],
    creator: '@lakshaykumar005',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/LOGO.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
