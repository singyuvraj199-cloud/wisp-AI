import React from 'react'
const Chat = ({messages}) => {
  return (
    <div className="z-0 messages flex flex-col gap-5 p-3 overflow-y-auto   w-[60%] h-[350px]">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={
            msg.role === "user"
              ? "user-msg self-end max-w-[85%] bg-gray-300 px-4 py-3 rounded-2xl rounded-br-sm"
              : "ai-msg self-start max-w-[85%] bg-gray-300 px-4 py-3 rounded-2xl rounded-bl-sm"
          }
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
}
    

export default Chat
