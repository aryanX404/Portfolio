import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Projects />
    </div>
  )
}

export default App
