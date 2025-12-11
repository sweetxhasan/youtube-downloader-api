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
      <section className="text-center py-12 border-b-1 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          YouTube Video Downloader <span className="text-blue-600">API</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Super fast API for downloading YouTube videos in multiple formats and resolutions.
        </p>
        
        <div className="max-w-2xl mx-auto p-4 border-1 bg-gray-50 dark:bg-gray-800">
          <code className="text-sm">
            GET https://your-domain.com/api/youtube/download?url=YOUTUBE_URL
          </code>
        </div>
      </section>

      <section id="api-examples" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 border-b-1 pb-4">API Request Examples</h2>
        <CodeExample activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>

      <section id="response" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 border-b-1 pb-4">API Response Example</h2>
        <ApiResponse />
      </section>

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
    </div>
  )
}
