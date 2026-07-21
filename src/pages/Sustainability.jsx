import React from 'react'
import Footer from '../components/Footer'

export default function Sustainability() {
  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--espresso)', minHeight: '100vh' }}>
      <section className="page-hero" style={{ background: 'var(--espresso)', color: 'var(--off-white)', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '1.5rem' }}>
          Sustainability
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--sand)', maxWidth: '700px', margin: '0 auto' }}>
          Committed to ethical business practices, responsible sourcing, and continuous improvement.
        </p>
      </section>

      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--espresso)', marginBottom: '2rem' }}>Our Approach to Responsible Sourcing</h2>
          <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            At BEAM, we encourage responsible sourcing by working with manufacturing partners committed to ethical business practices, international quality standards and continuous improvement. We believe sustainable partnerships create long-term value for customers, suppliers, and communities alike.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          <div style={{ padding: '2rem', background: 'var(--cream)', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--espresso)', marginBottom: '1rem' }}>Ethical Manufacturing</h3>
            <p style={{ color: 'var(--charcoal)' }}>We strictly audit our factory network to ensure compliance with fair labor practices, safe working conditions, and equitable compensation models.</p>
          </div>
          <div style={{ padding: '2rem', background: 'var(--cream)', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--espresso)', marginBottom: '1rem' }}>Environmental Compliance</h3>
            <p style={{ color: 'var(--charcoal)' }}>We prioritize partners who invest in effluent treatment plants, renewable energy, and sustainable raw material usage like organic cotton and recycled polyester.</p>
          </div>
          <div style={{ padding: '2rem', background: 'var(--cream)', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--espresso)', marginBottom: '1rem' }}>Certifications</h3>
            <p style={{ color: 'var(--charcoal)' }}>Where required, we align supply chains with globally recognized standards including OEKO-TEX, GOTS, BSCI, and ISO.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
