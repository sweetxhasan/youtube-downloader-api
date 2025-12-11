'use client'

import { useState } from 'react'
import { RiJavascriptFill, RiTerminalBoxFill, RiFileCodeFill, RiPythonFill, RiFileCopyLine } from '@remixicon/react'

export default function CodeExample({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'javascript', label: 'JavaScript', icon: <RiJavascriptFill /> },
    { id: 'nodejs', label: 'Node.js', icon: <RiTerminalBoxFill /> },
    { id: 'php', label: 'PHP', icon: <RiFileCodeFill /> },
    { id: 'python', label: 'Python', icon: <RiPythonFill /> }
  ]

  const codeExamples = {
    javascript: `// Using fetch API
const videoUrl = 'https://youtu.be/0NnSsgO8nEc';
const apiUrl = \`https://your-domain.com/api/youtube/download?url=\${encodeURIComponent(videoUrl)}\`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    if (data.code === 0) {
      console.log('Video Title:', data.data.title);
      console.log('Download Links:', data.data.download_links);
    }
  })
  .catch(error => console.error('Error:', error));`,

    nodejs: `// Using Node.js with axios
const axios = require('axios');
const videoUrl = 'https://youtu.be/0NnSsgO8nEc';
const apiUrl = \`https://your-domain.com/api/youtube/download?url=\${encodeURIComponent(videoUrl)}\`;

axios.get(apiUrl)
  .then(response => {
    if (response.data.code === 0) {
      console.log('Video Title:', response.data.data.title);
      console.log('Thumbnail:', response.data.data.thumbnail);
      response.data.data.download_links.forEach(link => {
        console.log(\`\${link.quality} - \${link.url}\`);
      });
    }
  })
  .catch(error => console.error('Error:', error));`,

    php: `<?php
// Using PHP cURL
$videoUrl = 'https://youtu.be/0NnSsgO8nEc';
$apiUrl = 'https://your-domain.com/api/youtube/download?url=' . urlencode($videoUrl);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Accept: application/json'
]);

$response = curl_exec($ch);
curl_close($ch);

if ($response) {
    $data = json_decode($response, true);
    if ($data['code'] === 0) {
        echo "Title: " . $data['data']['title'] . "\\n";
        foreach ($data['data']['download_links'] as $link) {
            echo $link['quality'] . ": " . $link['url'] . "\\n";
        }
    }
}
?>`,

    python: `# Using Python requests
import requests
import urllib.parse

video_url = "https://youtu.be/0NnSsgO8nEc"
api_url = f"https://your-domain.com/api/youtube/download?url={urllib.parse.quote(video_url)}"

try:
    response = requests.get(api_url)
    response.raise_for_status()
    data = response.json()
    
    if data['code'] == 0:
        print(f"Title: {data['data']['title']}")
        print(f"Duration: {data['data']['duration']} seconds")
        for link in data['data']['download_links']:
            print(f"{link['quality']}: {link['url']}")
            
except requests.exceptions.RequestException as e:
    print(f"Error: {e}")`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExamples[activeTab])
      .then(() => {
        if (typeof window !== 'undefined' && window.showToast) {
          window.showToast('Code copied to clipboard!', 'success')
        }
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }

  return (
    <div className="border-1">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto border-b-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-4 border-r-1 whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Code Display */}
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 p-2 border-1 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 z-10"
          title="Copy code"
        >
          <RiFileCopyLine />
        </button>
        
        <pre className="p-6 overflow-x-auto text-sm bg-gray-900 text-gray-100 min-h-[300px]">
          <code>{codeExamples[activeTab]}</code>
        </pre>
      </div>

      {/* API Endpoint */}
      <div className="p-4 border-t-1 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold">Endpoint:</span>
            <code className="ml-2 text-blue-600 dark:text-blue-400">
              GET /api/youtube/download
            </code>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            No authentication required for basic usage
          </div>
        </div>
      </div>
    </div>
  )
}
