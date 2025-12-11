// app/about/page.js
import { RiTeamLine, RiHeartLine, RiRocketLine, RiCodeSSlashLine } from 'react-icons/ri'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About YT SAVE API</h1>
          <p className="text-xl text-foreground/70">
            Building the most reliable YouTube video downloader API for developers worldwide
          </p>
        </div>

        {/* Mission Statement */}
        <div className="border border-border p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <RiRocketLine className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-foreground/70 leading-relaxed mb-4">
            To provide developers with a reliable, fast, and easy-to-use YouTube video downloader API 
            that simplifies video content integration into their applications. We believe in making 
            technology accessible and efficient for everyone.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Our API is designed with performance in mind, ensuring that developers can focus on 
            building great applications without worrying about the complexities of video processing.
          </p>
        </div>

        {/* Features Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <RiCodeSSlashLine className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Developer First</h3>
            </div>
            <p className="text-foreground/70">
              Built by developers for developers. We prioritize clean documentation, 
              consistent response formats, and easy integration.
            </p>
          </div>
          
          <div className="border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <RiHeartLine className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Free & Open</h3>
            </div>
            <p className="text-foreground/70">
              Completely free for personal and commercial use. We believe in supporting 
              the developer community without barriers.
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="border border-border p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-border p-4 text-center">
              <div className="font-mono font-bold text-lg mb-2">Next.js</div>
              <div className="text-sm text-foreground/70">Frontend & API</div>
            </div>
            <div className="border border-border p-4 text-center">
              <div className="font-mono font-bold text-lg mb-2">Vercel</div>
              <div className="text-sm text-foreground/70">Hosting & Edge</div>
            </div>
            <div className="border border-border p-4 text-center">
              <div className="font-mono font-bold text-lg mb-2">Node.js</div>
              <div className="text-sm text-foreground/70">Server Runtime</div>
            </div>
            <div className="border border-border p-4 text-center">
              <div className="font-mono font-bold text-lg mb-2">Tailwind</div>
              <div className="text-sm text-foreground/70">Styling</div>
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="border border-border p-8">
          <div className="flex items-center gap-4 mb-6">
            <RiTeamLine className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Our Values</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 border border-border bg-secondary/30">
              <h3 className="font-semibold mb-2">Reliability</h3>
              <p className="text-foreground/70">
                We maintain 99.9% uptime and implement robust error handling to ensure 
                your applications work seamlessly.
              </p>
            </div>
            <div className="p-4 border border-border bg-secondary/30">
              <h3 className="font-semibold mb-2">Performance</h3>
              <p className="text-foreground/70">
                Optimized proxy servers and efficient caching mechanisms deliver 
                super-fast response times.
              </p>
            </div>
            <div className="p-4 border border-border bg-secondary/30">
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p className="text-foreground/70">
                Clear documentation, honest limitations, and open communication 
                with our user community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
          }
