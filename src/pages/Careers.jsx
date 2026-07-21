import React from 'react'
import Footer from '../components/Footer'

export default function Careers() {
  const handleEmailHR = () => {
    const subject = 'Job Application - BEAM Careers'
    const body = 'Dear BEAM HR Team,%0D%0A%0D%0AI would like to submit my resume for potential opportunities.%0D%0A%0D%0APlease find my CV attached.%0D%0A%0D%0ABest regards.'
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=zahid.javaid@beamgss.com&su=${encodeURIComponent(subject)}&body=${body}`, '_blank')
  }

  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--espresso)', minHeight: '100vh' }}>
      <section className="page-hero" style={{ background: 'var(--espresso)', color: 'var(--off-white)', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '1.5rem' }}>
          Careers at BEAM
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--sand)', maxWidth: '700px', margin: '0 auto' }}>
          Join a company committed to building trusted partnerships across global markets.
        </p>
      </section>

      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw', textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--espresso)', marginBottom: '2rem' }}>Grow With Us</h2>
        <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem' }}>
          At BEAM, we are always looking for driven, internationally-minded professionals with expertise in supply chain management, quality assurance, textile engineering, and global logistics. While we may not have specific openings right now, we welcome speculative applications from talented individuals.
        </p>
        <div style={{ background: 'var(--cream)', padding: 'clamp(1.5rem, 4vw, 3rem)', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--espresso)', marginBottom: '1rem' }}>Submit Your Resume</h3>
          <p style={{ color: 'var(--charcoal)', marginBottom: '2rem' }}>Send your CV and a brief cover letter to our HR department.</p>
          <button onClick={handleEmailHR} className="cta-btn cta-btn--gold" style={{ cursor: 'pointer' }}>Email Human Resources</button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
