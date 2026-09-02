import React from 'react'
import Input from './components/input';
import logo from  './assets/logo.svg';
import Chat from './components/chat';

const messages = [
    { role: "assistant", content: "Hey! I'm Wisp AI. How can I help?" },
    { role: "user", content: "What can you do?" },
    { role: "assistant", content: "I can chat with you about anything!" },
    
  ];




const App = () => {
  return (
    <>
      <div className="chat-container flex items-center flex-col   ">
        <div className='flex justify-between items-center bg-gray-200 border-transparent w-full max-w-[30rem]  rounded-2xl'>
          <h1 className='font-semibold text-1.5xl tracking-ligt capitalize text-[#4C1BAA] pl-1'>Wisp AI</h1> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzFVaIHn6jAl8lNpDrh3-enu8qdsWKmaf2Vn7YKnQCA&s=10" className='w-10 h-10 rounded-full'/>
          </div>
          <Chat messages={messages} />
          <Input />
          </div>

    </>
  )
}

export default App
