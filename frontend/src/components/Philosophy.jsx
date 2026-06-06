import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const quote     = 'Craft is resistance to chaos.'
const quoteWords = quote.split(' ')

const stats = [
  { value: '100',  label: 'Bottles. Ever.' },
  { value: '10+',  label: 'Hours Longevity' },
  { value: '01',   label: 'Series. Zero.' },
]

export default function Philosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section ref={ref} className="relative py-20 md:py-36 px-5 md:px-20 bg-[#050505] overflow-hidden">

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.045) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Large ghost character */}
      <motion.div
        className="absolute -left-10 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.025 } : {}}
        transition={{ duration: 2 }}
      >
        <span
          className="font-cormorant text-[#c9a84c] leading-none"
          style={{ fontSize: 'clamp(14rem, 30vw, 28rem)' }}
        >
          匠
        </span>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Label */}
        <motion.div
          className="mb-16 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="h-px w-12 bg-[#c9a84c]/50" />
          <span
            className="font-inter text-[#c9a84c] uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.5em' }}
          >
            Our Philosophy
          </span>
        </motion.div>

        {/* Word-by-word quote reveal */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-12">
          {quoteWords.map((word, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <motion.span
                className="font-cormorant text-[#e8e0d0] inline-block leading-tight"
                style={{ fontSize: 'clamp(2rem, 6.5vw, 6rem)' }}
                initial={{ y: '100%', opacity: 0 }}
                animate={inView ? { y: '0%', opacity: 1 } : {}}
                transition={{
                  delay: 0.1 + i * 0.07,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Body text */}
        <motion.div
          className="ml-auto max-w-md border-l border-[#c9a84c]/25 pl-6"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.9 }}
        >
          <p
            className="font-inter text-[#a09880] leading-loose"
            style={{ fontSize: '13px', letterSpacing: '0.03em' }}
          >
            We reject the noise of mass production. Every bottle of TAKUMI is
            assembled by hand, scented with oils sourced from across the world,
            and numbered — because we believe luxury is not a price tag, it is
            an intention.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-12 grid grid-cols-3 gap-4 border-t border-[#c9a84c]/10 pt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-cormorant gold-text mb-2" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}>
                {s.value}
              </div>
              <div
                className="font-inter text-[#a09880] uppercase"
                style={{ fontSize: '9px', letterSpacing: '0.35em' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
