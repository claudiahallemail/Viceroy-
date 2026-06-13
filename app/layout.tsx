import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Viceroy Residences | Clearwater Beach — From $1.995M',
  description:
    'Two towers of extraordinary Gulf-front living. 86 residences and 8 penthouses from $1.995M at Clearwater Beach, Florida. Designed by Randall Stofft with interiors by Steven G.',
  keywords:
    'Viceroy Residences Clearwater Beach, luxury condos Florida, gulf front condos, Clearwater Beach penthouses, luxury real estate Florida',
  openGraph: {
    title: 'Viceroy Residences | Clearwater Beach',
    description: '270 Feet of Gulf Beach Frontage. From $1.995M.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
