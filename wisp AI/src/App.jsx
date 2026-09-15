import React from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import { useState } from 'react';


const App = () => {
  const [started, setStarted] = useState(false)
  const [input, setInput] = useState("");

  return (
    <>
    <div className='flex gap-5 h-screen'>
    <Sidebar setStarted={setStarted}
    setInput={setInput} input={input}
    />
    <Hero started={started} setStarted={setStarted}
     setInput={setInput} input={input}/>
    </div>
    </>
  )
}

export default App

