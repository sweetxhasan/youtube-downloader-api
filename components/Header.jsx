// components/Header.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { RiMenuLine, RiCloseLine, RiYoutubeLine, RiGithubLine, RiMailLine } from 'react-icons/ri'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden p-2 border border-border hover:bg-secondary transition-colors"
                aria-label="Open menu"
              >
                <RiMenuLine className="w-5 h-5" />
              </button>
              <Link href="/" className="flex items-center gap-2">
                <RiYoutubeLine className="w-6 h-6 text-red-500" />
                <span className="text-xl font-bold">YT SAVE</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                href="/" 
                className="text-sm font-medium hover:text-primary transition-colors border-b border-transparent hover:border-primary"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-medium hover:text-primary transition-colors border-b border-transparent hover:border-primary"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-sm font-medium hover:text-primary transition-colors border-b border-transparent hover:border-primary"
              >
                Contact
              </Link>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition-colors border-b border-transparent hover:border-primary flex items-center gap-1"
              >
                <RiGithubLine className="w-4 h-4" />
                GitHub
              </a>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link 
                href="/contact" 
                className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-border hover:bg-secondary transition-colors"
              >
                <RiMailLine className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-xs border-r border-border bg-background p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <RiYoutubeLine className="w-6 h-6 text-red-500" />
                <span className="text-xl font-bold">YT SAVE</span>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 border border-border hover:bg-secondary transition-colors"
                aria-label="Close menu"
              >
                <RiCloseLine className="w-5 h-5" />
              </button>
            </div>
            <nav className="space-y-4">
              <Link 
                href="/" 
                className="flex items-center gap-3 p-3 text-sm font-medium hover:bg-secondary transition-colors border border-transparent hover:border-border"
                onClick={() => setIsSidebarOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="flex items-center gap-3 p-3 text-sm font-medium hover:bg-secondary transition-colors border border-transparent hover:border-border"
                onClick={() => setIsSidebarOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center gap-3 p-3 text-sm font-medium hover:bg-secondary transition-colors border border-transparent hover:border-border"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 text-sm font-medium hover:bg-secondary transition-colors border border-transparent hover:border-border"
                onClick={() => setIsSidebarOpen(false)}
              >
                <RiGithubLine className="w-4 h-4" />
                GitHub
              </a>
            </nav>
            <div className="absolute bottom-6 left-6 right-6">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  )
            }
