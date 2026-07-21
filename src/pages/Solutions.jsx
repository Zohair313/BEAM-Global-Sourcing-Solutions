import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiGlobe, FiTarget, FiPackage, FiShield, FiTruck, FiStar } from 'react-icons/fi'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Solutions() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(el => {
      gsap.fromTo(el,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: el, start: 'top 85%' } }
      )
    })
  }, [])

  const solutions = [
    { title: 'Global Sourcing Solutions', desc: 'Connecting businesses with carefully selected manufacturing partners worldwide. We identify the right suppliers based on capability, quality standards and project requirements.', icon: <FiGlobe />, img: `${import.meta.env.BASE_URL}global_logistics.webp` },
    { title: 'Product Development', desc: 'Turning ideas into market-ready products through expert technical and manufacturing support. From concept development and tech packs to sampling and pre-production approvals.', icon: <FiTarget />, img: `${import.meta.env.BASE_URL}modern_manufacturing.webp` },
    { title: 'Textile Solutions', desc: 'High-quality woven, knitted, dyed and specialty fabrics sourced from trusted manufacturing partners. Delivered with consistency across international markets.', icon: <FiPackage />, img: `${import.meta.env.BASE_URL}solution_fabric.webp` },
    { title: 'Garment Solutions', desc: 'End-to-end apparel sourcing from product development to bulk production. Complete manufacturing capabilities from basic knits to high-fashion woven garments.', icon: <FiPackage />, img: `${import.meta.env.BASE_URL}solution_garment.webp` },
    { title: 'Home Textile Solutions', desc: 'Premium bedding, towels, kitchen textiles and home products manufactured to international standards. Crafted for durability and luxury.', icon: <FiPackage />, img: `${import.meta.env.BASE_URL}Home Textile Solutions.jpg` },
    { title: 'Footwear Solutions', desc: 'Reliable footwear manufacturing for fashion, casual, workwear and private label brands. Access to specialized partners ensuring comfort and compliance.', icon: <FiPackage />, img: `${import.meta.env.BASE_URL}Footwear Solutions.jpg` },
    { title: 'Private Label Manufacturing', desc: 'Helping brands develop and manufacture products under their own identity. We handle production, you focus on sales and brand growth.', icon: <FiStar />, img: `${import.meta.env.BASE_URL}Private Label Manufacturing.jpg` },
    { title: 'Quality Assurance', desc: 'Independent quality management throughout production to ensure consistent results. Rigorous inline and final inspections to guarantee products meet international standards.', icon: <FiShield />, img: `${import.meta.env.BASE_URL}Quality Assurance.jpg` },
    { title: 'Supply Chain Coordination', desc: 'Coordinating suppliers, production and logistics for efficient project execution. Seamless logistics management ensuring on-time delivery from factory floor to your warehouse.', icon: <FiTruck />, img: `${import.meta.env.BASE_URL}Supply Chain Coordination.jpg` }
  ]

  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--espresso)', minHeight: '100vh' }}>
      <section className="page-hero" style={{ background: 'var(--espresso)', color: 'var(--off-white)', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '1.5rem' }}>
          Our Solutions
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--sand)', maxWidth: '700px', margin: '0 auto' }}>
          BEAM provides comprehensive sourcing and supply chain solutions designed to simplify global procurement.
        </p>
      </section>

      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
            From product development and manufacturing to quality assurance and logistics coordination, we help businesses build reliable, efficient and scalable supply chains through trusted manufacturing partnerships.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {solutions.map((sol, i) => (
            <div key={i} className="reveal" style={{ background: 'var(--cream)', borderRadius: '4px', borderTop: '4px solid var(--gold-leaf)', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s, box-shadow 0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                <img src={sol.img} alt={sol.title} width="400" height="200" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div aria-hidden="true" style={{ color: 'var(--gold-leaf)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>{sol.icon}</div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--espresso)', marginBottom: '1rem' }}>{sol.title}</h3>
                <p style={{ color: 'var(--charcoal)', lineHeight: 1.6, flexGrow: 1 }}>{sol.desc}</p>
                <Link to="/contact" style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-leaf)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', borderBottom: '2px solid var(--gold-leaf)', paddingBottom: '0.2rem' }}>
                  Learn More <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--cream)', padding: 'clamp(3rem, 6vw, 6rem) 5vw', textAlign: 'center' }}>
        <div className="reveal" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Looking for a solution tailored to your sourcing requirements?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '2rem', lineHeight: 1.8 }}>
            Our team is ready to help you identify the right manufacturing partner and build a reliable supply chain.
          </p>
          <Link to="/contact" className="cta-btn cta-btn--gold" style={{ padding: '1rem 2.5rem', display: 'inline-block', textDecoration: 'none' }}>Request a Quote</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
