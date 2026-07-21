import { useEffect, useState, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Faq = lazy(() => import('./pages/Faq'))
const Insights = lazy(() => import('./pages/Insights'))
const Solutions = lazy(() => import('./pages/Solutions'))
const Downloads = lazy(() => import('./pages/Downloads'))
const Careers = lazy(() => import('./pages/Careers'))
const Blog = lazy(() => import('./pages/Blog'))
const Industries = lazy(() => import('./pages/Industries'))
const WhyBeam = lazy(() => import('./pages/WhyBeam'))

import Preloader from './components/Preloader'
import WhatsAppWidget from './components/WhatsAppWidget'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const ready = Promise.all([
      new Promise(resolve => setTimeout(resolve, 300)),
      import('./pages/Home')
    ])
    ready.then(() => {
      setLoading(false)
      document.body.classList.add('loaded')
    })
  }, [])

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <>
          <Nav />
          <WhatsAppWidget />

          <div id="main-content" role="main">
          <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />

            <Route path="/insights" element={<Insights />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/why-beam" element={<WhyBeam />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />

            <Route path="*" element={<Home />} />
          </Routes>
          </Suspense>
          </div>
        </>
      )}
    </>
  )
}

export default App
