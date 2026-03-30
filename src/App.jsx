import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-white min-h-screen">
      <Navbar />
      <Banner/>
      <Stats/>
      
 
    </div>
     
    </>
  )
}

export default App
