import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Footer from '../components/Footer'

const FAQS = [
  {
    q: 'How does BEAM select manufacturing partners?',
    a: 'We evaluate manufacturing partners based on technical capability, production capacity, quality standards, compliance certifications and commercial suitability. Every partner is assessed before being added to our network.'
  },
  {
    q: 'What is your minimum order quantity (MOQ)?',
    a: 'MOQs vary by product category and manufacturing partner. We work with factories offering flexible MOQs and can recommend suitable partners based on your order volume and requirements.'
  },
  {
    q: 'Do you provide quality assurance services?',
    a: 'Yes. Quality assurance is integrated throughout the sourcing process — from raw material inspection to inline production checks and final random inspection before shipment.'
  },
  {
    q: 'Can you develop products to our specifications?',
    a: 'Absolutely. We support product development from concept through sampling and bulk production, working closely with manufacturing partners to meet your exact specifications.'
  },
  {
    q: 'What industries do you serve?',
    a: 'We serve fashion brands, retail chains, importers, hospitality, healthcare, corporate procurement, e-commerce brands, and industrial sectors across multiple product categories.'
  },
  {
    q: 'Do you assist with private label manufacturing?',
    a: 'Yes. We help brands develop and manufacture products under their own label, from product development and packaging design to production and delivery.'
  },
  {
    q: 'What is the typical lead time for orders?',
    a: 'Lead times depend on product complexity and order volume. Sampling typically takes 2–4 weeks, while bulk production ranges from 4–10 weeks depending on the product and factory schedule.'
  }
]

export default function Faq() {
  useScrollReveal()
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--espresso)', minHeight: '100vh' }}>
      <section className="page-hero" style={{ background: 'var(--espresso)', color: 'var(--off-white)', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '1.5rem' }}>
          Frequently Asked Questions
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--sand)', maxWidth: '700px', margin: '0 auto' }}>
          Common questions about working with BEAM as your global sourcing partner.
        </p>
      </section>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(3rem, 6vw, 6rem) 5vw' }}>
        <div>
          {FAQS.map((faq, i) => (
            <div key={i} className="reveal" style={{ borderBottom: '1px solid var(--divider)', padding: '1.5rem 0', transitionDelay: `${i * 0.1}s` }}>
              <button 
                onClick={() => toggle(i)}
                style={{ width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.1rem', color: 'var(--espresso)', cursor: 'pointer', fontWeight: 500, background: 'none', border: 'none', fontFamily: 'var(--font-body)' }}
              >
                <span>{faq.q}</span>
                <span style={{ color: 'var(--gold-leaf)', transition: 'transform 0.3s', transform: openIndex === i ? 'rotate(45deg)' : 'none', fontSize: '1.3rem' }}>+</span>
              </button>
              <div style={{ maxHeight: openIndex === i ? '500px' : '0', overflow: 'hidden', transition: 'all 0.4s ease', opacity: openIndex === i ? 1 : 0 }}>
                <p style={{ paddingTop: '1rem', color: 'var(--charcoal)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
