'use client'

import { useState } from 'react'
import CodeExample from './components/CodeExample'
import ApiResponse from './components/ApiResponse'
import { 
  RiDownloadLine, 
  RiFlashlightLine, 
  RiShieldCheckLine, 
  RiSmartphoneLine,
  RiCodeSSlashLine,
  RiServerLine,
  RiGlobalLine,
  RiTimerLine
} from '@remixicon/react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('javascript')
  
  const features = [
    {
      icon: <RiFlashlightLine />,
      title: 'Super Fast Response',
      description: 'Edge runtime with optimized caching for milliseconds response time'
    },
    {
      icon: <RiShieldCheckLine />,
      title: 'Secure & Private',
      description: 'Your API key remains private, only public endpoints are exposed'
    },
    {
      icon: <RiSmartphoneLine />,
      title: 'Mobile Friendly',
      description: 'Fully responsive design optimized for all screen sizes'
    },
    {
      icon: <RiCodeSSlashLine />,
      title: 'Multiple Formats',
      description: 'Support for MP4, WebM, M4A, Opus formats in all resolutions'
    },
    {
      icon: <RiServerLine />,
      title: 'Proxy Rotation',
      description: '15+ rotating user agents to prevent rate limiting'
    },
    {
      icon: <RiGlobalLine />,
      title: 'Global CDN',
      description: 'Deployed on Vercel Edge Network worldwide'
    },
    {
      icon: <RiTimerLine />,
      title: '24/7 Uptime',
      description: 'High availability with automatic failover'
    },
    {
      icon: <RiDownloadLine />,
      title: 'Bulk Downloads',
      description: 'Support for multiple video downloads in single request'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 border-b-1 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          YouTube Video Downloader <span className="text-blue-600">API</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Super fast API for downloading YouTube videos in multiple formats and resolutions. 
          Easy integration with JavaScript, PHP, Python, Node.js and more.
        </p>
        
        <div className="max-w-2xl mx-auto p-4 border-1 bg-gray-50 dark:bg-gray-800">
          <code className="text-sm">
            GET https://your-domain.com/api/youtube/download?url=YOUTUBE_URL
          </code>
        </div>
      </section>

      {/* API Examples Section */}
      <section id="api-examples" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 border-b-1 pb-4">API Request Examples</h2>
        <CodeExample activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>

      {/* Response Example Section */}
      <section id="response" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 border-b-1 pb-4">API Response Example</h2>
        <ApiResponse />
      </section>

      {/* Features Section */}
      <section id="features" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 border-b-1 pb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 border-1 hover:border-blue-500 transition-all hover:shadow-lg"
            >
              <div className="text-3xl text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="border-1 p-8 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white flex items-center justify-center border-1">
              1
            </div>
            <div>
              <h3 className="font-semibold mb-1">Get Your API Key</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Contact us to get your unique API key (not required for basic usage)
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white flex items-center justify-center border-1">
              2
            </div>
            <div>
              <h3 className="font-semibold mb-1">Make Your First Request</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use the example code above to make your first API call
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white flex items-center justify-center border-1">
              3
            </div>
            <div>
              <h3 className="font-semibold mb-1">Handle the Response</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Parse the JSON response and display download links to users
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
    }
