import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import { getAIResponse } from './api/wisp';

const App = () => {
  const [started, setStarted] = useState(false)
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([])

// STORE RECENT CHAT 
  const [chats, setChats] = useState(() => {
  const savedChats = localStorage.getItem("wisp-chat");

  return savedChats ? JSON.parse(savedChats) : [];
});

  
  const [currentChatId, setCurrentChatId] = useState(null)


  const openChat = (id) =>{
      const chat = chats.find((chat) => chat.id === id)
      if(!chat) return;

       setCurrentChatId(id);
       setMessages(chat.messages);
       setStarted(true);

  }
  


// SAVE DATA IN LOCAL STORAGE
useEffect(() => {
  localStorage.setItem("wisp-chat", JSON.stringify(chats));
}, [chats]);

const createChat = () => {
  const newChat = {
    id: crypto.randomUUID(),
    title: "New chat",
    messages: [],
  };

  setChats((prev) => [...prev, newChat]);
  setCurrentChatId(newChat.id);
  setMessages([]);
  setStarted(false)
};


  const sendMessage = async (userMessage) => {
  const updated = [...messages, userMessage];
  setMessages(updated);

  try {
    const reply = await getAIResponse(updated);

    const newMessages = [
      ...updated,
      {
        id: Date.now(),
        role: "ai",
        content: reply,
      },
    ];

    setMessages(newMessages);

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === currentChatId
          ? {
              ...chat,
              title:
                chat.messages.length === 0
                  ? userMessage.content
                  : chat.title,
              messages: newMessages,
            }
          : chat
      )
    );
  } catch (error) {
    console.error("AI response error:", error);

    const errorMessage = {
      id: Date.now(),
      role: "ai",
      content: "Wisp is temporarily unavailable. Please try again later.",
    };

    setMessages([...updated, errorMessage]);
  }
};



  return (
    <>
    
      <div className='flex gap-5 h-screen'>
        <Sidebar setStarted={setStarted}
           setInput={setInput} input={input}
           chats={chats}
           openChat={openChat}
           createChat={createChat}
        />
        <Hero started={started} setStarted={setStarted}
          setInput={setInput} input={input}
          messages={messages} sendMessage={sendMessage}
        />
      </div>
    </>

    
  )
}

export default App