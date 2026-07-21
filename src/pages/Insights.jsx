import Footer from '../components/Footer'

export default function Insights() {
  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--espresso)', minHeight: '100vh' }}>
      <section className="page-hero" style={{ background: 'var(--espresso)', color: 'var(--off-white)', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '1.5rem' }}>
          Insights & Trends
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--sand)', maxWidth: '700px', margin: '0 auto' }}>
          Expert perspectives on global sourcing, supply chain dynamics, and international trade.
        </p>
      </section>

      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          {[
            { date: 'June 2026', title: 'Navigating Freight Volatility in 2026', cat: 'Supply Chain' },
            { date: 'May 2026', title: 'The Rise of Sustainable Fibers in Commercial Retail', cat: 'Textile Trends' },
            { date: 'April 2026', title: 'Why Pakistan is the New Hub for Institutional Linens', cat: 'Global Sourcing' },
            { date: 'March 2026', title: 'Quality Assurance: Beyond the Final Inspection', cat: 'Manufacturing' },
            { date: 'February 2026', title: 'De-risking Your Supply Chain with Vendor Consolidation', cat: 'International Trade' }
          ].map((post, i) => (
            <a key={i} href="https://www.linkedin.com/company/beamgss/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', paddingBottom: '2rem', borderBottom: '1px solid var(--divider)', transition: 'transform 0.2s' }}>
              <span style={{ color: 'var(--gold-leaf)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.cat}</span>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--espresso)', margin: '0.5rem 0' }}>{post.title}</h3>
              <span style={{ color: 'var(--taupe)', fontSize: '0.9rem' }}>{post.date}</span>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
