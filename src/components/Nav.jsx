import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const desktopLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/industries', label: 'Industries' },
  { to: '/why-beam', label: 'Why Choose BEAM' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

const mobileExtraLinks = [
  { to: '/faq', label: 'FAQ' },
  { to: '/careers', label: 'Careers' },
  { to: '/downloads', label: 'Downloads' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Request Quote', isCta: true },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setScrolled(false)
    setIsOpen(false)
    // eslint-disable-next-line react-hooks/set-state-in-effect
  }, [location.pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <Link to="/" className="nav__logo" style={{ display: 'flex', alignItems: 'center',           letterSpacing: '0.145em', fontWeight: 800 }}>
          B E A M
        </Link>

        <div className="nav__right">
          <button
            className="nav__mobile-toggle"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      <div
        className={`nav__sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      />

      <aside className={`nav__sidebar ${isOpen ? 'active' : ''}`}>
        <div className="nav__sidebar-header">
          <Link to="/" className="nav__logo" onClick={closeSidebar} style={{ letterSpacing: '0.145em', fontWeight: 800, fontSize: '1.4rem', color: 'var(--espresso)' }}>
            B E A M
          </Link>
          <button className="nav__sidebar-close" onClick={closeSidebar} aria-label="Close Menu">
            <FiX />
          </button>
        </div>

        <ul className="nav__sidebar-links">
          {desktopLinks.map(link => (
            <li key={link.to}>
              <Link to={link.to} onClick={closeSidebar}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav__sidebar-extra">
          {mobileExtraLinks.filter(l => !l.isCta).map(link => (
            <Link key={link.to} to={link.to} onClick={closeSidebar}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav__sidebar-footer">
          <Link to="/contact" className="cta-btn" onClick={closeSidebar} style={{ width: '100%', textAlign: 'center' }}>
            <span>Request Quote</span>
          </Link>
          <Link to="/contact" className="cta-btn-outline" onClick={closeSidebar} style={{ width: '100%', textAlign: 'center', borderColor: 'var(--espresso)', color: 'var(--espresso)' }}>
            <span>Inquire</span>
          </Link>
        </div>
      </aside>
    </>
  )
}
