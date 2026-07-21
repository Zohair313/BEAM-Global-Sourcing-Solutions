import { useScrollReveal } from '../hooks/useScrollReveal'
import Footer from '../components/Footer'

const blogPosts = [
  {
    id: 1,
    date: 'June 2026',
    title: 'Navigating Freight Volatility in 2026',
    category: 'Supply Chain',
    excerpt: 'Global freight rates continue to fluctuate due to geopolitical tensions and fuel cost changes. Here\'s how smart sourcing partners mitigate risk through diversified logistics planning.',
    readTime: '5 min read'
  },
  {
    id: 2,
    date: 'May 2026',
    title: 'The Rise of Sustainable Fibers in Commercial Retail',
    category: 'Textile Trends',
    excerpt: 'Consumer demand for eco-friendly textiles is reshaping the supply chain. We explore how organic cotton, recycled polyester, and low-impact dyes are becoming the new standard.',
    readTime: '4 min read'
  },
  {
    id: 3,
    date: 'April 2026',
    title: 'Why Pakistan is the New Hub for Institutional Linens',
    category: 'Global Sourcing',
    excerpt: 'With competitive labor costs and a mature textile infrastructure, Pakistan is emerging as a preferred destination for hospitality and healthcare linen procurement.',
    readTime: '6 min read'
  },
  {
    id: 4,
    date: 'March 2026',
    title: 'Quality Assurance: Beyond the Final Inspection',
    category: 'Manufacturing',
    excerpt: 'A comprehensive QA strategy goes beyond end-of-line checks. Learn about inline inspections, AQL standards, and how BEAM integrates quality at every production stage.',
    readTime: '7 min read'
  },
  {
    id: 5,
    date: 'February 2026',
    title: 'De-risking Your Supply Chain with Vendor Consolidation',
    category: 'International Trade',
    excerpt: 'Managing multiple vendors across different regions introduces complexity. Discover how vendor consolidation reduces overhead while maintaining supply resilience.',
    readTime: '5 min read'
  },
  {
    id: 6,
    date: 'January 2026',
    title: 'How to Evaluate Manufacturing Partners for Global Sourcing',
    category: 'Global Sourcing',
    excerpt: 'Selecting the right manufacturing partner is the most critical decision in global sourcing. Learn the key criteria BEAM uses to evaluate factories for quality, reliability and long-term partnership.',
    readTime: '7 min read'
  }
]

export default function Blog() {
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
          BEAM Knowledge Hub
        </span>
        <h1 style={{
          fontSize: 'clamp(3rem, 5vw, 4.5rem)',
          fontWeight: 300,
          marginBottom: '1.5rem',
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic'
        }}>
          Global Sourcing Insights
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--sand)',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Expert perspectives on global sourcing, supply chain dynamics, textile manufacturing, and international trade.
        </p>
      </section>

      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {blogPosts.map((post, i) => (
            <article
              key={post.id}
              className="reveal"
              style={{
                padding: '3rem 0',
                borderBottom: '1px solid var(--divider)',
                transitionDelay: `${i * 0.1}s`,
                cursor: 'default'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  color: 'var(--gold-leaf)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  background: 'rgba(212, 175, 55, 0.08)',
                  padding: '0.3rem 0.8rem'
                }}>
                  {post.category}
                </span>
                <span style={{ color: 'var(--taupe)', fontSize: '0.85rem' }}>
                  {post.date}
                </span>
                <span style={{
                  color: 'var(--taupe)',
                  fontSize: '0.8rem',
                  marginLeft: 'auto'
                }}>
                  {post.readTime}
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 300,
                color: 'var(--espresso)',
                marginBottom: '1rem',
                lineHeight: 1.2
              }}>
                {post.title}
              </h2>

              <p style={{
                fontSize: '1rem',
                color: 'var(--charcoal)',
                lineHeight: 1.8,
                maxWidth: '800px'
              }}>
                {post.excerpt}
              </p>

              <div style={{ marginTop: '1.5rem' }}>
                <a href="https://www.linkedin.com/company/beamgss/" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--espresso)',
                  borderBottom: '1px solid var(--espresso)',
                  paddingBottom: '2px',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{
        textAlign: 'center',
        padding: 'clamp(3rem, 8vw, 8rem) 5vw',
        background: 'var(--greige)'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--espresso)',
          marginBottom: '1.5rem'
        }}>
          Stay Updated
        </h2>
        <p style={{
          color: 'var(--charcoal)',
          maxWidth: '500px',
          margin: '0 auto 2.5rem'
        }}>
          Follow us on LinkedIn for the latest insights and industry updates from BEAM.
        </p>
        <a
          href="https://www.linkedin.com/company/beamgss/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          <span>Follow on LinkedIn</span>
        </a>
      </section>

      <Footer />
    </main>
  )
}
