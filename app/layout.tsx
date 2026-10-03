import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: "AKS Housing & Interior's — Residential Construction", template: "%s — AKS Housing & Interior's" },
  description: "A concept preview for AKS Housing & Interior's, a residential construction company in Pattukkottai, Tamil Nadu.",
  generator: 'Hive Tech',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f0eee9' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
