import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

function App() {

  return (
    <BrowserRouter>
      <div style={{ position: 'relative', colorScheme: 'dark', zIndex: 0, }}>
        <div style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
          <Navbar />
          <Hero />
        </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        <div style={{ position: 'relative', zIndex: 0, }} >
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
