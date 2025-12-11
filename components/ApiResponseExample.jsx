// components/ApiResponseExample.jsx
'use client'

import { useState } from 'react'
import { RiClipboardLine } from 'react-icons/ri'

const exampleResponse = {
  code: 0,
  data: {
    cover: "https://i.ytimg.com/vi/0NnSsgO8nEc/sddefault.jpg",
    duration: 228,
    title: "Setup Video",
    items: [
      {
        ext: "mp4",
        fps: 30,
        height: 360,
        label: "mp4 (360p)",
        type: "video_with_audio",
        url: "https://redirector.googlevideo.com/videoplayback?...",
        width: 640
      },
      {
        ext: "webm",
        fps: 60,
        height: 1440,
        label: "webm (1440p60)",
        type: "video",
        url: "https://redirector.googlevideo.com/videoplayback?...",
        width: 2560
      },
      {
        ext: "m4a",
        fps: -1,
        height: -1,
        label: "m4a (131kb/s)",
        type: "audio",
        url: "https://redirector.googlevideo.com/videoplayback?...",
        width: -1
      }
    ]
  },
  status: "success",
  timestamp: "2024-01-01T12:00:00.000Z"
}

export default function ApiResponseExample() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    const text = JSON.stringify(exampleResponse, null, 2)
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    
    if (typeof window !== 'undefined' && window.Toastify) {
      window.Toastify({
        text: "Response example copied!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "hsl(var(--primary))",
        stopOnFocus: true,
      }).showToast();
    }
  }

  return (
    <div className="border border-border bg-background">
      <div className="border-b border-border p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">API Response Example</h3>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-4 py-2 text-sm border border-border hover:bg-secondary transition-colors"
          >
            <RiClipboardLine className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy JSON'}
          </button>
        </div>
      </div>
      
      <div className="relative">
        <pre className="p-6 overflow-x-auto text-sm bg-secondary/30 max-h-[500px] overflow-y-auto">
          <code className="language-json">
            {JSON.stringify(exampleResponse, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  )
}
