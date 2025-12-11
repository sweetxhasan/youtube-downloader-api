// app/page.js
'use client'

import { useState, useEffect } from 'react'
import { 
  RiZapLine, 
  RiShieldCheckLine, 
  RiGlobeLine, 
  RiDownloadLine,
  RiCheckboxCircleLine,
  RiTimeLine,
  RiServerLine,
  RiLockLine
} from 'react-icons/ri'
import CodeExample from '@/components/CodeExample'
import ApiResponseExample from '@/components/ApiResponseExample'

export default function Home() {
  const [apiUrl, setApiUrl] = useState('')

  useEffect(() => {
    // Set the current API URL
    const baseUrl = window.location.origin
    setApiUrl(`${baseUrl}/api/youtube/download?url=https://youtu.be/VIDEO_ID`)
  }, [])

  const copyApiUrl = () => {
    navigator.clipboard.writeText(apiUrl)
    
    if (typeof window !== 'undefined' && window.Toastify) {
      window.Toastify({
        text: "API URL copied to clipboard!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "hsl(var(--primary))",
        stopOnFocus: true,
      }).showToast();
    }
  }

  const features = [
    {
      icon: <RiZapLine className="w-6 h-6" />,
      title: "Super Fast",
      description: "Lightning-fast response times with optimized proxy servers"
    },
    {
      icon: <RiShieldCheckLine className="w-6 h-6" />,
      title: "Secure",
      description: "Built with security in mind. No data storage or logging"
    },
    {
      icon: <RiGlobeLine className="w-6 h-6" />,
      title: "Global",
      description: "Works worldwide with multiple proxy locations"
    },
    {
      icon: <RiDownloadLine className="w-6 h-6" />,
      title: "Multiple Formats",
      description: "Supports MP4, WebM, M4A, Opus formats with various qualities"
    },
    {
      icon: <RiTimeLine className="w-6 h-6" />,
      title: "24/7 Uptime",
      description: "High availability with automatic failover"
    },
    {
      icon: <RiServerLine className="w-6 h-6" />,
      title: "Scalable",
      description: "Handles thousands of requests per second"
    }
  ]

  const benefits = [
    "No API key required",
    "Free for personal and commercial use",
    "Supports all video qualities up to 8K",
    "Audio-only extraction available",
    "Detailed metadata included",
    "Cross-platform compatibility",
    "Regular updates and maintenance",
    "Active community support"
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            YouTube Video Downloader <span className="text-red-500">API</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            High-performance REST API for downloading YouTube videos with super fast response times.
            Simple integration for developers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex-1 max-w-2xl">
              <div className="border border-border p-4 bg-secondary/30">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={apiUrl}
                    readOnly
                    className="flex-1 px-3 py-2 text-sm border border-border bg-background"
                  />
                  <button
                    onClick={copyApiUrl}
                    className="px-4 py-2 text-sm font-medium border border-border hover:bg-secondary transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-xs text-foreground/60 mt-2">
                  GET request only. Replace VIDEO_ID with your YouTube video ID
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our API</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="border border-border p-6 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 border border-border">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <div className="border border-border p-8">
          <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <RiCheckboxCircleLine className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Integration Examples</h2>
        <div className="mb-8">
          <div className="border border-border p-4 mb-4">
            <h3 className="text-lg font-semibold mb-3">HTTP GET Request</h3>
            <div className="flex items-center gap-2 text-sm">
              <span className="px-2 py-1 bg-green-500/10 text-green-500 font-mono">GET</span>
              <code className="px-3 py-1 bg-secondary">{apiUrl}</code>
            </div>
          </div>
          <CodeExample />
        </div>
      </section>

      {/* API Response Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Response Format</h2>
        <ApiResponseExample />
      </section>

      {/* Usage Guidelines */}
      <section className="mb-16">
        <div className="border border-border p-8">
          <h2 className="text-3xl font-bold mb-6">Usage Guidelines</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 border border-border bg-secondary/30">
              <RiLockLine className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Legal Compliance</h3>
                <p className="text-foreground/70">
                  Use this API responsibly and in compliance with YouTube's Terms of Service.
                  Download only videos you have permission to download.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 border border-border bg-secondary/30">
              <RiZapLine className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Rate Limiting</h3>
                <p className="text-foreground/70">
                  To ensure service quality for all users, please implement reasonable rate limiting
                  in your application (max 10 requests per minute per IP).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="border border-border p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-foreground/70 mb-6">
            Integrate our YouTube Downloader API into your application in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/api/youtube/download?url=https://youtu.be/dQw4w9WgXcQ"
              className="inline-flex items-center justify-center px-6 py-3 font-medium border border-border hover:bg-secondary transition-colors"
            >
              Test API Live
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
