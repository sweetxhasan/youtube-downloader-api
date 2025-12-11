'use client'

import { useState } from 'react'
import { RiFileCopyLine } from '@remixicon/react'

export default function ApiResponse() {
  const responseExample = {
    code: 0,
    status: 'success',
    data: {
      title: 'Setup Video',
      thumbnail: 'https://i.ytimg.com/vi/0NnSsgO8nEc/sddefault.jpg',
      duration: 228,
      download_links: [
        {
          format: 'mp4',
          quality: 'mp4 (360p)',
          type: 'video_with_audio',
          url: 'https://redirector.googlevideo.com/videoplayback?...',
          size: '10.07 MB',
          fps: 30,
          resolution: '640x360'
        },
        {
          format: 'webm',
          quality: 'webm (1440p60)',
          type: 'video',
          url: 'https://redirector.googlevideo.com/videoplayback?...',
          size: '72.73 MB',
          fps: 60,
          resolution: '2560x1440'
        },
        {
          format: 'm4a',
          quality: 'm4a (131kb/s)',
          type: 'audio',
          url: 'https://redirector.googlevideo.com/videoplayback?...',
          size: '3.52 MB',
          fps: -1,
          resolution: 'N/A'
        }
      ]
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(responseExample, null, 2))
      .then(() => {
        if (typeof window !== 'undefined' && window.showToast) {
          window.showToast('Response copied to clipboard!', 'success')
        }
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }

  return (
    <div className="border-1">
      <div className="p-4 border-b-1 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
        <div className="font-semibold">Response Format (JSON)</div>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 border-1 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center space-x-2"
        >
          <RiFileCopyLine />
          <span>Copy Response</span>
        </button>
      </div>
      
      <div className="relative">
        <pre className="p-6 overflow-x-auto text-sm bg-gray-900 text-gray-100 min-h-[400px]">
          <code>{JSON.stringify(responseExample, null, 2)}</code>
        </pre>
      </div>
      
      <div className="p-4 border-t-1 bg-gray-50 dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-semibold">Status Codes:</span>
            <ul className="mt-2 space-y-1">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-green-500 mr-2 border-1"></div>
                <code>200</code> - Success
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 mr-2 border-1"></div>
                <code>400</code> - Bad Request
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-red-500 mr-2 border-1"></div>
                <code>500</code> - Server Error
              </li>
            </ul>
          </div>
          
          <div>
            <span className="font-semibold">Response Time:</span>
            <ul className="mt-2 space-y-1">
              <li>Average: &lt; 500ms</li>
              <li>Cache Hit: &lt; 50ms</li>
              <li>Max Timeout: 30s</li>
            </ul>
          </div>
          
          <div>
            <span className="font-semibold">Rate Limits:</span>
            <ul className="mt-2 space-y-1">
              <li>Free: 100 requests/hour</li>
              <li>Pro: 1000 requests/hour</li>
              <li>Enterprise: Custom</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
    }
