import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function CTA() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-18%' })

  /* Parallax on bg image */
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section ref={ref} className="relative py-24 md:py-44 px-5 md:px-8 overflow-hidden bg-[#080808]">

      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="w-full h-[130%] object-cover opacity-[0.09] scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#080808]/60" />
      </motion.div>

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.065) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Label */}
        <motion.div
          className="mb-9 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="h-px w-12 bg-[#c9a84c]/45" />
          <span className="font-inter text-[#c9a84c] uppercase" style={{ fontSize: '10px', letterSpacing: '0.5em' }}>
            Limited Edition
          </span>
          <div className="h-px w-12 bg-[#c9a84c]/45" />
        </motion.div>

        {/* Heading line 1 */}
        <div style={{ overflow: 'hidden' }} className="mb-2">
          <motion.h2
            className="font-cormorant text-[#e8e0d0] leading-none inline-block"
            style={{ fontSize: 'clamp(2.4rem, 9vw, 7.5rem)' }}
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Your Number
          </motion.h2>
        </div>

        {/* Heading line 2 – shimmer */}
        <div style={{ overflow: 'hidden' }} className="mb-10">
          <motion.h2
            className="font-cormorant gold-shimmer leading-none inline-block"
            style={{ fontSize: 'clamp(2.4rem, 9vw, 7.5rem)' }}
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
          >
            Awaits You.
          </motion.h2>
        </div>

        {/* Body */}
        <motion.p
          className="font-inter text-[#a09880] leading-loose mb-14 max-w-lg mx-auto"
          style={{ fontSize: '13px', letterSpacing: '0.03em' }}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.9 }}
        >
          Join the 100 who chose to wear something that will never be made again.
          Series Zero — a numbered perfume. A permanent statement.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.9 }}
        >
          <motion.button
            className="px-8 py-4 bg-[#c9a84c] text-[#050505] font-inter font-medium uppercase hover:bg-[#f0d070] transition-colors duration-300 w-full sm:w-auto"
            style={{ fontSize: '10px', letterSpacing: '0.4em', minWidth: '200px' }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 45px rgba(201,168,76,0.32)' }}
            whileTap={{ scale: 0.97 }}
          >
            Claim Series Zero
          </motion.button>

          <motion.button
            className="px-8 py-4 border border-[#c9a84c]/38 text-[#c9a84c] font-inter uppercase hover:border-[#c9a84c] hover:bg-[#c9a84c]/6 transition-all duration-300 w-full sm:w-auto"
            style={{ fontSize: '10px', letterSpacing: '0.4em', minWidth: '200px' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Read Our Story
          </motion.button>
        </motion.div>

        {/* Fine print */}
        <motion.p
          className="font-inter text-[#a09880]/45 mt-10 uppercase"
          style={{ fontSize: '9px', letterSpacing: '0.32em' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Rs. 5,500 PKR · Free Shipping in Pakistan · Refill Available
        </motion.p>
      </div>
    </section>
  )
}
