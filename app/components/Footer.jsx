import { 
  RiGithubFill, 
  RiTwitterFill, 
  RiLinkedinBoxFill, 
  RiHeartFill,
  RiShieldCheckFill,
  RiGlobalLine,
  RiServerLine
} from '@remixicon/react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t-1 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <RiServerLine className="text-2xl text-blue-600" />
              <h3 className="text-xl font-bold">YT SAVE</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Super fast YouTube video downloader API with multiple format support and reliable infrastructure.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#api-examples" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#response" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                  Response Format
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                  Features
                </a>
              </li>
              <li>
                <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                  Getting Started Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                  Status Page
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social & Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-2 border-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                <RiGithubFill />
              </a>
              <a href="#" className="p-2 border-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                <RiTwitterFill />
              </a>
              <a href="#" className="p-2 border-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                <RiLinkedinBoxFill />
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <RiShieldCheckFill />
              <span>Secure HTTPS Only</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
              <RiGlobalLine />
              <span>Global Edge Network</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t-1 mt-8 pt-6 text-center text-gray-600 dark:text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              &copy; {currentYear} YT SAVE API. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <RiHeartFill className="text-red-500" />
              <span>using Next.js & Vercel</span>
            </div>
            
            <div className="mt-4 md:mt-0">
              <span className="px-3 py-1 border-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm">
                Status: <span className="font-semibold">Operational</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
                }
