import React from 'react'
import Footer from '../components/Footer'

export default function Capabilities() {
  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--espresso)', minHeight: '100vh' }}>
      <section className="page-hero" style={{ background: 'var(--espresso)', color: 'var(--off-white)', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '1.5rem' }}>
          Operational Capabilities
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--sand)', maxWidth: '700px', margin: '0 auto' }}>
          Beyond product categories, we provide the operational infrastructure to scale your business.
        </p>
      </section>

      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw' }}>
        <div className="grid-3col-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          {[
            { title: 'Factory Identification', text: 'We vet and audit manufacturing facilities to ensure they meet your capacity, compliance, and quality requirements before any orders are placed.' },
            { title: 'Cost Optimization', text: 'Leveraging our regional presence and volume, we negotiate competitive pricing without compromising on the final product quality.' },
            { title: 'Production Monitoring', text: 'Our teams conduct regular inline inspections, tracking production milestones to prevent delays and correct issues immediately.' },
            { title: 'Vendor Consolidation', text: 'Simplify your procurement by using BEAM as a single point of contact for multiple factories and product lines.' },
            { title: 'Risk Management', text: 'We mitigate supply chain disruptions through proactive planning, secondary supplier options, and rigorous financial vetting.' },
            { title: 'Logistics Support', text: 'From ex-factory to FOB or CIF, we coordinate freight forwarders to ensure smooth, documented, and timely international shipments.' }
          ].map((cap, i) => (
            <div key={i} style={{ border: '1px solid var(--divider)', padding: 'clamp(1.5rem, 3vw, 3rem)', background: '#fff' }}>
              <div style={{ color: 'var(--gold-leaf)', fontSize: '2rem', marginBottom: '1rem' }}>◈</div>
              <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'var(--espresso)', marginBottom: '1rem' }}>{cap.title}</h3>
              <p style={{ color: 'var(--charcoal)', lineHeight: 1.6 }}>{cap.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
