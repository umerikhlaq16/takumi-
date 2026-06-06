import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cards = [
  {
    num: '01',
    title: 'Hand-Assembled',
    body: 'Every bottle crafted by hand in Pakistan. No machines. No shortcuts. Just pure intention and care.',
    icon: '◈',
  },
  {
    num: '02',
    title: 'International Oils',
    body: 'Premium fragrance oils sourced from elite distillers across Europe and the Middle East.',
    icon: '◈',
  },
  {
    num: '03',
    title: '10+ Hour Longevity',
    body: 'A concentration that holds. From first light to midnight, your signature stays.',
    icon: '◈',
  },
  {
    num: '04',
    title: 'Only 100. Ever.',
    body: 'No restock. No second run. When the last bottle finds its owner, Series Zero is complete.',
    icon: '◈',
  },
]

export default function Features() {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-5 md:px-20 bg-[#050505] overflow-hidden">

      {/* Ghost kanji */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.022 } : {}}
        transition={{ duration: 2 }}
      >
        <span
          className="font-cormorant text-[#c9a84c] leading-none"
          style={{ fontSize: 'clamp(16rem, 32vw, 30rem)' }}
        >
          匠
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Label */}
        <motion.div
          className="mb-16 flex items-center gap-4"
          initial={{ opacity: 0, x: -18 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="h-px w-12 bg-[#c9a84c]/50" />
          <span className="font-inter text-[#c9a84c] uppercase" style={{ fontSize: '10px', letterSpacing: '0.5em' }}>
            The Craft
          </span>
        </motion.div>

        {/* Section title */}
        <div style={{ overflow: 'hidden' }} className="mb-20">
          <motion.h2
            className="font-cormorant text-[#e8e0d0] inline-block"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Why TAKUMI is Different
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.num}
              className="group relative p-8 border border-[#c9a84c]/10 hover:border-[#c9a84c]/35 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 55 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.14, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
            >
              {/* Hover bg sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[#c9a84c]/0 to-[#c9a84c]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />

              {/* Corner dot */}
              <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-[#c9a84c]/20 group-hover:bg-[#c9a84c]/60 transition-colors duration-400" />

              {/* Number */}
              <div
                className="font-cormorant text-[#c9a84c]/20 group-hover:text-[#c9a84c]/45 transition-colors duration-400 leading-none mb-6"
                style={{ fontSize: '3.5rem' }}
              >
                {c.num}
              </div>

              {/* Title */}
              <h3 className="font-cormorant text-[#e8e0d0] mb-4" style={{ fontSize: '1.5rem' }}>
                {c.title}
              </h3>

              {/* Expanding underline */}
              <div className="h-px bg-[#c9a84c]/25 mb-4 w-8 group-hover:w-full transition-all duration-700" />

              {/* Body */}
              <p
                className="font-inter text-[#a09880] leading-relaxed"
                style={{ fontSize: '12.5px' }}
              >
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
