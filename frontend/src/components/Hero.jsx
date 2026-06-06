import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768

/* ── Letter animation helpers ── */
const heroLetters = 'TAKUMI'.split('')

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.4 },
  },
}
const letterVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%', opacity: 1,
    transition: { ease: [0.22, 1, 0.36, 1], duration: 0.9 },
  },
}

/* ── Fade-up helper ── */
const fadeUp = (delay = 0) => ({
  initial: { y: 36, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
})

/* ── Floating particles — fewer on mobile ── */
const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  top: `${10 + Math.random() * 80}%`,
  left: `${5 + Math.random() * 90}%`,
  size: 1 + Math.random() * 1.5,
  dur: 4 + Math.random() * 3,
  delay: Math.random() * 2,
}))

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgScale   = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const textY     = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* ── Background image + parallax ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: bgScale }}
      >
        <img
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.13]"
          loading="eager"
        />
        {/* Vignette layers */}
        <div className="absolute inset-0 bg-gradient-to-b  from-[#050505]/70 via-transparent      to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r  from-[#050505]/60 via-transparent      to-[#050505]/60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent  via-[#050505]/20     to-transparent" />
      </motion.div>

      {/* ── Concentric circles ── */}
      {[500, 800].map((size, i) => (
        <motion.div
          key={size}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a84c]/10 pointer-events-none z-0"
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{ width: size, height: size, opacity: 1 }}
          transition={{ duration: 1.8 + i * 0.3, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}

      {/* ── Gold dust particles — desktop only ── */}
      <div className="hidden md:block">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#c9a84c] pointer-events-none z-0"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size, opacity: 0.2 }}
            animate={{ y: [0, -14, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 text-center px-8 select-none"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Japanese / series label */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.75em' }}
          transition={{ duration: 1.8, delay: 0.2 }}
        >
          <span
            className="font-inter text-[#c9a84c] uppercase"
            style={{ fontSize: '11px', letterSpacing: '0.75em' }}
          >
            匠 · Series Zero · Limited Edition
          </span>
        </motion.div>

        {/* ── TAKUMI – letter by letter ── */}
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            className="flex justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {heroLetters.map((ch, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="font-cormorant inline-block leading-none text-[#e8e0d0]"
                style={{
                  fontSize: 'clamp(3.2rem, 14vw, 12rem)',
                  letterSpacing: '0.06em',
                  textShadow: '0 0 100px rgba(201,168,76,0.07)',
                }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          className="font-inter text-[#a09880] uppercase mt-5 px-4 text-center"
          style={{ fontSize: 'clamp(8px, 2.2vw, 11px)', letterSpacing: '0.22em' }}
          {...fadeUp(2.0)}
        >
          Rebellion through restraint.&nbsp;&nbsp;Luxury through soul.
        </motion.p>

        {/* CTA button */}
        <motion.div className="mt-12" {...fadeUp(2.4)}>
          <motion.button
            className="relative overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Fill on hover */}
            <motion.span
              className="absolute inset-0 bg-[#c9a84c]/10"
              initial={{ scaleX: 0, originX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.35 }}
            />
            <span
              className="relative z-10 inline-flex items-center gap-3 px-10 py-4 border border-[#c9a84c]/40 hover:border-[#c9a84c] font-inter text-[#c9a84c] uppercase tracking-widest transition-all duration-500"
              style={{ fontSize: '10px', letterSpacing: '0.38em' }}
            >
              Claim Your Number
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Bottle count badge */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-2"
          {...fadeUp(2.8)}
        >
          <div className="h-px w-6 bg-[#c9a84c]/30" />
          <span
            className="font-inter text-[#c9a84c]/55 uppercase"
            style={{ fontSize: 'clamp(7px, 2vw, 9px)', letterSpacing: '0.35em' }}
          >
            100 Bottles · No Restock · Ever
          </span>
          <div className="h-px w-6 bg-[#c9a84c]/30" />
        </motion.div>
      </motion.div>

      {/* ── Side captions ── */}
      {[
        { side: 'left',  text: 'Handcrafted · Pakistan', offset: { left: '2rem' } },
        { side: 'right', text: 'Rs. 5,500 · Series Zero', offset: { right: '2rem' } },
      ].map(({ text, offset }) => (
        <motion.div
          key={text}
          className="absolute top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10 pointer-events-none"
          style={offset}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1.2 }}
        >
          <div className="h-14 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/35 to-transparent" />
          <span
            className="font-inter text-[#a09880]/55 uppercase"
            style={{
              fontSize: '9px',
              letterSpacing: '0.4em',
              writingMode: 'vertical-rl',
            }}
          >
            {text}
          </span>
          <div className="h-14 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/35 to-transparent" />
        </motion.div>
      ))}

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <span
          className="font-inter text-[#a09880]/45 uppercase"
          style={{ fontSize: '8px', letterSpacing: '0.55em' }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-14 bg-gradient-to-b from-[#c9a84c]/60 to-transparent"
          animate={{ scaleY: [1, 0.25, 1], y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
