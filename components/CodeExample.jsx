// components/CodeExample.jsx
'use client'

import { useState } from 'react'
import { RiJavascriptLine, RiTerminalLine, RiCodeSSlashLine, RiFileCodeLine, RiClipboardLine } from 'react-icons/ri'

const codeExamples = {
  javascript: `// Using fetch API
fetch('/api/youtube/download?url=https://youtu.be/VIDEO_ID')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Using async/await
async function getVideoInfo(url) {
  try {
    const response = await fetch('/api/youtube/download?url=' + encodeURIComponent(url));
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`,

  php: `<?php
// Using cURL
$url = 'https://youtu.be/VIDEO_ID';
$api_url = '/api/youtube/download?url=' . urlencode($url);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, false);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
print_r($data);

// Alternative using file_get_contents
$response = file_get_contents($api_url);
$data = json_decode($response, true);
?>`,

  python: `import requests
import json

def get_video_info(video_url):
    api_url = '/api/youtube/download'
    params = {'url': video_url}
    
    try:
        response = requests.get(api_url, params=params)
        response.raise_for_status()
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None

# Usage
video_data = get_video_info('https://youtu.be/VIDEO_ID')
if video_data:
    print(json.dumps(video_data, indent=2))`,

  nodejs: `const axios = require('axios');
// or using node-fetch for Node.js < 18
// const fetch = require('node-fetch');

async function getVideoInfo(videoUrl) {
  const apiUrl = '/api/youtube/download';
  
  try {
    // Using axios
    const response = await axios.get(apiUrl, {
      params: { url: videoUrl }
    });
    
    return response.data;
    
    // Alternative using fetch (Node.js 18+)
    // const response = await fetch(apiUrl + '?url=' + encodeURIComponent(videoUrl));
    // const data = await response.json();
    // return data;
    
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Usage
getVideoInfo('https://youtu.be/VIDEO_ID')
  .then(data => console.log(data))
  .catch(error => console.error(error));`
}

export default function CodeExample() {
  const [activeTab, setActiveTab] = useState('javascript')
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExamples[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    
    // Show toast notification
    if (typeof window !== 'undefined' && window.Toastify) {
      window.Toastify({
        text: "Code copied to clipboard!",
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
      <div className="border-b border-border">
        <div className="flex overflow-x-auto">
          <button
            onClick={() => setActiveTab('javascript')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium whitespace-nowrap border-r border-border ${
              activeTab === 'javascript'
                ? 'bg-secondary text-primary border-b-2 border-b-primary'
                : 'hover:bg-secondary/50'
            }`}
          >
            <RiJavascriptLine className="w-4 h-4" />
            JavaScript
          </button>
          <button
            onClick={() => setActiveTab('php')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium whitespace-nowrap border-r border-border ${
              activeTab === 'php'
                ? 'bg-secondary text-primary border-b-2 border-b-primary'
                : 'hover:bg-secondary/50'
            }`}
          >
            <RiCodeSSlashLine className="w-4 h-4" />
            PHP
          </button>
          <button
            onClick={() => setActiveTab('python')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium whitespace-nowrap border-r border-border ${
              activeTab === 'python'
                ? 'bg-secondary text-primary border-b-2 border-b-primary'
                : 'hover:bg-secondary/50'
            }`}
          >
            <RiTerminalLine className="w-4 h-4" />
            Python
          </button>
          <button
            onClick={() => setActiveTab('nodejs')}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === 'nodejs'
                ? 'bg-secondary text-primary border-b-2 border-b-primary'
                : 'hover:bg-secondary/50'
            }`}
          >
            <RiFileCodeLine className="w-4 h-4" />
            Node.js
          </button>
        </div>
      </div>

      <div className="relative">
        <pre className="p-6 overflow-x-auto text-sm bg-secondary/30">
          <code className="language-javascript">{codeExamples[activeTab]}</code>
        </pre>
        
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 p-2 border border-border hover:bg-secondary transition-colors"
          aria-label="Copy code"
        >
          <RiClipboardLine className="w-4 h-4" />
        </button>
        
        {copied && (
          <div className="absolute top-4 right-16 px-2 py-1 text-xs bg-primary text-primary-foreground">
            Copied!
          </div>
        )}
      </div>

      <div className="border-t border-border p-4 text-sm text-foreground/70">
        <p>Replace <code className="bg-secondary px-1">VIDEO_ID</code> with your actual YouTube video ID</p>
      </div>
    </div>
  )
}
