import React from 'react'
import plus from '../assets/plus.svg' 
import { useState } from 'react'; 



const Input = ({ messages, setMessages }) => {
   const [message, setMessage] = useState("");


  const askWisp = () => {
    if(message.trim() === "")return;
       setMessage([
      ...message,
      {
        role: "user",
        content: message,
        id: crypto.randomUUID(),
      }
    ]);
    
    setMessage("");
  };
  
  

  return (
    <div>
        <div className="input-area flex  gap-1 justify-center w-full  relative">
            <img src={plus}  className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6  " />
            <input onChange={ (e) => setMessage(e.target.value)} value={message}    type="text" placeholder="ask anything..." className='outline-none border pl-9  py-2 px-2 w-[20rem] rounded-full border-blue-900 ' />
            <button onClick={askWisp}             className=' py-3 px-5 capitalize  bg-blue-900 text-white hover:bg-blue-800 cursor-pointer rounded-full '>ask</button>
          </div>
      
    </div>
  )
}


export default Input
