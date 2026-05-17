import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Experience from './components/Experience/Experience'
import Brands from './components/Brands/brands' 
import Work from './components/Work/Work'
// import Testimonials from './components/Testimonials/Testimonials'
// import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'
// import { Analytics } from "@vercel/analytics/react"
// import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Brands />
      <Work />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* <Analytics /> */}
      {/* <SpeedInsights /> */}
    </>
  )
}

export default App