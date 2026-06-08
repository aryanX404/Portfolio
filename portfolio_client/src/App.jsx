import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Profile />
    </div>
  )
}

export default App
