import React, { useState, useRef, useEffect } from 'react'
import Message from "./Message"


const Chat = ({messages}) => {

const chatref = useRef(null)
useEffect(()=>{
    chatref.current?.scrollTo({
        top: chatref.current.scrollHeight,
        behavior: "smooth"
    })
},[messages])

  return (
    <div flex
    ref={chatref}
    className=' p-1 overflow-y-auto 
    
    '>
        {/* USER MESSAGE */}
         <div className='  flex flex-1 min-h-0  w-2xl flex-col  justify-end gap-10 text-[15px] '>
     
   {/* messages */}
   {messages.map((message)=>(
    <Message
    key={message.id}
    role={message.role}
    content={message.content}

    
    />
   ))}
        
    
       </div>
       <div className='flex flex-1 self-center w-fit mx-auto'>
       <p className='text-[12px] flex text-gray-600 font-semibold mb-7 tracking-wide '>
        Wisp AI can make mistakes. Check important information.
        
       </p>
       </div>
    </div>
    

  )
}

export default Chat
