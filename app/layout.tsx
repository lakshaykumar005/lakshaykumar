import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://lakshaykumar.vercel.app'),
  title: 'Lakshay Kumar - Full Stack Developer',
  description: 'Passionate full stack web developer with expertise in Python, Java, JavaScript, React, Node.js, Flutter, and AI technologies. View my portfolio and get in touch!',
  generator: 'Next.js',
  keywords: ['Lakshay Kumar', 'Full Stack Developer', 'Web Developer', 'Python', 'Java', 'JavaScript', 'React', 'Node.js', 'Flutter', 'AI', 'Portfolio'],
  authors: [{ name: 'Lakshay Kumar' }],
  creator: 'Lakshay Kumar',
  publisher: 'Lakshay Kumar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lakshaykumar.vercel.app',
    siteName: 'Lakshay Kumar Portfolio',
    title: 'Lakshay Kumar - Full Stack Developer',
    description: 'Passionate full stack web developer with expertise in Python, Java, JavaScript, React, Node.js, Flutter, and AI technologies. View my portfolio and get in touch!',
    images: [
      {
        url: 'https://lakshaykumar.vercel.app/LOGO.jpg',
        width: 1200,
        height: 630,
        alt: 'Lakshay Kumar - Full Stack Developer',
        type: 'image/jpeg',
      },
      {
        url: 'https://lakshaykumar.vercel.app/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Lakshay Kumar - Full Stack Developer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshay Kumar - Full Stack Developer',
    description: 'Passionate full stack web developer with expertise in Python, Java, JavaScript, React, Node.js, Flutter, and AI technologies.',
    images: ['https://lakshaykumar.vercel.app/LOGO.jpg'],
    creator: '@lakshaykumar005',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/LOGO.png',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#2563eb',
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="fb:app_id" content="123456789" />
        <meta property="og:image:secure_url" content="https://lakshaykumar.vercel.app/LOGO.jpg" />
        <meta name="twitter:image:src" content="https://lakshaykumar.vercel.app/LOGO.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}