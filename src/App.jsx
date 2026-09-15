import React from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import { useState } from 'react';



const App = () => {
  const [started, setStarted] = useState(false)
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([ 
    {
    id: 1,
    role: "user",
    content: "hey wisp how are u?"
   },
   {
    id: 2,
    role: "ai",
    content: "HI yuvray iam good. how may i help you"
   },
   {
    id: 3,
    role: "user",
    content: "what's the weather in shimla"
   },
   {
    id: 4,
    role: "ai",
    content: "its monsoon uv can't you see"
   },
   {
    id: 5,
    role: "user",
    content: "sorry just asking. dont be rude"
   },
   {
    id: 6,
    role: "ai",
    content: "fine"
   }
  ])




  return (
    <>
    <div className='flex gap-5 h-screen'>
    <Sidebar setStarted={setStarted}
    setInput={setInput} input={input}
    />
    <Hero started={started} setStarted={setStarted}
     setInput={setInput} input={input}
     messages={messages} setMessages={setMessages}
     />
    </div>
    </>
  )
}

export default App

