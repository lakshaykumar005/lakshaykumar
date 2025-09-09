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
        url: 'https://lakshaykumar.vercel.app/LOGO.png',
        width: 1024,
        height: 1024,
        alt: 'Lakshay Kumar - Full Stack Developer',
        type: 'image/png',
      },
      // Alternative image URLs in case the main one fails
      {
        url: '/LOGO.png',
        width: 1024,
        height: 1024,
        alt: 'Lakshay Kumar - Full Stack Developer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshay Kumar - Full Stack Developer',
    description: 'Passionate full stack web developer with expertise in Python, Java, JavaScript, React, Node.js, Flutter, and AI technologies.',
    images: ['https://lakshaykumar.vercel.app/LOGO.png'],
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
    // Additional Open Graph properties for better sharing
    'og:image:secure_url': 'https://lakshaykumar.vercel.app/LOGO.png',
    'og:image:width': '1024',
    'og:image:height': '1024',
    'og:image:alt': 'Lakshay Kumar - Full Stack Developer',
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
        {/* Additional meta tags for better Open Graph support */}
        <meta property="og:image" content="https://lakshaykumar.vercel.app/LOGO.png" />
        <meta property="og:image:secure_url" content="https://lakshaykumar.vercel.app/LOGO.png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:alt" content="Lakshay Kumar - Full Stack Developer" />
        <meta property="og:image:type" content="image/png" />
        
        {/* Twitter specific image meta tags */}
        <meta name="twitter:image" content="https://lakshaykumar.vercel.app/LOGO.png" />
        <meta name="twitter:image:alt" content="Lakshay Kumar - Full Stack Developer" />
        
        {/* Facebook specific meta tags */}
        <meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />
      </head>
      <body>{children}</body>
    </html>
  )
}