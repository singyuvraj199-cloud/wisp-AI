import React, { useActionState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { useState } from "react";
import { getAIResponse } from "./api/wisp";
import Project from "./components/Projects";

const App = () => {
  const [started, setStarted] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);


  {/*PROJECT MENU (DELETE AND RENAME BUTTON) */}
  const[activeMenu, setActiveMenu] = useState(null);

  { /*WISP-PROJECT SECTION */}
  const [displayProject, setDisplayProject] = useState(false);
  const [showProject, setShowProject] = useState(false);
  
  const [projectName, setProjectName] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("wisp-project")) || [];

      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wisp-project", JSON.stringify(projectName));
  }, [projectName]);
  const [project, setProject] = useState("");
  const createProject = () => {
    if (!project.trim()) return;

    const newProject = {
      id: crypto.randomUUID(),
      name: project.trim(),
    };

    setProjectName((prev) => [...prev, newProject]);
    setProject("");
    setShowProject(false);
    setDisplayProject(true);
  };

  {
    /*RECENT CHAT SAVED SECTION */
  }
  const [recentChats, setRecentChats] = useState(() => {
    const saved = localStorage.getItem("wisp-recents");
    return saved ? JSON.parse(saved) : [];
  });

  const [currentChatId, setCurrentChatId] = useState(() => {
    return localStorage.getItem("wisp-current-id");
  });
  useEffect(() => {
    if (currentChatId) {
      localStorage.setItem("wisp-current-id", currentChatId);
    } else {
      localStorage.removeItem("wisp-current-id");
    }
  }, [currentChatId]);

  {
    /*MESSAGE SECTION */
  }
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("wisp-chat");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wisp-chat", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("wisp-recents", JSON.stringify(recentChats));
  }, [recentChats]);

  const sendMessage = async () => {
    console.log(
      "started:",
      started,
      "currentChatId:",
      currentChatId,
      "isNewChat:",
      !currentChatId || !started,
    );

    if (!input.trim()) return;
    const userMessage = input;

    const isNewChat = !currentChatId;

    if (isNewChat) {
      let title = userMessage;
      if (userMessage.length > 30) {
        title = userMessage.slice(0, 30) + "...";
      }
      const newId = crypto.randomUUID();
      setRecentChats((prev) => [{ id: newId, title: title }, ...prev]);
      setCurrentChatId(newId);
    }

    const newUserMessage = {
      role: "user",
      content: userMessage,
      id: crypto.randomUUID(),
    };

    if (isNewChat) {
      setMessages([newUserMessage]);
    } else {
      setMessages((prev) => [...prev, newUserMessage]);
    }
    setInput("");
    setLoading(true);
    try {
      const data = await getAIResponse(userMessage);
      if (data.error) {
        console.log(data.error);
        return;
      }
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: data.reply, id: crypto.randomUUID() },
      ]);
    } catch (error) {
      console.error("AI response error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex gap-5 h-screen w-full">
        <Sidebar
          setStarted={setStarted}
          setInput={setInput}
          input={input}
          recentChats={recentChats}
          setRecentChats={setRecentChats}
          messages={messages}
          setMessages={setMessages}
          setCurrentChatId={setCurrentChatId}
          projectName={projectName}
          setProjectName={setProjectName}
          project={project}
          setProject={setProject}
          showProject={showProject}
          setShowProject={setShowProject}
          displayProject={displayProject}
          setDisplayProject={setDisplayProject}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        <Hero
          started={started}
          setStarted={setStarted}
          setInput={setInput}
          input={input}
          sendMessage={sendMessage}
          messages={messages}
          loading={loading}
          setLoading={setLoading}
        />
        <Project
          
         
          projectName={projectName}
          setProjectName={setProjectName}
          createProject={createProject}
          setProject={setProject}
          project={project}
          setShowProject={setShowProject}
          showProject={showProject}
           displayProject={displayProject}
          setDisplayProject={setDisplayProject}
        />
      </div>
    </>
  );
};

export default App;
