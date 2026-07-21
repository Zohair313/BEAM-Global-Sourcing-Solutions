import React from 'react'
import Footer from '../components/Footer'

export default function WhyBeam() {
  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--espresso)', minHeight: '100vh' }}>
      <section className="page-hero" style={{ background: 'var(--espresso)', color: 'var(--off-white)', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '1.5rem' }}>
          Why Choose BEAM
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--sand)', maxWidth: '700px', margin: '0 auto' }}>
          Discover the strategic advantages of partnering with a premier global sourcing expert.
        </p>
      </section>

      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw' }}>
        <div style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--espresso)', marginBottom: '2rem' }}>Why Source from Pakistan?</h2>
          <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Pakistan is recognized globally for its strong manufacturing capabilities, particularly in textiles, apparel and leather products. Combined with a skilled workforce, competitive production costs and decades of export experience, it offers businesses an efficient and reliable sourcing destination.
          </p>
          <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Through BEAM's trusted manufacturing network, international buyers gain access to dependable production partners, quality-focused manufacturing and professional sourcing support—all managed through a single point of contact.
          </p>
        </div>

        <div style={{ marginBottom: '6rem', background: 'var(--cream)', padding: 'clamp(1.5rem, 4vw, 4rem)', borderRadius: '4px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--espresso)', marginBottom: '2rem' }}>Commitment to Global Standards</h2>
          <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            BEAM works with manufacturing partners committed to internationally recognized quality standards, ethical business practices and responsible production. Every sourcing project is managed with careful attention to product quality, compliance and customer expectations. We ensure that our network aligns with global certifications including ISO, OEKO-TEX, and SEDEX where required.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--espresso)', marginBottom: '3rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div className="grid-2col-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {[
              { q: 'Can you develop products to our specifications?', a: 'Yes. We support product development from concept through production.' },
              { q: 'Do you provide quality inspections?', a: 'Yes. Quality assurance is integrated throughout the sourcing process.' },
              { q: 'Can you assist with private label manufacturing?', a: 'Absolutely. We work with trusted manufacturing partners to develop products under your brand.' },
              { q: 'Can BEAM source products beyond textiles?', a: 'Yes. While our heritage is in textiles, our sourcing capabilities extend across multiple product categories through our established manufacturing network.' }
            ].map((faq, i) => (
              <div key={i}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.5rem' }}>{faq.q}</h4>
                <p style={{ color: 'var(--charcoal)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
