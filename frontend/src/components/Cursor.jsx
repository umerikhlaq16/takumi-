import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)

  // Fast dot
  const dotX = useSpring(mx, { stiffness: 900, damping: 45 })
  const dotY = useSpring(my, { stiffness: 900, damping: 45 })

  // Slow trailing ring
  const ringX = useSpring(mx, { stiffness: 140, damping: 28 })
  const ringY = useSpring(my, { stiffness: 140, damping: 28 })

  useEffect(() => {
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* Gold dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          x: dotX, y: dotY,
          translateX: '-50%', translateY: '-50%',
          width: 8, height: 8,
          borderRadius: '50%',
          backgroundColor: '#c9a84c',
        }}
      />

      {/* Trailing ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
          width: 34, height: 34,
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.55)',
        }}
      />

      {/* Outer soft ring */}
      <motion.div
        className="fixed pointer-events-none z-[9997] hidden md:block"
        style={{
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
          width: 64, height: 64,
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.12)',
        }}
      />
    </>
  )
}
