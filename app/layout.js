'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <head>
        <title>YT SAVE - YouTube Video Downloader API</title>
        <meta name="description" content="Super fast YouTube video downloader API with multiple format support" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`min-h-screen flex flex-col ${
        darkMode 
          ? 'bg-[var(--dark-bg)] text-white border-[var(--dark-border)]' 
          : 'bg-[var(--light-bg)] text-gray-900 border-[var(--light-border)]'
      }`}>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/toastify-js/1.12.0/toastify.min.js" />
        
        <Header 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        
        <Footer />
        
        <Script id="toastify-init">
          {`
            window.showToast = (message, type = 'success') => {
              Toastify({
                text: message,
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: type === 'success' ? "#10b981" : "#ef4444",
                className: "border-1",
                stopOnFocus: true,
              }).showToast();
            }
          `}
        </Script>
      </body>
    </html>
  )
}
