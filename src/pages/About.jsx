import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(el => {
      gsap.fromTo(el, 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: el, start: 'top 85%' } }
      )
    })
  }, [])

  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--espresso)' }}>
      {/* ── Hero ── */}
      <section className="page-hero" style={{ background: 'var(--espresso)', color: 'var(--off-white)', textAlign: 'center' }}>
        <h1 className="reveal page-hero-title" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '1.5rem' }}>
          Our Story
        </h1>
        <p className="reveal" style={{ fontSize: '1.2rem', color: 'var(--sand)', maxWidth: '700px', margin: '0 auto' }}>
          Built on more than 35 years of manufacturing and textile industry expertise, BEAM has evolved into a trusted global sourcing and supply chain partner.
        </p>
      </section>

      {/* ── Heritage & 35+ Years ── */}
      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw' }}>
        <div className="grid-2col-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div className="reveal">
            <img src={`${import.meta.env.BASE_URL}modern_manufacturing.webp`} alt="Modern manufacturing facility - BEAM global sourcing partner" width="600" height="400" loading="lazy" decoding="async" style={{ width: '100%', height: 'auto', borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
          <div className="reveal">
             <h2 style={{ color: 'var(--espresso)', marginBottom: '1.5rem' }}>Our Heritage &<br/>Industry Expertise</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Textile expertise is BEAM's heritage. Global sourcing is BEAM's future.
            </p>
            <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              We started as a foundational textile supplier. Over 35 years, we expanded our footprint, bridging the gap between high-quality manufacturing and global market demands. Today, our sourcing network connects manufacturers and customers across international markets, enabling businesses to access reliable products through professionally managed global supply chains.
            </p>
            <div style={{ background: 'var(--cream)', padding: '2rem', borderLeft: '4px solid var(--gold-leaf)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--espresso)', marginBottom: '0.5rem' }}>Vision</h3>
              <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>To be the world's most trusted and reliable global sourcing partner.</p>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--espresso)', marginBottom: '0.5rem' }}>Mission</h3>
              <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem' }}>To simplify global supply chains by connecting businesses with responsible manufacturing partners, delivering uncompromising quality and creating long-term value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section style={{ background: 'var(--espresso)', color: 'var(--off-white)', padding: '6rem 0' }}>
        <div className="container">
           <h2 className="reveal" style={{ color: 'var(--gold-leaf)', textAlign: 'center', marginBottom: '4rem' }}>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Integrity', text: 'We believe trust is the foundation of every successful partnership.' },
              { title: 'Reliability', text: 'We deliver on our commitments through consistency and accountability.' },
              { title: 'Quality', text: 'Every product reflects our commitment to uncompromising standards.' },
              { title: 'Transparency', text: 'Clear communication builds lasting relationships.' },
              { title: 'Partnership', text: 'We measure success by the long-term growth of our customers.' },
              { title: 'Continuous Improvement', text: 'We continually refine our sourcing processes to deliver greater value.' }
            ].map((v, i) => (
              <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '4px' }}>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--gold-leaf)', marginBottom: '0.5rem' }}>{v.title}</h4>
                <p style={{ color: 'var(--sand)' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Add Value & Who We Work With ── */}
      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(2rem, 4vw, 4rem)' }}>
          <div className="reveal">
             <h2 style={{ color: 'var(--espresso)', marginBottom: '1.5rem' }}>How We Add Value</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Our role extends beyond identifying suppliers. We help our partners reduce sourcing risks, improve supplier reliability, streamline communication, maintain quality standards and simplify international procurement.
            </p>
            <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem' }}>
              Every sourcing project is managed with a focus on efficiency, transparency and long-term commercial success.
            </p>
          </div>
          <div className="reveal">
             <h2 style={{ color: 'var(--espresso)', marginBottom: '1.5rem' }}>Who We Work With</h2>
            <ul style={{ color: 'var(--charcoal)', fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
              <li>Global Brands & Retail Chains</li>
              <li>Importers & Wholesalers</li>
              <li>Buying Houses</li>
              <li>Hospitality Groups</li>
              <li>Corporate Procurement Teams</li>
              <li>Government & Institutional Buyers</li>
              <li>E-commerce Brands</li>
              <li>Private Label Companies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Closing Philosophy ── */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(3rem, 6vw, 6rem) 5vw', textAlign: 'center' }}>
        <div className="container reveal" style={{ maxWidth: '800px' }}>
           <h2 style={{ color: 'var(--espresso)', fontStyle: 'italic', fontWeight: 300, marginBottom: '2rem' }}>
            "At BEAM, we believe successful sourcing is not defined by the products we deliver, but by the confidence we create. Through expertise, integrity and trusted partnerships, we help businesses build stronger supply chains and achieve sustainable growth."
          </h2>
          <Link to="/contact" className="cta-btn" style={{ padding: '1rem 2.5rem' }}>
            Connect With Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
