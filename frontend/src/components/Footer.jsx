import { motion } from 'framer-motion'

const navLinks = ['Series Zero', 'Series Zero Refill', 'Journal', 'Contact']

export default function Footer() {
  return (
    <footer className="relative py-16 px-8 md:px-20 border-t border-[#c9a84c]/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">

          {/* Brand */}
          <div>
            <div className="mb-5 leading-none">
              <span
                className="font-cormorant text-[#e8e0d0] uppercase block"
                style={{ fontSize: '1.35rem', letterSpacing: '0.3em' }}
              >
                TAKUMI
              </span>
              <span
                className="text-[#c9a84c]"
                style={{ fontFamily: 'serif', fontSize: '13px', letterSpacing: '0.5em' }}
              >
                匠
              </span>
            </div>
            <p
              className="font-inter text-[#a09880] leading-loose max-w-[220px]"
              style={{ fontSize: '12px' }}
            >
              Rebellion through restraint.
              Luxury through soul.
              Handcrafted in Pakistan.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div
              className="font-inter text-[#c9a84c] uppercase mb-6"
              style={{ fontSize: '10px', letterSpacing: '0.5em' }}
            >
              Navigate
            </div>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="font-inter text-[#a09880] hover:text-[#c9a84c] transition-colors duration-300 inline-block"
                  style={{ fontSize: '12px', letterSpacing: '0.04em' }}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              className="font-inter text-[#c9a84c] uppercase mb-6"
              style={{ fontSize: '10px', letterSpacing: '0.5em' }}
            >
              Contact
            </div>
            <a
              href="mailto:voice@takumi.limited"
              className="font-inter text-[#a09880] hover:text-[#c9a84c] transition-colors duration-300 block mb-3"
              style={{ fontSize: '12px' }}
            >
              voice@takumi.limited
            </a>
            <p
              className="font-inter text-[#a09880]/55"
              style={{ fontSize: '12px' }}
            >
              Pakistan
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-6 bg-[#c9a84c]/40" />
              <span
                className="font-inter text-[#c9a84c]/40 uppercase"
                style={{ fontSize: '9px', letterSpacing: '0.4em' }}
              >
                takumi.limited
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#c9a84c]/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="font-inter text-[#a09880]/35 uppercase"
            style={{ fontSize: '9px', letterSpacing: '0.32em' }}
          >
            © 2024 TAKUMI. All rights reserved.
          </p>
          <p
            className="font-inter text-[#a09880]/35 uppercase"
            style={{ fontSize: '9px', letterSpacing: '0.32em' }}
          >
            Series Zero · 100 Bottles · No Restock
          </p>
        </div>
      </div>
    </footer>
  )
}
