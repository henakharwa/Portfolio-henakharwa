import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ProjectCaseStudy from './pages/ProjectCaseStudy'
import Awards from './pages/Awards'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <>
      <ParticlesBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6">
          <div key={location.pathname} className="page-transition">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectCaseStudy />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
