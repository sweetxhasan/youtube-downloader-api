'use client'

import { RiMenuLine, RiCloseLine, RiYoutubeFill, RiMoonLine, RiSunLine, RiMailLine } from '@remixicon/react'

export default function Header({ sidebarOpen, setSidebarOpen, darkMode, toggleTheme }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b-1 border-solid bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <RiYoutubeFill className="text-red-600 text-2xl" />
              <h1 className="text-xl font-bold">YT SAVE</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => window.location.href = '#api-examples'}
                className="px-4 py-2 border-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                API Examples
              </button>
              <button
                onClick={() => window.location.href = '#response'}
                className="px-4 py-2 border-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Response
              </button>
              <button
                onClick={() => window.location.href = '#features'}
                className="px-4 py-2 border-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => window.open('mailto:contact@example.com')}
                className="px-4 py-2 border-1 bg-blue-600 text-white hover:bg-blue-700 flex items-center space-x-2"
              >
                <RiMailLine />
                <span>Contact</span>
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 border-1 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <RiSunLine /> : <RiMoonLine />}
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 border-1 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <RiSunLine /> : <RiMoonLine />}
              </button>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 border-1 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {sidebarOpen ? <RiCloseLine /> : <RiMenuLine />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-l-1">
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-bold">Menu</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2"
                >
                  <RiCloseLine />
                </button>
              </div>
              
              <nav className="space-y-4">
                <button
                  onClick={() => {
                    window.location.href = '#api-examples'
                    setSidebarOpen(false)
                  }}
                  className="block w-full text-left px-4 py-3 border-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  API Examples
                </button>
                <button
                  onClick={() => {
                    window.location.href = '#response'
                    setSidebarOpen(false)
                  }}
                  className="block w-full text-left px-4 py-3 border-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Response Example
                </button>
                <button
                  onClick={() => {
                    window.location.href = '#features'
                    setSidebarOpen(false)
                  }}
                  className="block w-full text-left px-4 py-3 border-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Features
                </button>
                <button
                  onClick={() => window.open('mailto:contact@example.com')}
                  className="block w-full text-left px-4 py-3 border-1 bg-blue-600 text-white hover:bg-blue-700"
                >
                  Contact Us
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
      }
