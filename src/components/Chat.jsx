import React, { useState } from "react";

const Chat = () => {
  return (
    <div className="chat-container  w-2xl flex flex-col h-screen justify-between overflow-y-auto scrollbar-none ">
      <div className="chat-messages  flex flex-col flex-1 gap-10  ">
        <div className="user-message  self-end py-2 px-6 bg-blue-100 border border-transparent rounded-3xl ">
          {/* user */}
          hey wiap how are you?
        </div>
      </div>

      <div className="wisp-warning mt-auto self-center mb-4 text-gray-500 text-[12px] tracking-wide font-bold select-none cursor-default ">
        <p>Wisp can also make mistake. check important info...</p>
      </div>
    </div>
  );
};

export default Chat;
