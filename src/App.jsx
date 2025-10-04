
import About from './components/About'
import Contact from './components/Contact'
import Core from './components/Core'
import './App.css'
import Navbar from './components/Navbar'
import Silk from './components/Silk'
import History from './components/history'

function App() {
  return (
    <>
      {/* Background Animation */}
      <div className="fixed inset-0 z-0">
        <Silk
          speed={10}
          scale={1}
          color="#0A192F"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="pt-12">
          
          <About/>
          <div className='py-15'>
          
          <History/>
          <Core/></div>
          <Contact/>
        </div>
      </div>
    </>
  )
}

export default App
