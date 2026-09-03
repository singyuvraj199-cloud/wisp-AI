import React, { useState } from 'react'
import Input from './components/input';
import logo from './assets/logo.svg';
import Chat from './components/chat';

const App = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey! I'm Wisp AI. How can I help?" },
    { role: "user", content: "What can you do?" },
    { role: "assistant", content: "I can chat with you about anything!" },
  ]);

  return (
    <>
      <div className="chat-container flex items-center flex-col">
        <div className='flex justify-between items-center bg-gray-200 border-transparent w-full max-w-[30rem] rounded-2xl'>
          <h1 className='font-semibold text-1.5xl tracking-ligt capitalize text-[#4C1BAA] pl-1'>Wisp AI</h1>
          <img src={logo} className='w-10 h-10 rounded-full' />
        </div>

        <Chat messages={messages} />

        <Input
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    </>
  )
}

export default App