const FaWhatsapp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="26" height="26">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
)

const WhatsAppWidget = () => {
  const settings = {
    karachi_number: "923334060683",
    default_message: "Hi BEAM Team, I would like to inquire about your global sourcing and textile solutions."
  }

  const getWhatsappUrl = (number) => {
    const sanitizedNumber = number ? number.replace(/\D/g, '') : ''
    return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(settings.default_message)}`
  }

  const locations = [
    { name: 'Contact Us', number: settings.karachi_number, color: '#25D366', gradient: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }
  ]

  return (
    <div className="whatsapp-widget-container" style={{
      position: 'fixed',
      bottom: '40px',
      right: '40px',
      zIndex: '1000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px'
    }}>

      {locations.map((loc, i) => (
        <div key={i} className="whatsapp-item" style={{ position: 'relative' }}>
          <span className="whatsapp-label">{loc.name}</span>
          <a
            href={getWhatsappUrl(loc.number)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contact us on WhatsApp`}
            className="whatsapp-icon-link"
            style={{
              width: '56px',
              height: '56px',
              background: loc.gradient,
              color: '#FFF',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
              textDecoration: 'none',
              position: 'relative',
            }}
          >
            <FaWhatsapp size={26} />
          </a>
        </div>
      ))}

      <style>{`
        .whatsapp-label {
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%) translateX(-10px);
          background: var(--espresso);
          color: var(--cream);
          padding: 6px 12px;
          border-radius: 4px;
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          white-space: nowrap;
          pointer-events: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .whatsapp-label::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: var(--espresso);
        }

        .whatsapp-item:hover .whatsapp-label {
          opacity: 1;
          visibility: visible;
          transform: translateY(-50%) translateX(-15px);
        }
        
        .whatsapp-icon-link {
          animation: floatIcon 3s ease-in-out infinite;
        }
        .whatsapp-item:nth-child(2) .whatsapp-icon-link { animation-delay: 0.2s; }
        .whatsapp-item:nth-child(3) .whatsapp-icon-link { animation-delay: 0.4s; }

        @keyframes floatIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .whatsapp-icon-link:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 12px 30px rgba(0,0,0,0.25);
        }
        
        @media (max-width: 768px) {
          .whatsapp-widget-container {
            bottom: 20px;
            right: 20px;
            gap: 10px;
          }
          .whatsapp-icon-link {
            width: 50px;
            height: 50px;
          }
          .whatsapp-label {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default WhatsAppWidget
