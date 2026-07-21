import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Footer from '../components/Footer'

const documents = [
  {
    title: 'BEAM Company Profile',
    description: 'Overview of our organization, capabilities, and global sourcing expertise.',
    size: '2.4 MB',
    type: 'PDF',
    filename: 'beam-company-profile.pdf'
  },
  {
    title: 'Capabilities Statement',
    description: 'Detailed breakdown of our operational capabilities across textile sourcing verticals.',
    size: '1.1 MB',
    type: 'PDF',
    filename: 'beam-capabilities-statement.pdf'
  },
  {
    title: 'Product Catalogue 2026',
    description: 'Complete catalogue of our current fabric inventory, specifications, and pricing.',
    size: '8.5 MB',
    type: 'PDF',
    filename: 'beam-product-catalogue-2026.pdf'
  },
  {
    title: 'Supplier Code of Conduct',
    description: 'Our standards and expectations for ethical manufacturing and sustainable practices.',
    size: '0.8 MB',
    type: 'PDF',
    filename: 'beam-supplier-code-of-conduct.pdf'
  }
]

export default function Downloads() {
  useScrollReveal()

  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--espresso)', minHeight: '100vh' }}>
      <section className="page-hero" style={{
        background: 'var(--espresso)',
        color: 'var(--off-white)',
        textAlign: 'center'
      }}>
        <span style={{
          display: 'inline-block',
          fontSize: '0.75rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--gold-leaf)',
          marginBottom: '1.5rem'
        }}>
          Resources
        </span>
        <h1 style={{
          fontSize: 'clamp(3rem, 5vw, 4.5rem)',
          fontWeight: 300,
          marginBottom: '1.5rem',
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic'
        }}>
          Download Center
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--sand)',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Access our official company documents, capabilities statements, and corporate profiles.
        </p>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {documents.map((doc, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'clamp(1.2rem, 3vw, 2rem) clamp(1rem, 3vw, 2.5rem)',
                border: '1px solid var(--divider)',
                background: '#fff',
                gap: '2rem',
                flexWrap: 'wrap',
                transitionDelay: `${i * 0.1}s`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--greige)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--espresso)" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    color: 'var(--espresso)',
                    marginBottom: '0.3rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400
                  }}>
                    {doc.title}
                  </h4>
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--taupe)',
                    marginBottom: '0.3rem',
                    lineHeight: 1.5
                  }}>
                    {doc.description}
                  </p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--greige-mid)', letterSpacing: '0.05em' }}>
                    {doc.type} • {doc.size}
                  </span>
                </div>
              </div>

              <a
                href={`mailto:zahid.javaid@beamgss.com?subject=Request: ${doc.title} (${doc.type})&body=Hello BEAM Team,%0D%0A%0D%0AI would like to request a copy of the following document:%0D%0A%0D%0ADocument: ${doc.title}%0D%0AFormat: ${doc.type}%0D%0A%0D%0APlease share the file at your earliest convenience.%0D%0A%0D%0AThank you.`}
                className="cta-btn-outline"
                style={{
                  padding: '0.7rem 1.5rem',
                  fontSize: '0.75rem',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none'
                }}
              >
                Request File
              </a>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        textAlign: 'center',
        padding: 'clamp(3rem, 6vw, 6rem) 5vw',
        background: 'var(--greige)'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--espresso)',
          marginBottom: '1rem'
        }}>
          Need a Custom Document?
        </h2>
        <p style={{
          color: 'var(--charcoal)',
          maxWidth: '500px',
          margin: '0 auto 2rem'
        }}>
          Contact us directly for any specific documentation requirements or partnership inquiries.
        </p>
        <Link to="/contact" className="cta-btn"><span>Contact Us</span></Link>
      </section>

      <Footer />
    </main>
  )
}
