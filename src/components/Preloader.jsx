import { useEffect, useRef } from 'react'

export default function Preloader() {
  const loaderRef = useRef(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (loaderRef.current) {
        loaderRef.current.style.transition = 'transform 0.4s cubic-bezier(0.77, 0, 0.175, 1)'
        loaderRef.current.style.transform = 'translateY(-100%)'
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="preloader" ref={loaderRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--espresso)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1.2rem'
      }}
    >
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem, 8vw, 7rem)',
        fontStyle: 'italic',
        fontWeight: 300,
        letterSpacing: '0.4em',
        color: 'var(--cream)',
        textTransform: 'uppercase'
      }}>
        BE<span style={{ color: 'var(--gold-leaf)' }}>A</span>M
      </div>
    </div>
  )
}
