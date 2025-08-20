import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maided Ponce',
  description: 'Frontend Developer - Portfolio Personal de Maided Hernandez',
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
