import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import List from './Components/List'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
    <div className='left'>
      <Header/>
      <Navbar/>
    </div>
    <div className='right'>
      <Card/>
      <List/>
    </div>
      
    </div>
  )
}

export default App
