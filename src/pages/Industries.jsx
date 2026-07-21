import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiGlobe, FiTruck, FiHome, FiHeart, FiBriefcase, FiMap, FiTool, FiGrid, FiShoppingBag } from 'react-icons/fi'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Industries() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(el => {
      gsap.fromTo(el,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: el, start: 'top 85%' } }
      )
    })
  }, [])

  const industries = [
    { name: 'Fashion Brands', desc: 'Supporting fashion brands with product development, private label manufacturing and scalable sourcing solutions.', icon: <FiGrid /> },
    { name: 'Retail Chains', desc: 'Helping retail chains build reliable supply chains through trusted manufacturing partners and efficient sourcing solutions.', icon: <FiShoppingBag /> },
    { name: 'Importers & Wholesalers', desc: 'Supporting importers with reliable supplier selection, bulk sourcing, quality oversight and efficient supply chain coordination.', icon: <FiTruck /> },
    { name: 'Hospitality', desc: 'Supporting hospitality businesses with dependable sourcing solutions for uniforms, linens, furnishings and institutional products.', icon: <FiHome /> },
    { name: 'Healthcare', desc: 'Supporting healthcare organizations through compliant manufacturing and sourcing solutions for uniforms, medical textiles and institutional products.', icon: <FiHeart /> },
    { name: 'Corporate Procurement', desc: 'Helping businesses source uniforms, promotional products and corporate merchandise through trusted manufacturing partners.', icon: <FiBriefcase /> },
    { name: 'Outdoor, Sports & Lifestyle Brands', desc: 'Supporting outdoor, sports and lifestyle brands with product development, private label manufacturing and trusted sourcing solutions for apparel, footwear and accessories.', icon: <FiMap /> },
    { name: 'E-commerce Brands', desc: 'Helping digital-first brands scale through flexible sourcing, private label manufacturing and dependable production partnerships.', icon: <FiGlobe /> },
    { name: 'Industrial & Workwear', desc: 'Supporting manufacturers, distributors and industrial brands with durable workwear and specialized sourcing solutions.', icon: <FiTool /> }
  ]

  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--espresso)', minHeight: '100vh' }}>
      <section className="page-hero" style={{ background: 'var(--espresso)', color: 'var(--off-white)', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '1.5rem' }}>
          Industries We Serve
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--sand)', maxWidth: '700px', margin: '0 auto' }}>
          Every industry has unique sourcing challenges. BEAM delivers tailored sourcing and supply chain solutions.
        </p>
      </section>

      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
            BEAM delivers tailored sourcing and supply chain solutions by connecting customers with carefully selected manufacturing partners that align with their quality, technical and commercial objectives.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {industries.map((ind, i) => (
            <div key={i} className="reveal" style={{ padding: '2rem', background: 'var(--cream)', borderBottom: '3px solid var(--gold-leaf)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div aria-hidden="true" style={{ color: 'var(--gold-leaf)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>{ind.icon}</div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.5rem' }}>{ind.name}</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--charcoal)', lineHeight: 1.7 }}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '1.5rem', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
            Whatever your industry, BEAM connects you with trusted manufacturing partners to build reliable, scalable supply chains that support long-term business growth.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--taupe)', fontStyle: 'italic', marginBottom: '2rem' }}>
            Can't find your industry? Our sourcing expertise extends across diverse product categories and manufacturing sectors. Contact us to discuss your specific sourcing requirements.
          </p>
          <Link to="/contact" className="cta-btn" style={{ background: 'var(--espresso)', color: 'var(--off-white)', padding: '1rem 2.5rem' }}>
            Discuss Your Requirements
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
