// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YT SAVE - YouTube Video Downloader API',
  description: 'High-performance YouTube Video Downloader API with super fast response times',
  keywords: 'youtube downloader, api, video download, youtube api, download videos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.jsdelivr.net/npm/toastify-js" defer></script>
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col border border-border">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
