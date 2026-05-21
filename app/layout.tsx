import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord Mod Burnout Detector',
  description: 'Detect Discord moderator burnout before it happens. Analyze activity patterns, response times, and sentiment to protect your mod team.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f5e56757-c59e-49a1-8cd4-cc32afff3117"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
