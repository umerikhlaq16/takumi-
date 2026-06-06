import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Series Zero', 'Journal', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[900] transition-all duration-700"
        style={{
          background: scrolled ? 'rgba(5,5,5,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.08)' : '1px solid transparent',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-5 flex items-center justify-between">

          {/* Logo */}
          <motion.div className="flex flex-col leading-none" whileHover={{ opacity: 0.8 }}>
            <span
              className="font-cormorant text-xl text-[#e8e0d0] uppercase"
              style={{ letterSpacing: '0.3em' }}
            >
              TAKUMI
            </span>
            <span
              className="text-[#c9a84c] mt-0.5"
              style={{ fontSize: '11px', letterSpacing: '0.6em', fontFamily: 'serif' }}
            >
              匠
            </span>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                className="font-inter text-[10px] tracking-[0.28em] uppercase text-[#a09880] hover:text-[#c9a84c] transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9a84c] group-hover:w-full transition-all duration-400" />
              </motion.a>
            ))}
          </div>

          {/* Cart */}
          <motion.div
            className="hidden md:flex items-center gap-2 font-inter text-[10px] tracking-[0.28em] uppercase text-[#a09880] hover:text-[#c9a84c] transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span>Cart</span>
            <span className="text-[#c9a84c]/40">(0)</span>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-px bg-[#e8e0d0] block transition-all" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-px bg-[#e8e0d0] block transition-all" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-px bg-[#e8e0d0] block transition-all" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[850] bg-[#050505]/97 flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                className="font-cormorant text-5xl text-[#e8e0d0] tracking-widest hover:text-[#c9a84c] transition-colors"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
