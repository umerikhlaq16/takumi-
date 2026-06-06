import { motion } from 'framer-motion'

const items = [
  'Series Zero', '匠', 'Handcrafted', 'Pakistan',
  'Limited Edition', 'International Oils', '100 Bottles Only',
  'Rs. 5,500', 'Series Zero Refill', '10+ Hours Longevity',
]

// Duplicate for seamless loop
const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-4 border-y border-[#c9a84c]/10 bg-[#080808] z-10">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 mx-5"
          >
            <span
              className="font-inter text-[#a09880]/55 uppercase"
              style={{ fontSize: '10px', letterSpacing: '0.38em' }}
            >
              {item}
            </span>
            <motion.span
              className="text-[#c9a84c]/30"
              style={{ fontSize: '6px' }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2 + (i % 5) * 0.3, repeat: Infinity }}
            >
              ◆
            </motion.span>
          </span>
        ))}
      </div>
    </div>
  )
}
