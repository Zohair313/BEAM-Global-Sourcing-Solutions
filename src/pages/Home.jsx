import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiGlobe, FiShield, FiUsers, FiTruck, FiTarget, FiMessageSquare, FiPackage, FiStar, FiArrowRight, FiGrid, FiBriefcase, FiHome, FiHeart, FiShoppingBag, FiAnchor, FiMap, FiTool } from 'react-icons/fi'
import Footer from '../components/Footer'

const heroSlides = [
  `${import.meta.env.BASE_URL}global_logistics.webp`,
  `${import.meta.env.BASE_URL}modern_manufacturing.webp`,
  `${import.meta.env.BASE_URL}Home Textile Solutions.jpg`,
  `${import.meta.env.BASE_URL}Footwear Solutions.jpg`,
  `${import.meta.env.BASE_URL}Quality Assurance.jpg`,
  `${import.meta.env.BASE_URL}Supply Chain Coordination.jpg`,
  `${import.meta.env.BASE_URL}Private Label Manufacturing.jpg`,
]

export default function Home() {
  const heroRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedMarket, setSelectedMarket] = useState(null)

  const marketData = {
    'north-america': {
      name: 'North America',
      countries: 'USA, Canada, Mexico',
      icon: '🇺🇸',
      color: '#D4AF37',
      industries: ['Fashion Brands', 'Retail Chains', 'E-commerce Brands', 'Corporate Procurement'],
      products: ['Garments & Apparel', 'Footwear', 'Home Textiles', 'Private Label Products'],
      strengths: ['Large-scale bulk sourcing', 'Private label development', 'Quality compliance (CPSC, CPSIA)', 'Sustainable manufacturing options'],
      description: 'Supporting North American brands, retailers and importers with end-to-end sourcing solutions from carefully selected manufacturing partners.'
    },
    'europe': {
      name: 'Europe',
      countries: 'Germany, France, Italy, Netherlands, Scandinavia',
      icon: '🇪🇺',
      color: '#D4AF37',
      industries: ['Fashion Brands', 'Retail Chains', 'Hospitality', 'Corporate Procurement'],
      products: ['Premium Garments', 'Home Textiles', 'Workwear', 'Technical Textiles'],
      strengths: ['OEKO-TEX & GOTS certified partners', 'Sustainable & ethical sourcing', 'EU compliance (REACH)', 'Small to mid-volume flexibility'],
      description: 'Helping European businesses source responsibly with certified manufacturing partners that meet strict quality and sustainability standards.'
    },
    'uk': {
      name: 'United Kingdom',
      countries: 'England, Scotland, Wales',
      icon: '🇬🇧',
      color: '#D4AF37',
      industries: ['Fashion Brands', 'Retail Chains', 'Hospitality', 'Healthcare'],
      products: ['Garments & Apparel', 'Uniforms', 'Home Textiles', 'Promotional Products'],
      strengths: ['UKCA compliance support', 'Fast-track sampling', 'Ethical audit-ready factories', 'Flexible MOQs'],
      description: 'Providing UK businesses with trusted sourcing partnerships for garments, textiles and corporate products through professional supply chain management.'
    },
    'middle-east': {
      name: 'Middle East',
      countries: 'UAE, Saudi Arabia, Qatar, Kuwait, Oman',
      icon: '🇦🇪',
      color: '#D4AF37',
      industries: ['Hospitality', 'Corporate Procurement', 'Government Institutions', 'Retail Chains'],
      products: ['Hotel Linens & Towels', 'Uniforms', 'Workwear', 'Institutional Textiles'],
      strengths: ['Bulk institutional supply', 'Custom branding & labeling', 'Fast production turnaround', 'Competitive pricing'],
      description: 'Serving Middle Eastern hospitality groups, government bodies and corporate buyers with dependable large-volume sourcing solutions.'
    },
    'australia': {
      name: 'Australia & New Zealand',
      countries: 'Australia, New Zealand',
      icon: '🇦🇺',
      color: '#D4AF37',
      industries: ['Retail Chains', 'Industrial & Workwear', 'Fashion Brands', 'E-commerce Brands'],
      products: ['Workwear & Safety Apparel', 'Casual Wear', 'Home Textiles', 'Private Label'],
      strengths: ['AS/NZS compliance', 'Durable workwear specialists', 'Sustainable sourcing options', 'Reliable lead times'],
      description: 'Helping Australian and New Zealand businesses build reliable supply chains with trusted manufacturing partners for workwear, fashion and home products.'
    },
    'africa': {
      name: 'Africa',
      countries: 'South Africa, Nigeria, Kenya, Egypt',
      icon: '🌍',
      color: '#D4AF37',
      industries: ['Government Institutions', 'Corporate Procurement', 'Retail Chains', 'Healthcare'],
      products: ['Uniforms', 'Institutional Textiles', 'Basic Apparel', 'Workwear'],
      strengths: ['Cost-effective sourcing', 'Government tender support', 'Bulk production capacity', 'Long-term supply agreements'],
      description: 'Supporting African markets with accessible, cost-effective and dependable manufacturing partnerships for institutional and commercial needs.'
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal, .trust-item, .sol-card, .ind-card, .proc-step, .promise-text, .final-cta').forEach(el => observer.observe(el))

    // Map connection line animation (GSAP only for this)
    const animateMap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      const mapLines = document.querySelectorAll('.map-line')
      if (mapLines.length) {
        mapLines.forEach((line, i) => {
          const length = line.getTotalLength?.() || 300
          gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
          gsap.to(line, {
            strokeDashoffset: 0,
            duration: 1.5,
            delay: 0.3 + i * 0.2,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: line.closest('svg'), start: 'top 80%' }
          })
        })
      }
    }
    animateMap()
  }, [])

  return (
    <main style={{ background: 'var(--off-white)', color: 'var(--espresso)' }}>

      {/* ── Section 1: Hero Banner ── */}
      <section 
        className="hero" 
        ref={heroRef}
        style={{ 
          minHeight: '80vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          paddingTop: '80px',
          background: 'var(--espresso)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {heroSlides.map((src, i) => {
          const isVisible = i === currentSlide || i === (currentSlide + 1) % heroSlides.length || i === (currentSlide - 1 + heroSlides.length) % heroSlides.length
          return (
          <div
            key={i}
            role="img"
            aria-label={`Slide ${i + 1} - ${src.split('/').pop().split('.')[0].replace(/-|_/g, ' ')}`}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: isVisible ? `linear-gradient(rgba(0,31,63,0.75), rgba(0,31,63,0.88)), url("${src}")` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0,
              opacity: i === currentSlide ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
            }}
          />
          )})}
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'var(--off-white)' }}>
          <h1 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3.5rem)', fontWeight: 300, marginBottom: '1rem', lineHeight: 1.15 }}>
            Global Sourcing.<br/>
            Trusted Manufacturing.<br/>
            <span style={{ color: 'var(--gold-leaf)' }}>Reliable Solutions.</span>
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto 1rem', fontSize: '0.95rem', color: 'var(--sand)', lineHeight: 1.7 }}>
            Built on more than 35 years of manufacturing and textile industry expertise, BEAM connects global businesses with trusted manufacturing partners, delivering professional sourcing and supply chain solutions across international markets.
          </p>
          <p style={{ maxWidth: '700px', margin: '0 auto 1.5rem', fontSize: '0.9rem', color: 'var(--gold-leaf)', fontWeight: 500, letterSpacing: '0.05em' }}>
            From textiles, garments and footwear to private label manufacturing and integrated sourcing solutions, we simplify global sourcing through trusted partnerships, quality assurance and professional supply chain management.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--off-white)', fontWeight: 300, letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
            Helping Businesses Source with Confidence.
          </p>
          <div className="flex-wrap-center" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" className="cta-btn cta-btn--gold" style={{ padding: '0.7rem 2rem', fontSize: 'clamp(0.6rem, 1vw, 0.75rem)' }}>
              Request a Quote
            </Link>
            <Link to="/solutions" className="cta-btn-outline cta-btn-outline--light" style={{ padding: '0.7rem 2rem', fontSize: 'clamp(0.6rem, 1vw, 0.75rem)' }}>
              Explore Solutions
            </Link>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '2.5rem' }}>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: i === currentSlide ? '2rem' : '0.5rem',
                  height: '0.5rem',
                  borderRadius: '999px',
                  border: 'none',
                  background: i === currentSlide ? 'var(--gold-leaf)' : 'rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  padding: 0
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Trust Bar ── */}
      <section style={{ background: 'var(--espresso)', padding: '1.5rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="grid-4col-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
            {[
              { number: '35+', label: 'Years of Industry Expertise' },
              { number: 'Global', label: 'Manufacturing Network' },
              { number: '9+', label: 'Integrated Solutions' },
              { number: 'Long-Term', label: 'Business Partnerships' }
            ].map((item, i) => (
              <div key={i} className="reveal trust-item" style={{ padding: '0.5rem 0.25rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 300, color: 'var(--gold-leaf)', marginBottom: '0.25rem' }}>{item.number}</div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sand)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Who We Are ── */}
      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw', textAlign: 'center', maxWidth: '1000px' }}>
        <h2 style={{ color: 'var(--charcoal)', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Who We Are</h2>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'var(--espresso)', lineHeight: 1.6, marginBottom: '2rem' }}>
          BEAM is a trusted global sourcing and supply chain partner, connecting international businesses with trusted manufacturing partners and delivering reliable sourcing solutions across global markets.
        </p>
        <h3 style={{ fontSize: '1rem', color: 'var(--gold-leaf)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Built on Experience</h3>
        <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '2rem', maxWidth: '850px', margin: '0 auto 2rem' }}>
          Built on more than 35 years of manufacturing and textile industry expertise, BEAM's foundation is rooted in sourcing, product development and supply chain management. Today, BEAM serves as a comprehensive global sourcing and supply chain partner, delivering end-to-end solutions across multiple industries through a trusted network of manufacturing partners.
        </p>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: 'var(--espresso)', fontWeight: 500, marginBottom: '3rem' }}>
          Our purpose is simple: Helping businesses source with confidence and build long-term, sustainable partnerships.
        </p>

        {/* Built on Experience cards */}
        <div className="grid-3col-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '4.5rem' }}>
          {[
            { label: 'Built on', number: '35+', text: 'Years of Manufacturing & Sourcing Expertise' },
            { label: 'Network', number: 'Trusted', text: 'Manufacturing Partners' },
            { label: 'Commitment', number: 'Quality', text: 'Transparency & Reliability' }
          ].map((card, i) => (
              <div key={i} className="reveal" style={{ background: 'var(--cream)', padding: 'clamp(1.5rem, 3vw, 2.5rem)', borderTop: '3px solid var(--gold-leaf)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B7073', marginBottom: '0.5rem' }}>{card.label}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 300, color: 'var(--espresso)', marginBottom: '0.5rem' }}>{card.number}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--charcoal)' }}>{card.text}</div>
            </div>
          ))}
        </div>

        {/* Our Purpose */}
        <div className="reveal" style={{ marginTop: '4rem', padding: 'clamp(1.5rem, 3vw, 3rem)', background: 'var(--cream)', borderLeft: '4px solid var(--gold-leaf)', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--gold-dark)', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Purpose</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', lineHeight: 1.8, fontStyle: 'italic' }}>
            "We believe successful sourcing is about more than products—it is about building trust, creating long-term partnerships, and connecting businesses with manufacturing partners that consistently deliver quality, reliability and value."
          </p>
        </div>

        {/* Branded Quote */}
        <div className="reveal" style={{ marginTop: '3rem' }}>
          <p style={{ fontSize: '1.3rem', color: 'var(--espresso)', fontWeight: 500, fontStyle: 'italic' }}>
            "Helping businesses source with confidence isn't just our tagline—it's our commitment."
          </p>
        </div>
      </section>

      {/* ── Section 4: The BEAM Difference ── */}
      <section style={{ background: 'var(--cream)', padding: '6rem 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--espresso)' }}>The BEAM Difference</h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--gold-leaf)', margin: '1rem auto 0' }} />
            <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', maxWidth: '650px', margin: '1.5rem auto 0', lineHeight: 1.8 }}>
              Beyond experience, we provide the expertise, trusted partnerships and end-to-end support that help businesses source with confidence.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <FiTarget />, title: '35+ Years of Manufacturing & Sourcing Expertise', text: 'Built on more than 35 years of manufacturing and textile industry expertise, helping businesses make informed sourcing decisions with confidence.' },
              { icon: <FiUsers />, title: 'Trusted Manufacturing Partners', text: 'We identify trusted manufacturing partners that align with your quality, technical and commercial requirements.' },
              { icon: <FiPackage />, title: 'End-to-End Sourcing Solutions', text: 'Supporting every stage of your sourcing journey—from product development and supplier selection to production, quality assurance and delivery.' },
              { icon: <FiShield />, title: 'Quality Assurance', text: 'Independent quality oversight to help ensure every product consistently meets agreed specifications, quality standards and customer expectations.' },
              { icon: <FiGlobe />, title: 'Compliance & Sustainability', text: 'Connecting businesses with manufacturing partners that meet international compliance, sustainability and responsible manufacturing standards.' },
              { icon: <FiMessageSquare />, title: 'Transparent Communication', text: 'Timely, transparent and professional communication that keeps every project moving efficiently.' },
              { icon: <FiStar />, title: 'Customer-First Approach', text: 'Every recommendation is made with your best interests in mind, helping you select the right manufacturing partner for your business.' },
              { icon: <FiUsers />, title: 'Long-Term Partnerships', text: 'We measure success by the long-term partnerships we build through trust, integrity and consistent performance.' }
            ].map((feature, i) => (
              <div key={i} className="reveal" style={{ background: 'var(--off-white)', padding: 'clamp(1.5rem, 3vw, 2.5rem)', borderRadius: '4px', borderTop: '4px solid var(--gold-leaf)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                <div aria-hidden="true" style={{ color: 'var(--gold-leaf)', fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--espresso)', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem', lineHeight: 1.7 }}>{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--espresso)', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto 1.5rem', lineHeight: 1.8 }}>
              "We don't simply connect buyers with manufacturers. We help businesses identify the right manufacturing partners, reduce sourcing risks and build reliable supply chains."
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--charcoal)', maxWidth: '700px', margin: '0 auto 1.5rem', lineHeight: 1.8 }}>
              Rather than spending valuable time searching for suppliers, BEAM helps you identify manufacturing partners that best match your business objectives, quality expectations and long-term sourcing strategy.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#6B7073', fontStyle: 'italic' }}>
              Every manufacturing partner is carefully selected and evaluated for capability, quality, compliance, reliability and long-term performance.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 5: Our Solutions ── */}
      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 6rem) 5vw' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
           <h2 style={{ color: 'var(--espresso)' }}>Our Solutions</h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold-leaf)', margin: '1rem auto 0' }} />
          <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', maxWidth: '700px', margin: '1.5rem auto 0', lineHeight: 1.8 }}>
            BEAM provides integrated sourcing and supply chain solutions designed to simplify global procurement. From product development, manufacturing and quality assurance to logistics coordination, we help businesses build reliable, efficient and scalable supply chains through trusted manufacturing partnerships.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { title: 'Global Sourcing Solutions', desc: 'Connecting businesses with carefully selected manufacturing partners worldwide.', icon: <FiGlobe />, img: `${import.meta.env.BASE_URL}global_logistics.webp` },
            { title: 'Product Development', desc: 'Turning ideas into market-ready products through expert technical and manufacturing support.', icon: <FiTarget />, img: `${import.meta.env.BASE_URL}modern_manufacturing.webp` },
            { title: 'Textile Solutions', desc: 'High-quality woven, knitted, dyed and specialty fabrics sourced from trusted manufacturing partners.', icon: <FiPackage />, img: `${import.meta.env.BASE_URL}solution_fabric.webp` },
            { title: 'Garment Solutions', desc: 'End-to-end apparel sourcing from product development to bulk production.', icon: <FiPackage />, img: `${import.meta.env.BASE_URL}solution_garment.webp` },
            { title: 'Home Textile Solutions', desc: 'Towels, bedding, kitchen textiles and home furnishings manufactured to international standards.', icon: <FiPackage />, img: `${import.meta.env.BASE_URL}Home Textile Solutions.jpg` },
            { title: 'Footwear Solutions', desc: 'Reliable footwear manufacturing for fashion, casual, workwear and private label brands.', icon: <FiPackage />, img: `${import.meta.env.BASE_URL}Footwear Solutions.jpg` },
            { title: 'Private Label Manufacturing', desc: 'Helping brands develop and manufacture products under their own brand.', icon: <FiStar />, img: `${import.meta.env.BASE_URL}Private Label Manufacturing.jpg` },
            { title: 'Quality Assurance', desc: 'Independent quality management throughout production to ensure consistent results.', icon: <FiShield />, img: `${import.meta.env.BASE_URL}Quality Assurance.jpg` },
            { title: 'Supply Chain Coordination', desc: 'Coordinating suppliers, production and logistics for efficient project execution.', icon: <FiTruck />, img: `${import.meta.env.BASE_URL}Supply Chain Coordination.jpg` }
          ].map((solution, i) => (
            <Link key={i} to={`/solutions`} className="reveal sol-card" style={{ display: 'flex', flexDirection: 'column', background: 'var(--espresso)', color: 'var(--off-white)', textDecoration: 'none', transition: 'transform 0.3s', borderRadius: '2px', overflow: 'hidden' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ height: '180px', overflow: 'hidden' }}>
                <img src={solution.img} alt={solution.title} width="400" height="180" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div aria-hidden="true" style={{ color: 'var(--gold-leaf)', fontSize: '1.3rem', marginBottom: '0.8rem' }}>{solution.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem' }}>{solution.title}</h3>
                <p style={{ color: 'var(--sand)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>{solution.desc}</p>
                <span style={{ color: 'var(--gold-leaf)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Learn More <FiArrowRight aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            Looking for a sourcing solution tailored to your business? Our team is ready to help you identify the right manufacturing partner and build a reliable, efficient supply chain.
          </p>
          <Link to="/contact" className="cta-btn cta-btn--gold" style={{ padding: '1rem 2.5rem' }}>
            Request a Quote
          </Link>
        </div>
      </section>

      {/* ── Section 6: Industries We Serve ── */}
      <section style={{ background: 'var(--cream)', padding: '6rem 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ color: 'var(--espresso)' }}>Industries We Serve</h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--gold-leaf)', margin: '1rem auto 0' }} />
            <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', maxWidth: '700px', margin: '1.5rem auto 0', lineHeight: 1.8 }}>
              Every industry has unique sourcing challenges. BEAM delivers tailored sourcing and supply chain solutions by connecting customers with carefully selected manufacturing partners that align with their quality, technical and commercial objectives.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'Fashion Brands', desc: 'Supporting fashion brands with product development, private label manufacturing and scalable sourcing solutions.', icon: <FiGrid /> },
              { name: 'Retail Chains', desc: 'Helping retail chains build reliable supply chains through trusted manufacturing partners and efficient sourcing solutions.', icon: <FiShoppingBag /> },
              { name: 'Importers & Wholesalers', desc: 'Supporting importers with reliable supplier selection, bulk sourcing, quality oversight and efficient supply chain coordination.', icon: <FiTruck /> },
              { name: 'Hospitality', desc: 'Supporting hospitality businesses with dependable sourcing solutions for uniforms, linens, furnishings and institutional products.', icon: <FiHome /> },
              { name: 'Healthcare', desc: 'Supporting healthcare organizations through compliant manufacturing and sourcing solutions for uniforms, medical textiles and institutional products.', icon: <FiHeart /> },
              { name: 'Corporate Procurement', desc: 'Helping businesses source uniforms, promotional products and corporate merchandise through trusted manufacturing partners.', icon: <FiBriefcase /> },
              { name: 'Outdoor, Sports & Lifestyle Brands', desc: 'Supporting outdoor, sports and lifestyle brands with product development, private label manufacturing and trusted sourcing solutions for apparel, footwear and accessories.', icon: <FiMap /> },
              { name: 'E-commerce Brands', desc: 'Helping digital-first brands scale through flexible sourcing, private label manufacturing and dependable production partnerships.', icon: <FiGlobe /> },
              { name: 'Industrial & Workwear', desc: 'Supporting manufacturers, distributors and industrial brands with durable workwear and specialized sourcing solutions.', icon: <FiTool /> }
            ].map((ind, i) => (
              <div key={i} className="reveal ind-card" style={{ padding: '2rem', background: 'var(--off-white)', borderBottom: '3px solid var(--gold-leaf)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div aria-hidden="true" style={{ color: 'var(--gold-leaf)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>{ind.icon}</div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.5rem' }}>{ind.name}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--charcoal)', lineHeight: 1.7 }}>{ind.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '1.5rem', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
              Whatever your industry, BEAM connects you with trusted manufacturing partners to build reliable, scalable supply chains that support long-term business growth.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#6B7073', fontStyle: 'italic', marginBottom: '2rem' }}>
              Can't find your industry? Our sourcing expertise extends across diverse product categories and manufacturing sectors. Contact us to discuss your specific sourcing requirements.
            </p>
            <Link to="/contact" className="cta-btn" style={{ background: 'var(--espresso)', color: 'var(--off-white)', padding: '1rem 2.5rem' }}>
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 7: Our Sourcing Process ── */}
      <section className="container" style={{ padding: 'clamp(4rem, 8vw, 8rem) 5vw' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
           <h2 style={{ color: 'var(--espresso)' }}>Our Sourcing Process</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', maxWidth: '700px', margin: '1.5rem auto 0', lineHeight: 1.8 }}>
            Every successful sourcing project follows a structured process. From understanding your requirements to selecting the right manufacturing partner and managing production through final delivery, BEAM provides expert guidance at every stage.
          </p>
        </div>

        <div className="flex-responsive" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {[
            { step: '01', title: 'Understand', text: 'We begin by understanding your business objectives, product specifications, quality expectations, target markets and commercial requirements.' },
            { step: '02', title: 'Source', text: 'We identify and evaluate manufacturing partners based on technical capability, production capacity, quality standards and project suitability.' },
            { step: '03', title: 'Develop', text: 'We coordinate product development, sampling, costing and production planning to ensure every project starts on a solid foundation.' },
            { step: '04', title: 'Assure', text: 'Quality assurance is integrated throughout production to ensure products consistently meet agreed specifications, quality expectations and international standards.' },
            { step: '05', title: 'Deliver', text: 'We coordinate production, documentation and logistics to ensure timely deliveries and reliable supply chain performance.' },
            { step: '06', title: 'Support', text: 'Our relationship continues beyond delivery through ongoing support, continuous improvement and long-term collaboration.' }
          ].map((item, i) => (
            <div key={i} className="reveal proc-step" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--gold-leaf)', fontWeight: 300, minWidth: '60px' }}>{item.step}</div>
              <div style={{ flex: 1, paddingBottom: '1.5rem', borderBottom: i < 5 ? '1px solid var(--divider)' : 'none' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--espresso)', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--charcoal)' }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem', padding: 'clamp(1.5rem, 3vw, 3rem)', background: 'var(--cream)', borderLeft: '4px solid var(--gold-leaf)', maxWidth: '800px', margin: '4rem auto 0' }}>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--gold-dark)', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>The BEAM Commitment</h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--charcoal)', lineHeight: 1.8, fontStyle: 'italic' }}>
            Our structured sourcing process reduces risk, improves transparency and helps businesses build reliable, long-term manufacturing partnerships with confidence.
          </p>
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/contact" className="cta-btn cta-btn--gold" style={{ padding: '1rem 2.5rem' }}>
            Start Your Project
          </Link>
        </div>
      </section>

      {/* ── Section 8: Our Promise ── */}
      <section style={{ background: 'var(--espresso)', color: 'var(--off-white)', padding: 'clamp(4rem, 8vw, 8rem) 0', textAlign: 'center' }}>
        <div className="container reveal" style={{ maxWidth: '900px' }}>
           <h2 style={{ color: 'var(--gold-leaf)', marginBottom: '1rem' }}>Our Promise</h2>
           <p style={{ fontSize: '1rem', color: 'var(--taupe)', letterSpacing: '0.15em', marginBottom: '3rem' }}>
            More than a commitment—it's the principle that guides every partnership we build.
          </p>
          
          <p className="promise-text" style={{ fontSize: '1.4rem', lineHeight: 2, fontWeight: 400, marginBottom: '2.5rem', color: '#f5f5f5' }}>
            At BEAM, we believe successful sourcing is built on trust, transparency and long-term partnerships—not simply transactions.
          </p>

          <p className="promise-text" style={{ fontSize: '1.15rem', lineHeight: 2, fontWeight: 400, marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem', color: '#f5f5f5' }}>
            Every partnership begins with understanding your business, identifying the right manufacturing partners and building a sourcing strategy aligned with your quality expectations, commercial objectives and long-term goals. We don't simply connect buyers with manufacturers—we build trusted supply chain partnerships that create lasting value.
          </p>

          <p className="promise-text" style={{ fontSize: '1.15rem', lineHeight: 2, fontWeight: 400, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem', color: '#f5f5f5' }}>
            Built on more than 35 years of manufacturing and textile industry experience, BEAM was established with a vision to connect global businesses with trusted manufacturing partners. Through professionalism, integrity and transparent communication, we help our partners source with confidence and build sustainable, long-term relationships.
          </p>

          <p className="promise-text" style={{ fontSize: '1.1rem', lineHeight: 2, fontWeight: 400, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem', color: '#e0e0e0', fontStyle: 'italic' }}>
            We believe exceptional manufacturers deserve global recognition, and global businesses deserve access to reliable manufacturing partners they can trust. BEAM exists to bridge that gap.
          </p>

          <div style={{ fontSize: '1.5rem', color: 'var(--gold-leaf)', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '4rem' }}>
            Helping Businesses Source with Confidence.
          </div>

          {/* Founder Quote */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem', maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 300, fontStyle: 'italic', color: 'var(--sand)', marginBottom: '1.5rem' }}>
              "After more than three decades in the manufacturing and textile industry, I founded BEAM with a simple belief: businesses deserve honest guidance, trusted manufacturing partners and long-term relationships built on trust."
            </p>
            <p style={{ fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--taupe)' }}>
              Zahid Javaid | Founder
            </p>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link to="/contact" className="cta-btn cta-btn--gold" style={{ padding: '1rem 2.5rem' }}>
              Start Your Sourcing Journey
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 9: Global Reach ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 0', textAlign: 'center' }}>
        <div className="container">
          <div className="reveal">
             <h2 style={{ color: 'var(--espresso)', marginBottom: '1.5rem' }}>Global Reach</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: 1.8 }}>
              BEAM connects businesses with trusted manufacturing partners across global markets. Built on decades of industry experience, our sourcing network supports international brands, retailers, importers and institutional buyers through reliable manufacturing partnerships and professionally managed supply chains.
            </p>
          </div>

          {/* SVG World Map */}
          <div className="reveal" style={{ maxWidth: '950px', margin: '0 auto 4rem', padding: '2rem', background: 'linear-gradient(135deg, #0a1628 0%, #001F3F 50%, #0a1628 100%)', borderRadius: '8px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
            <svg viewBox="0 0 1000 500" style={{ width: '100%', height: 'auto' }}>
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="marketGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
                </linearGradient>
                <style>{`
                  @keyframes dash { to { stroke-dashoffset: -20; } }
                  @keyframes pulse { 0%, 100% { r: 6; opacity: 1; } 50% { r: 10; opacity: 0.7; } }
                  @keyframes hubPulse { 0%, 100% { r: 8; } 50% { r: 12; } }
                  @keyframes hubGlowPulse { 0%, 100% { r: 25; opacity: 0.4; } 50% { r: 35; opacity: 0.15; } }
                  .map-line-animated { animation: dash 1.5s linear infinite; }
                  .market-dot { cursor: pointer; transition: all 0.3s ease; }
                  .market-dot:hover { filter: url(#glow); }
                  .market-label { transition: all 0.3s ease; pointer-events: none; }
                  .market-group:hover .market-label { opacity: 1 !important; }
                  .market-group:hover .market-dot-outer { r: 12; opacity: 0.6; }
                  .market-group:hover .market-dot-inner { r: 5; }
                  .tooltip-box { opacity: 0; transition: all 0.3s ease; pointer-events: none; }
                  .market-group:hover .tooltip-box { opacity: 1; }
                `}</style>
              </defs>
              
              {/* Background */}
              <rect width="1000" height="500" fill="#001F3F" rx="8" />
              
              {/* Subtle grid */}
              {[...Array(10)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke="rgba(212,175,55,0.03)" strokeWidth="0.5" />
              ))}
              {[...Array(20)].map((_, i) => (
                <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" stroke="rgba(212,175,55,0.03)" strokeWidth="0.5" />
              ))}

              {/* Continents - more detailed */}
              {/* North America */}
              <path d="M80,90 C100,60 140,50 180,55 L220,65 C240,75 260,95 265,120 L255,155 C245,175 225,185 200,190 L165,195 C140,190 115,175 100,155 L85,125 C78,110 75,100 80,90 Z" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.15)" strokeWidth="0.8" />
              {/* Central America */}
              <path d="M165,195 L175,205 C180,215 175,225 170,230 L160,235 C155,232 150,225 155,218 L160,205 Z" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.12)" strokeWidth="0.6" />
              {/* South America */}
              <path d="M200,250 C215,240 235,245 250,255 L265,275 C275,295 280,320 275,350 L265,380 C255,395 240,400 225,395 L210,375 C200,355 195,330 195,305 L192,275 C191,265 195,255 200,250 Z" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.15)" strokeWidth="0.8" />
              {/* Europe */}
              <path d="M420,65 C435,55 455,50 475,55 L500,65 C515,75 520,95 515,115 L505,130 C495,140 475,145 455,140 L435,130 C420,118 415,95 420,65 Z" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.15)" strokeWidth="0.8" />
              {/* UK */}
              <path d="M415,60 C420,52 430,50 435,55 L438,65 C436,72 428,75 422,72 L418,65 Z" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.2)" strokeWidth="0.6" />
              {/* Africa */}
              <path d="M435,165 C450,155 475,150 500,155 L525,170 C540,185 545,210 542,245 L535,285 C528,315 510,340 485,350 L460,345 C440,335 428,310 425,280 L422,245 C420,210 425,180 435,165 Z" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.15)" strokeWidth="0.8" />
              {/* Middle East */}
              <path d="M520,130 C535,120 555,125 565,140 L570,160 C568,175 555,185 540,185 L525,180 C515,170 510,155 512,140 Z" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.15)" strokeWidth="0.8" />
              {/* Asia */}
              <path d="M540,55 C570,40 610,35 650,45 L700,60 C740,75 765,100 775,135 L770,170 C760,200 735,215 700,220 L650,218 C610,212 575,195 555,170 L535,140 C525,115 530,85 540,55 Z" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.15)" strokeWidth="0.8" />
              {/* Australia */}
              <path d="M740,315 C760,300 790,295 815,305 L835,320 C845,340 840,360 825,375 L795,385 C770,390 750,380 740,365 L735,340 C733,330 735,320 740,315 Z" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.15)" strokeWidth="0.8" />

              {/* Connection lines from Pakistan to markets */}
              {/* To North America */}
              <path className="map-line map-line-animated" d="M605,155 C500,120 350,110 190,130" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
              {/* To Europe */}
              <path className="map-line map-line-animated" d="M605,155 C540,110 490,90 470,100" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" style={{ animationDelay: '0.3s' }} />
              {/* To UK */}
              <path className="map-line map-line-animated" d="M605,155 C530,100 460,70 430,75" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" style={{ animationDelay: '0.6s' }} />
              {/* To Middle East */}
              <path className="map-line map-line-animated" d="M605,155 C580,150 560,155 545,160" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" style={{ animationDelay: '0.9s' }} />
              {/* To Australia */}
              <path className="map-line map-line-animated" d="M605,155 C650,200 720,280 790,340" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" style={{ animationDelay: '1.2s' }} />

              {/* Pakistan Hub */}
              <circle cx="610" cy="155" r="30" fill="url(#hubGlow)">
                <animate attributeName="r" values="25;35;25" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0.15;0.4" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="610" cy="155" r="8" fill="#D4AF37" filter="url(#glow)">
                <animate attributeName="r" values="8;11;8" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="610" cy="155" r="3" fill="#ffffff" />
              <text x="610" y="138" textAnchor="middle" fill="#D4AF37" fontSize="9" fontWeight="700" fontFamily="Inter" letterSpacing="2">PAKISTAN</text>
              <text x="610" y="178" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="Inter" letterSpacing="2">HUB</text>

              {/* Markets with hover + click interactivity */}
              {/* North America */}
              <g className="market-group" style={{ cursor: 'pointer' }} onClick={() => setSelectedMarket('north-america')}>
                <circle className="market-dot-outer" cx="190" cy="130" r="8" fill="url(#marketGlow)" opacity="0.3" />
                <circle className="market-dot-inner market-dot" cx="190" cy="130" r="4" fill="#D4AF37" filter="url(#softGlow)" />
                <text className="market-label" x="190" y="115" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="Inter" fontWeight="500" letterSpacing="0.5" opacity="0.6">NORTH AMERICA</text>
                <rect className="tooltip-box" x="130" y="70" width="120" height="40" rx="4" fill="rgba(0,31,63,0.95)" stroke="#D4AF37" strokeWidth="0.5" />
                <text className="tooltip-box" x="190" y="85" textAnchor="middle" fill="#D4AF37" fontSize="8" fontWeight="600" fontFamily="Inter">USA / Canada</text>
                <text className="tooltip-box" x="190" y="97" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="Inter">Brands · Retail · Import</text>
                <text className="tooltip-box" x="190" y="106" textAnchor="middle" fill="rgba(212,175,55,0.6)" fontSize="6" fontFamily="Inter">Click to explore →</text>
              </g>

              {/* Europe */}
              <g className="market-group" style={{ cursor: 'pointer' }} onClick={() => setSelectedMarket('europe')}>
                <circle className="market-dot-outer" cx="475" cy="95" r="8" fill="url(#marketGlow)" opacity="0.3" />
                <circle className="market-dot-inner market-dot" cx="475" cy="95" r="4" fill="#D4AF37" filter="url(#softGlow)" />
                <text className="market-label" x="475" y="80" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="Inter" fontWeight="500" letterSpacing="0.5" opacity="0.6">EUROPE</text>
                <rect className="tooltip-box" x="420" y="37" width="110" height="40" rx="4" fill="rgba(0,31,63,0.95)" stroke="#D4AF37" strokeWidth="0.5" />
                <text className="tooltip-box" x="475" y="52" textAnchor="middle" fill="#D4AF37" fontSize="8" fontWeight="600" fontFamily="Inter">European Union</text>
                <text className="tooltip-box" x="475" y="64" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="Inter">Fashion · Home · Corporate</text>
                <text className="tooltip-box" x="475" y="73" textAnchor="middle" fill="rgba(212,175,55,0.6)" fontSize="6" fontFamily="Inter">Click to explore →</text>
              </g>

              {/* UK */}
              <g className="market-group" style={{ cursor: 'pointer' }} onClick={() => setSelectedMarket('uk')}>
                <circle className="market-dot-outer" cx="425" cy="68" r="6" fill="url(#marketGlow)" opacity="0.3" />
                <circle className="market-dot-inner market-dot" cx="425" cy="68" r="3" fill="#D4AF37" filter="url(#softGlow)" />
                <text className="market-label" x="425" y="55" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="Inter" fontWeight="500" letterSpacing="0.5" opacity="0.6">UK</text>
                <rect className="tooltip-box" x="375" y="13" width="100" height="40" rx="4" fill="rgba(0,31,63,0.95)" stroke="#D4AF37" strokeWidth="0.5" />
                <text className="tooltip-box" x="425" y="28" textAnchor="middle" fill="#D4AF37" fontSize="8" fontWeight="600" fontFamily="Inter">United Kingdom</text>
                <text className="tooltip-box" x="425" y="40" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="Inter">Retail · Hospitality</text>
                <text className="tooltip-box" x="425" y="49" textAnchor="middle" fill="rgba(212,175,55,0.6)" fontSize="6" fontFamily="Inter">Click to explore →</text>
              </g>

              {/* Middle East */}
              <g className="market-group" style={{ cursor: 'pointer' }} onClick={() => setSelectedMarket('middle-east')}>
                <circle className="market-dot-outer" cx="545" cy="160" r="7" fill="url(#marketGlow)" opacity="0.3" />
                <circle className="market-dot-inner market-dot" cx="545" cy="160" r="3.5" fill="#D4AF37" filter="url(#softGlow)" />
                <text className="market-label" x="545" y="145" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="Inter" fontWeight="500" letterSpacing="0.5" opacity="0.6">MIDDLE EAST</text>
                <rect className="tooltip-box" x="490" y="103" width="110" height="40" rx="4" fill="rgba(0,31,63,0.95)" stroke="#D4AF37" strokeWidth="0.5" />
                <text className="tooltip-box" x="545" y="118" textAnchor="middle" fill="#D4AF37" fontSize="8" fontWeight="600" fontFamily="Inter">UAE · KSA · Qatar</text>
                <text className="tooltip-box" x="545" y="130" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="Inter">Hospitality · Corporate</text>
                <text className="tooltip-box" x="545" y="139" textAnchor="middle" fill="rgba(212,175,55,0.6)" fontSize="6" fontFamily="Inter">Click to explore →</text>
              </g>

              {/* Australia */}
              <g className="market-group" style={{ cursor: 'pointer' }} onClick={() => setSelectedMarket('australia')}>
                <circle className="market-dot-outer" cx="790" cy="340" r="8" fill="url(#marketGlow)" opacity="0.3" />
                <circle className="market-dot-inner market-dot" cx="790" cy="340" r="4" fill="#D4AF37" filter="url(#softGlow)" />
                <text className="market-label" x="790" y="360" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="Inter" fontWeight="500" letterSpacing="0.5" opacity="0.6">AUSTRALIA</text>
                <rect className="tooltip-box" x="730" y="375" width="120" height="40" rx="4" fill="rgba(0,31,63,0.95)" stroke="#D4AF37" strokeWidth="0.5" />
                <text className="tooltip-box" x="790" y="390" textAnchor="middle" fill="#D4AF37" fontSize="8" fontWeight="600" fontFamily="Inter">Australia / NZ</text>
                <text className="tooltip-box" x="790" y="402" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="Inter">Retail · Workwear</text>
                <text className="tooltip-box" x="790" y="411" textAnchor="middle" fill="rgba(212,175,55,0.6)" fontSize="6" fontFamily="Inter">Click to explore →</text>
              </g>

              {/* Africa */}
              <g className="market-group" style={{ cursor: 'pointer' }} onClick={() => setSelectedMarket('africa')}>
                <circle className="market-dot-outer" cx="475" cy="270" r="7" fill="url(#marketGlow)" opacity="0.3" />
                <circle className="market-dot-inner market-dot" cx="475" cy="270" r="3.5" fill="#D4AF37" filter="url(#softGlow)" />
                <text className="market-label" x="475" y="290" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="Inter" fontWeight="500" letterSpacing="0.5" opacity="0.6">AFRICA</text>
                <rect className="tooltip-box" x="420" y="300" width="110" height="40" rx="4" fill="rgba(0,31,63,0.95)" stroke="#D4AF37" strokeWidth="0.5" />
                <text className="tooltip-box" x="475" y="315" textAnchor="middle" fill="#D4AF37" fontSize="8" fontWeight="600" fontFamily="Inter">South Africa · Kenya</text>
                <text className="tooltip-box" x="475" y="327" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="Inter">Institutional · Gov</text>
                <text className="tooltip-box" x="475" y="336" textAnchor="middle" fill="rgba(212,175,55,0.6)" fontSize="6" fontFamily="Inter">Click to explore →</text>
              </g>
            </svg>
          </div>

          {/* Market Detail Modal */}
          {selectedMarket && marketData[selectedMarket] && (
            <div 
              onClick={() => setSelectedMarket(null)} 
              style={{ 
                position: 'fixed', inset: 0, zIndex: 9999, 
                background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '1rem'
              }}
            >
              <div onClick={e => e.stopPropagation()} style={{
                background: 'linear-gradient(135deg, #0a1628, #001F3F)',
                border: '1px solid rgba(212,175,55,0.3)',
                borderRadius: '8px',
                maxWidth: '650px', width: '100%',
                maxHeight: '85vh', overflow: 'auto',
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.1)',
                position: 'relative'
              }}>
                <button onClick={() => setSelectedMarket(null)} style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: 'none', border: 'none', color: 'var(--off-white)',
                  fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1,
                  width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)',
                  transition: 'all 0.3s'
                }} onMouseEnter={e => { e.target.style.borderColor = '#D4AF37'; e.target.style.color = '#D4AF37' }} onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.color = 'var(--off-white)' }}>
                  ✕
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{marketData[selectedMarket].icon}</span>
                  <div>
                    <h3 style={{ color: '#D4AF37', fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>{marketData[selectedMarket].name}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: 0 }}>{marketData[selectedMarket].countries}</p>
                  </div>
                </div>

                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem', borderLeft: '3px solid #D4AF37', paddingLeft: '1rem' }}>
                  {marketData[selectedMarket].description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#D4AF37', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Industries We Serve</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {marketData[selectedMarket].industries.map((ind, i) => (
                      <span key={i} style={{ padding: '0.35rem 0.8rem', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '4px', color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>{ind}</span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#D4AF37', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Key Products</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {marketData[selectedMarket].products.map((prod, i) => (
                      <span key={i} style={{ padding: '0.35rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>{prod}</span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ color: '#D4AF37', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Our Strengths</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {marketData[selectedMarket].strengths.map((str, i) => (
                      <li key={i} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', padding: '0.4rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#D4AF37', fontSize: '0.7rem' }}>●</span> {str}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link to="/contact" onClick={() => setSelectedMarket(null)} style={{
                    padding: '0.8rem 2rem', background: '#D4AF37', color: '#001F3F',
                    textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem',
                    borderRadius: '4px', letterSpacing: '0.05em', transition: 'all 0.3s'
                  }} onMouseEnter={e => { e.target.style.background = '#e5c04a'; e.target.style.transform = 'translateY(-2px)' }} onMouseLeave={e => { e.target.style.background = '#D4AF37'; e.target.style.transform = 'translateY(0)' }}>
                    Discuss Requirements
                  </Link>
                  <button onClick={() => setSelectedMarket(null)} style={{
                    padding: '0.8rem 2rem', background: 'transparent', color: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.85rem',
                    borderRadius: '4px', cursor: 'pointer', letterSpacing: '0.05em', transition: 'all 0.3s'
                  }} onMouseEnter={e => { e.target.style.borderColor = '#D4AF37'; e.target.style.color = '#D4AF37' }} onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.color = 'rgba(255,255,255,0.7)' }}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Markets We Serve */}
          <div className="reveal" style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--espresso)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Markets We Serve</h3>
            <div className="flex-wrap-center" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {['North America', 'Europe', 'United Kingdom', 'Middle East', 'Asia-Pacific', 'Africa'].map((market, i) => (
                <span key={i} style={{ padding: '0.6rem 1.5rem', background: 'var(--cream)', color: 'var(--espresso)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '2px' }}>
                  {market}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="reveal grid-4col-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { num: '35+', label: 'Years of Industry Experience' },
              { num: 'Global', label: 'Manufacturing Network' },
              { num: '9+', label: 'Industry Solutions' },
              { num: 'End-to-End', label: 'Sourcing Solutions' }
            ].map((stat, i) => (
              <div key={i} style={{ padding: '1.5rem', borderTop: '2px solid var(--gold-leaf)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--espresso)', marginBottom: '0.3rem' }}>{stat.num}</div>
                <div style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7073' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="reveal">
            <p style={{ fontSize: '1rem', color: 'var(--charcoal)', marginBottom: '2rem', fontStyle: 'italic' }}>
              Connecting Reliable Manufacturing with Global Business Opportunities
            </p>
            <Link to="/contact" className="cta-btn cta-btn--gold" style={{ padding: '1rem 2.5rem' }}>
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 10: Why Global Businesses Choose BEAM ── */}
      <section style={{ background: 'var(--espresso)', color: 'var(--off-white)', padding: 'clamp(4rem, 8vw, 8rem) 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ color: 'var(--gold-leaf)', marginBottom: '1.5rem' }}>Why Global Businesses Choose BEAM</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--sand)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
              Every successful sourcing partnership is built on trust, expertise and execution. Combining more than 35 years of industry experience with a carefully selected manufacturing network, BEAM helps businesses build dependable global supply chains.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <FiTarget />, title: '35+ Years of Industry Experience', text: 'Built on more than 35 years of hands-on manufacturing, sourcing and international business expertise.' },
              { icon: <FiUsers />, title: 'Carefully Selected Manufacturing Partners', text: 'We carefully select manufacturing partners based on capability, quality standards, production capacity and commercial suitability—not simply availability.' },
              { icon: <FiPackage />, title: 'End-to-End Sourcing Management', text: 'From product development and factory selection to quality assurance, logistics and delivery, we manage every stage professionally.' },
              { icon: <FiMessageSquare />, title: 'Transparency at Every Step', text: 'Clear communication, honest advice and proactive reporting help reduce sourcing risks and build confidence.' },
              { icon: <FiShield />, title: 'Quality Without Compromise', text: 'We partner with manufacturers capable of consistently meeting agreed specifications, international standards and customer expectations.' },
              { icon: <FiGlobe />, title: 'Long-Term Partnerships', text: 'Our objective is not simply to complete an order, but to become a trusted sourcing partner that supports long-term business growth.' }
            ].map((item, i) => (
              <div key={i} className="reveal" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', background: 'rgba(255,255,255,0.03)', borderLeft: '3px solid var(--gold-leaf)' }}>
                <div aria-hidden="true" style={{ color: 'var(--gold-leaf)', fontSize: '1.75rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--off-white)', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--sand)', fontSize: '0.95rem', lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--sand)', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 2rem', fontStyle: 'italic' }}>
              At BEAM, we measure our success by the long-term success of our partners. Every project is managed with professionalism, integrity and a commitment to building trusted partnerships that last.
            </p>
            <Link to="/contact" className="cta-btn cta-btn--gold" style={{ padding: '1rem 2.5rem' }}>
              Start Your Sourcing Journey
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 11: Final CTA ── */}
      <section className="final-cta" style={{ background: 'var(--cream)', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container reveal" style={{ maxWidth: '800px' }}>
           <h2 style={{ color: 'var(--espresso)', marginBottom: '1.5rem' }}>Let's Build Your Global Supply Chain Together</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--charcoal)', marginBottom: '3rem', lineHeight: 1.8 }}>
            Whether you're sourcing textiles, garments, footwear or home products, or developing a private label brand, BEAM combines more than 35 years of industry expertise with trusted manufacturing partnerships to build reliable, transparent and scalable supply chains tailored to your business.
          </p>
           <Link to="/contact" className="cta-btn cta-btn--gold" style={{ padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1.5rem, 4vw, 3rem)', fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)' }}>
            Start Your Sourcing Journey
          </Link>
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section style={{ background: 'var(--espresso)', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: '1rem', color: 'var(--sand)', letterSpacing: '0.1em', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
            Connecting global businesses with trusted manufacturing partners and building reliable supply chains through expertise, transparency and long-term partnerships.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
