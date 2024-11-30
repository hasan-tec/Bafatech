import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BafaTech Consulting',
  description: 'Cybersecurity and Enterprise Asset Management Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-nunito">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}

