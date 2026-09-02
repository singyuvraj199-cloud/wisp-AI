import React from 'react'
import logo from  './assets/logo.svg';

const messages = [
    { role: "assistant", content: "Hey! I'm Wisp AI. How can I help?" },
    { role: "user", content: "What can you do?" },
    { role: "assistant", content: "I can chat with you about anything!" },
   
    
  ];




const App = () => {
  return (
    <>
      <div className="chat-container flex items-center flex-col  ">
        <div className='flex justify-between items-center bg-gray-200 border-transparent w-full max-w-[30rem]  rounded-2xl'>
          <h1 className='font-semibold text-1.5xl tracking-ligt capitalize text-[#4C1BAA] pl-1'>Wisp AI</h1> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzFVaIHn6jAl8lNpDrh3-enu8qdsWKmaf2Vn7YKnQCA&s=10" className='w-10 h-10 rounded-full'/>
          </div>
          <div className=" z-0 messages flex flex-col gap-5 p-3 overflow-y-auto w-[57%] min-w-[200]  h-[350px] ">
            {messages.map((msg, index) => (
              <div key={index} className={msg.role === "user" ?
               "user-msg self-end max-w-[85%] bg-gray-300 t px-4 py-3 rounded-2xl rounded-br-sm " :
                "ai-msg self-start max-w-[85%] bg-gray-300  px-4 py-3 rounded-2xl rounded-br-sm"}>
                {msg.content}
              </div>
            ))}
          </div>
          <div className="input-area flex w-full max-w-[25rem] ">
            <input type="text" placeholder="ask anything..." className='outline-none border px-3 py-1 w-full rounded-l-full border-blue-900 ' />
            <button className='border px-3 py-1 rounded-r-full border-blue-900 bg-blue-900 text-white hover:bg-blue-800 cursor-pointer '>Send</button>
          </div>
        </div>
    </>
  )
}

export default App
