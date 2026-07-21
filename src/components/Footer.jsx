import { Link } from 'react-router-dom'
import { FiLinkedin, FiMail } from 'react-icons/fi'

const FaWhatsapp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="1.1rem" height="1.1rem">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer-site" role="contentinfo">
      <div className="container footer-grid">

        {/* Logo & Description */}
        <div>
          <Link to="/" style={{ fontSize: '1.8rem', fontWeight: 600, letterSpacing: '0.17em', color: 'var(--off-white)', textDecoration: 'none', display: 'block', marginBottom: '1rem' }}>
            BEAM
          </Link>
          <p className="footer-brand-text">
            BEAM is a trusted global sourcing and supply chain partner connecting businesses with carefully selected manufacturing partners worldwide.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.25rem' }}>
            <a href="https://www.linkedin.com/company/beamgss/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--off-white)', fontSize: '1.1rem', transition: 'color 0.3s' }}><FiLinkedin /></a>
            <a href="mailto:zahid.javaid@beamgss.com" aria-label="Email" style={{ color: 'var(--off-white)', fontSize: '1.1rem', transition: 'color 0.3s' }}><FiMail /></a>
            <a href="https://wa.me/923334060683" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: 'var(--off-white)', fontSize: '1.1rem', transition: 'color 0.3s' }}><FaWhatsapp /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-link-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="footer-col-title">Solutions</h4>
          <ul className="footer-link-list">
            <li><Link to="/solutions">Textile Solutions</Link></li>
            <li><Link to="/solutions">Garment Solutions</Link></li>
            <li><Link to="/solutions">Home Textile Solutions</Link></li>
            <li><Link to="/solutions">Footwear Solutions</Link></li>
            <li><Link to="/solutions">Product Development</Link></li>
            <li><Link to="/solutions">Private Label Manufacturing</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-link-list">
            <li><a href="mailto:zahid.javaid@beamgss.com">zahid.javaid@beamgss.com</a></li>
            <li><a href="tel:+923334060683">+92 333 406 0683</a></li>
            <li><a href="https://wa.me/923334060683" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li style={{ color: 'var(--taupe)', fontSize: '0.85rem', marginTop: '0.5rem' }}>Lahore, Pakistan</li>
          </ul>
        </div>

      </div>

      <div className="container footer-bottom-bar">
        <span className="footer-copyright">
          &copy; 2026 BEAM | Global Sourcing & Solutions. All Rights Reserved.
        </span>
        <span className="footer-tagline-text" style={{ fontSize: '0.85rem', color: 'var(--taupe)', letterSpacing: '0.08em' }}>
          Building Excellence Across Markets.
        </span>
        <span className="footer-tagline-text">
          Trusted Partnerships &middot; Quality Assurance &middot; Global Sourcing &middot; Long-Term Success
        </span>
      </div>
    </footer>
  )
}
