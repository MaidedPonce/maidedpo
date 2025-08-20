import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Maided Hernandez - Frontend Developer',
  description: 'Portfolio profesional de Maided Hernandez, desarrolladora frontend especializada en React, Next.js y Tailwind CSS. Experiencia en Redux, JavaScript y diseño responsive.',
  keywords: ['frontend developer', 'React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Redux', 'portfolio', 'desarrolladora frontend'],
  authors: [{ name: 'Maided Hernandez' }],
  creator: 'Maided Hernandez',
  publisher: 'Maided Hernandez',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    title: 'Maided Hernandez - Frontend Developer',
    description: 'Portfolio profesional de Maided Hernandez, desarrolladora frontend especializada en React, Next.js y tecnologías modernas.',
    siteName: 'Maided Hernandez Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maided Hernandez - Frontend Developer',
    description: 'Portfolio profesional de desarrolladora frontend especializada en React y Next.js',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className="font-sans">{children}</body>
    </html>
  )
}
