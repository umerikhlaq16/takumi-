import { useRef } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from 'framer-motion'

const details = [
  { label: 'Longevity',  value: '10+ Hours'  },
  { label: 'Edition',    value: '100 Bottles' },
  { label: 'Assembled',  value: 'Pakistan'   },
  { label: 'Restock',    value: 'Never'       },
]

export default function Product() {
  const sectionRef = useRef(null)
  const cardRef    = useRef(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-12%' })

  /* 3-D tilt */
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const spRx = useSpring(rx, { stiffness: 140, damping: 22 })
  const spRy = useSpring(ry, { stiffness: 140, damping: 22 })

  const onMove = (e) => {
    if (!cardRef.current) return
    const { left, top, width, height } = cardRef.current.getBoundingClientRect()
    const px = ((e.clientX - left) / width  - 0.5) * 2
    const py = ((e.clientY - top)  / height - 0.5) * 2
    ry.set(px * 14)
    rx.set(-py * 14)
  }
  const onLeave = () => { rx.set(0); ry.set(0) }

  /* Text clip helper */
  const clipIn = (delay) => ({
    initial: { y: '110%' },
    animate: inView ? { y: '0%' } : {},
    transition: { delay, duration: 1, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 px-5 md:px-20 bg-[#080808] overflow-hidden">

      {/* Ambient left glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 25% 55%, rgba(201,168,76,0.04) 0%, transparent 58%)',
        }}
      />

      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <motion.div
          className="mb-20 flex items-center gap-4"
          initial={{ opacity: 0, x: -18 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="h-px w-12 bg-[#c9a84c]/50" />
          <span className="font-inter text-[#c9a84c] uppercase" style={{ fontSize: '10px', letterSpacing: '0.5em' }}>
            The Collection
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-24 items-center">

          {/* ── Left: 3-D product card ── */}
          <motion.div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ perspective: 1000 }}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              style={{ rotateX: spRx, rotateY: spRy, transformStyle: 'preserve-3d' }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#0d0d0d] border border-[#c9a84c]/10">
                <img
                  src="/public/1.png"
                  alt="TAKUMI Series Zero"
                  className="w-full h-full object-cover opacity-75"
                  loading="lazy"
                />
                {/* Bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-transparent to-transparent" />
                {/* Top vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/30 via-transparent to-transparent" />

                {/* Bottom-left: bottle range */}
                <div className="absolute bottom-6 left-6">
                  <span
                    className="font-inter text-[#c9a84c]/75 uppercase"
                    style={{ fontSize: '9px', letterSpacing: '0.5em' }}
                  >
                    #001 — #100
                  </span>
                </div>

                {/* Top-right: badge */}
                <div className="absolute top-5 right-5 border border-[#c9a84c]/20 px-3 py-1.5">
                  <span
                    className="font-inter text-[#c9a84c]/60 uppercase"
                    style={{ fontSize: '8px', letterSpacing: '0.45em' }}
                  >
                    Limited
                  </span>
                </div>

                {/* Hover shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#c9a84c]/6 to-transparent pointer-events-none"
                  style={{ rotateY: spRy }}
                />
              </div>

              {/* Depth layer behind */}
              <div
                className="absolute -inset-3 border border-[#c9a84c]/5 -z-10"
                style={{ transform: 'translateZ(-40px)' }}
              />
            </motion.div>
          </motion.div>

          {/* ── Right: product info ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            {/* Series label */}
            <div style={{ overflow: 'hidden' }} className="mb-3">
              <motion.span
                className="font-inter text-[#c9a84c] uppercase inline-block"
                style={{ fontSize: '10px', letterSpacing: '0.6em' }}
                {...clipIn(0.4)}
              >
                Series Zero
              </motion.span>
            </div>

            {/* TAKUMI */}
            <div style={{ overflow: 'hidden' }} className="mb-1">
              <motion.h2
                className="font-cormorant text-[#e8e0d0] leading-none inline-block"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}
                {...clipIn(0.5)}
              >
                TAKUMI
              </motion.h2>
            </div>

            {/* Subtitle */}
            <div style={{ overflow: 'hidden' }} className="mb-10">
              <motion.h3
                className="font-cormorant text-[#c9a84c] italic inline-block"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
                {...clipIn(0.62)}
              >
                The Artisan Fragrance
              </motion.h3>
            </div>

            {/* Divider */}
            <motion.div
              className="h-px bg-gradient-to-r from-[#c9a84c]/50 to-transparent mb-10"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.85, duration: 0.9 }}
            />

            {/* Description */}
            <motion.p
              className="font-inter text-[#a09880] leading-loose mb-10 max-w-sm"
              style={{ fontSize: '13px', letterSpacing: '0.02em' }}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.95, duration: 0.85 }}
            >
              Hand-assembled in Pakistan. Scented with oils sourced from
              international distillers. This is not a perfume — it is a
              statement. A numbered declaration of intent. Yours and no one else's.
            </motion.p>

            {/* Details grid */}
            <motion.div
              className="grid grid-cols-2 gap-5 mb-10"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.05, duration: 0.85 }}
            >
              {details.map((d) => (
                <div key={d.label} className="border-b border-[#c9a84c]/10 pb-3">
                  <div
                    className="font-inter text-[#c9a84c]/55 uppercase mb-1"
                    style={{ fontSize: '9px', letterSpacing: '0.42em' }}
                  >
                    {d.label}
                  </div>
                  <div
                    className="font-inter text-[#e8e0d0]"
                    style={{ fontSize: '13px', letterSpacing: '0.04em' }}
                  >
                    {d.value}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Price + CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.15, duration: 0.85 }}
            >
              <div>
                <div className="font-inter text-[#c9a84c]/55 uppercase mb-1" style={{ fontSize: '9px', letterSpacing: '0.42em' }}>Price</div>
                <div className="font-cormorant text-[#e8e0d0]" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                  Rs. 5,500
                </div>
              </div>

              <motion.button
                className="flex-1 py-4 bg-[#c9a84c] text-[#050505] font-inter font-medium uppercase transition-colors duration-300 hover:bg-[#f0d070] w-full"
                style={{ fontSize: '10px', letterSpacing: '0.4em' }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(201,168,76,0.28)' }}
                whileTap={{ scale: 0.97 }}
              >
                Claim Your Number
              </motion.button>
            </motion.div>

            {/* Fine print */}
            <motion.p
              className="font-inter text-[#a09880]/40 mt-6"
              style={{ fontSize: '10px', letterSpacing: '0.18em' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              Each bottle ships with its unique engraved number. Once the 100th
              bottle is claimed, Series Zero closes forever.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
