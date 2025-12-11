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
      .catch(err => console.error('Failed to copy: ', err))
  }

  return (
    <div className="border-1">
      <div className="p-4 border-b-1 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
        <div className="font-semibold">Response Format (JSON)</div>
        <button onClick={copyToClipboard} className="px-4 py-2 border-1 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center space-x-2">
          <RiFileCopyLine />
          <span>Copy Response</span>
        </button>
      </div>
      
      <div className="relative">
        <pre className="p-6 overflow-x-auto text-sm bg-gray-900 text-gray-100 min-h-[400px]">
          <code>{JSON.stringify(responseExample, null, 2)}</code>
        </pre>
      </div>
    </div>
  )
}
