
import Message from "./components/message";
import React, { useEffect, useRef } from "react";


const Chat = ({messages,loading, setLoading}) => {
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="h-full p-2 flex flex-col overflow-y-auto overflow-hidden justify-between scrollbar-none">
      
        <div className="  flex self-end w-2xl flex-col gap-8" >
            
            {messages.map((msg, index) => (
              <Message
                key={index}
                role={msg.role}
                content={msg.content}
              />
            ))}  
      
            {loading &&(
              
                 <div className="flex items-center gap-1 pl-3">
                   <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0ms]">
                    </span> <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:150ms]">
                      </span> <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:300ms]"></span>
                       </div>
            
            )} 
        </div>
        
  
<div ref={chatEndRef}></div>
        <div className="wisp-warning mb-3 mt-4 ">
          <p className="font-semibold text-xs text-gray-500 flex justify-center " 
          >Wisp can also make mistakes. Check important info...</p>
        </div>
         
    </div>
  );
};

export default Chat;
