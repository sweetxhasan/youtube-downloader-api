import { NextResponse } from 'next/server'

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15',
  'Mozilla/5.0 (iPad; CPU OS 16_0 like Mac OS X) AppleWebKit/605.1.15',
  'Mozilla/5.0 (Android 13; Mobile; rv:109.0) Gecko/116.0 Firefox/116.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/116.0',
  'Mozilla/5.0 (X11; Linux i686; rv:109.0) Gecko/20100101 Firefox/116.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.69',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0',
  'Mozilla/5.0 (X11; Linux i686; rv:109.0) Gecko/20100101 Firefox/117.0'
]

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const videoUrl = searchParams.get('url')
    
    if (!videoUrl) {
      return NextResponse.json(
        { code: 400, error: 'YouTube URL is required' },
        { status: 400 }
      )
    }

    // Validate YouTube URL
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/
    if (!youtubeRegex.test(videoUrl)) {
      return NextResponse.json(
        { code: 400, error: 'Invalid YouTube URL' },
        { status: 400 }
      )
    }

    // Random user agent for proxy rotation
    const userAgent = USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]
    
    // Call the real API with proxy headers
    const apiUrl = `https://api.vidfly.ai/api/media/youtube/download?url=${encodeURIComponent(videoUrl)}`
    
    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': userAgent,
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'Origin': 'https://your-domain.com',
        'Referer': 'https://your-domain.com/',
        'DNT': '1'
      },
      signal: AbortSignal.timeout(30000) // 30 second timeout
    })

    if (!response.ok) {
      throw new Error(`External API responded with status: ${response.status}`)
    }

    const data = await response.json()
    
    // Transform response to match your format
    if (data.code === 0 && data.data) {
      const transformedData = {
        code: 0,
        status: 'success',
        data: {
          title: data.data.title,
          thumbnail: data.data.cover,
          duration: data.data.duration,
          download_links: data.data.items.map(item => ({
            format: item.ext,
            quality: item.label,
            type: item.type,
            url: item.url,
            size: item.clen ? `${Math.round(item.clen / (1024 * 1024) * 100) / 100} MB` : 'Unknown',
            fps: item.fps,
            resolution: `${item.width}x${item.height}`
          }))
        }
      }
      
      return NextResponse.json(transformedData, {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
          'CDN-Cache-Control': 'public, s-maxage=3600',
          'Vercel-CDN-Cache-Control': 'public, s-maxage=3600'
        }
      })
    }
    
    return NextResponse.json(data)
    
  } catch (error) {
    console.error('API Error:', error)
    
    return NextResponse.json(
      {
        code: 500,
        status: 'error',
        error: error.message || 'Internal server error',
        message: 'Failed to fetch video information'
      },
      { status: 500 }
    )
  }
}

export const dynamic = 'force-dynamic'
export const runtime = 'edge'
