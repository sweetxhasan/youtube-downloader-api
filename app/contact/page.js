// app/contact/page.js
'use client'

import { useState } from 'react'
import { 
  RiMailLine, 
  RiGithubLine, 
  RiTwitterLine, 
  RiSendPlaneLine,
  RiErrorWarningLine,
  RiCheckboxCircleLine
} from 'react-icons/ri'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      
      if (typeof window !== 'undefined' && window.Toastify) {
        window.Toastify({
          text: "Message sent successfully!",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#10B981",
          stopOnFocus: true,
        }).showToast();
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus(''), 3000)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-foreground/70">
            Get in touch with our team for support, partnerships, or feedback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <RiMailLine className="w-6 h-6" />
                <h3 className="text-lg font-semibold">Email Support</h3>
              </div>
              <p className="text-foreground/70 mb-2">
                For technical support and API-related inquiries:
              </p>
              <a 
                href="mailto:support@ytsaveapi.com" 
                className="text-primary hover:underline"
              >
                support@ytsaveapi.com
              </a>
            </div>

            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <RiGithubLine className="w-6 h-6" />
                <h3 className="text-lg font-semibold">GitHub</h3>
              </div>
              <p className="text-foreground/70 mb-4">
                Check out our open-source projects and contribute:
              </p>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary transition-colors"
              >
                <RiGithubLine className="w-4 h-4" />
                Visit GitHub
              </a>
            </div>

            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <RiTwitterLine className="w-6 h-6" />
                <h3 className="text-lg font-semibold">Twitter</h3>
              </div>
              <p className="text-foreground/70 mb-4">
                Follow us for updates and announcements:
              </p>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary transition-colors"
              >
                <RiTwitterLine className="w-4 h-4" />
                @YTSaveAPI
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="border border-border p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-border bg-background focus:outline-none focus:border-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-border bg-background focus:outline-none focus:border-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-border bg-background focus:outline-none focus:border-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="technical">Technical Support</option>
                    <option value="api">API Integration</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-border bg-background focus:outline-none focus:border-primary resize-none"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 border border-red-500 bg-red-500/10">
                    <RiErrorWarningLine className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-red-500">
                      Failed to send message. Please try again.
                    </span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-2 p-3 border border-green-500 bg-green-500/10">
                    <RiCheckboxCircleLine className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-green-500">
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <RiSendPlaneLine className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="border border-border p-8 mt-8">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <h4 className="font-semibold mb-2">Is the API really free?</h4>
                  <p className="text-foreground/70">
                    Yes, completely free for both personal and commercial use. We don't require 
                    API keys or payment for basic usage.
                  </p>
                </div>
                
                <div className="border-b border-border pb-4">
                  <h4 className="font-semibold mb-2">What are the rate limits?</h4>
                  <p className="text-foreground/70">
                    We recommend limiting requests to 10 per minute per IP address to ensure 
                    service quality for all users.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">How quickly do you respond to support requests?</h4>
                  <p className="text-foreground/70">
                    We typically respond within 24 hours for technical support and API-related 
                    inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
