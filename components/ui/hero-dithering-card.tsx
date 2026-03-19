import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-12 w-full flex justify-center items-center px-4 md:px-6">
      <div
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] border border-gray-200 bg-white shadow-sm min-h-[600px] md:min-h-[600px] flex flex-col items-center justify-center duration-500">
          <Suspense fallback={<div className="absolute inset-0 bg-gray-100/20" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
              <Dithering
                colorBack="#00000000" // Transparent
                colorFront="#26c794"  // Brand Accent (Green)
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-500/10 bg-brand-500/5 px-4 py-1.5 text-sm font-medium text-brand-600 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Early Access
            </div>

            {/* Headline */}
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-8 leading-[1.05]">
              Don't let disruption<br />
              <span className="text-gray-900/80">define their future.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              If you’re looking for a positive, practical way to help your child stay engaged and future-focused during this time, we’d love to help.
            </p>

            {/* Button */}
            <a
              href="https://form.typeform.com/to/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-brand-500 px-12 text-base font-medium font-sans text-white transition-all duration-300 hover:bg-brand-600 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-brand-500/20"
            >
              <span className="relative z-10">Start now</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
