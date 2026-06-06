import './index.css'
import Cursor     from './components/Cursor'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Marquee    from './components/Marquee'
import Philosophy from './components/Philosophy'
import Product    from './components/Product'
import Features   from './components/Features'
import CTA        from './components/CTA'
import Footer     from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#050505', color: '#e8e0d0', overflowX: 'hidden' }}>
      {/* Custom cursor — hidden on touch devices via CSS */}
      <Cursor />

      {/* Page sections */}
      <Navbar />
      <Hero />
      <Marquee />
      <Philosophy />
      <Product />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
