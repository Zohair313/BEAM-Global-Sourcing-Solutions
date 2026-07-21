import { useState, useMemo } from 'react'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSend = (e) => {
    e.preventDefault()
    const subject = `Contact Form - ${formData.name}${formData.company ? ' (' + formData.company + ')' : ''}`
    const body = `Name: ${formData.name}%0D%0ACompany: ${formData.company || 'N/A'}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone || 'N/A'}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=zahid.javaid@beamgss.com&su=${encodeURIComponent(subject)}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--espresso)', minHeight: '100vh' }}>
      {/* ── Header ── */}
      <section className="page-hero" style={{ background: 'var(--espresso)', color: 'var(--off-white)', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--sand)', maxWidth: '600px', margin: '0 auto' }}>
          Connect with our global sourcing team. We are ready to support your business requirements.
        </p>
      </section>

      {/* ── Contact Content ── */}
      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw' }}>
        <div className="grid-2col-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          {/* Left: Contact Info */}
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--espresso)', marginBottom: '2rem' }}>Get In Touch</h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--gold-leaf)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Office Address</h4>
              <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                280, Street No. 19, Sector A,<br/>
                Askari 11, Lahore,<br/>
                Punjab 54860, PK
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--gold-leaf)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Direct Contact</h4>
              <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', lineHeight: 2 }}>
                Email: <a href="mailto:zahid.javaid@beamgss.com" style={{ color: 'var(--espresso)', textDecoration: 'underline' }}>zahid.javaid@beamgss.com</a><br/>
                Phone: <a href="tel:+923334060683" style={{ color: 'var(--espresso)', textDecoration: 'underline' }}>+92 333 406 0683</a><br/>
                WhatsApp: <a href="https://wa.me/923334060683" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--espresso)', textDecoration: 'underline' }}>+92 333 406 0683</a>
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--gold-leaf)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Business Hours</h4>
              <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Monday – Friday: 9:00 AM – 6:00 PM (PKT)<br/>
                Saturday: 9:00 AM – 2:00 PM (PKT)
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--gold-leaf)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Connect</h4>
              <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem' }}>
                <a href="https://www.linkedin.com/company/beamgss/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--espresso)', textDecoration: 'underline' }}>LinkedIn Profile</a>
              </p>
            </div>

            {/* Google Map */}
            <div className="contact-map" style={{ height: '250px', border: '1px solid var(--divider)', overflow: 'hidden' }}>
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="BEAM Office Location - Lahore, Pakistan"
                src="https://maps.google.com/maps?q=Askari+11+Lahore+Punjab+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
           <div style={{ background: 'var(--cream)', padding: 'clamp(1.5rem, 4vw, 3rem)', borderRadius: '4px' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: 'var(--espresso)', marginBottom: '1rem' }}>Send a Message</h3>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--espresso)', marginBottom: '0.5rem' }} htmlFor="contact-name">Full Name *</label>
                  <input type="text" id="contact-name" name="name" required value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '1rem', background: 'var(--off-white)', border: '1px solid var(--divider)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--espresso)', marginBottom: '0.5rem' }} htmlFor="contact-company">Company</label>
                  <input type="text" id="contact-company" name="company" value={formData.company} onChange={handleChange} style={{ width: '100%', padding: '1rem', background: 'var(--off-white)', border: '1px solid var(--divider)', outline: 'none' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--espresso)', marginBottom: '0.5rem' }} htmlFor="contact-email">Email *</label>
                    <input type="email" id="contact-email" name="email" required value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '1rem', background: 'var(--off-white)', border: '1px solid var(--divider)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--espresso)', marginBottom: '0.5rem' }} htmlFor="contact-phone">Phone</label>
                    <input type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '1rem', background: 'var(--off-white)', border: '1px solid var(--divider)', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--espresso)', marginBottom: '0.5rem' }} htmlFor="contact-message">Message *</label>
                  <textarea id="contact-message" name="message" required rows="5" value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '1rem', background: 'var(--off-white)', border: '1px solid var(--divider)', outline: 'none', resize: 'vertical' }}></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSend}
                  className="cta-btn cta-btn--gold"
                  style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', textAlign: 'center' }}
                >
                  Send Message
                </button>
              </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
