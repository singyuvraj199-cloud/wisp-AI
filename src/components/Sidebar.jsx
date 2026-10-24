import { useState } from "react";
import Closesidebar from "./Closesidebar";
import Opensidebar from "./Opensidebar";

const Sidebar = ({
  started,
  setStarted,
  input,
  setInput,
  messages,
  setMessages,
  recentChats,
  setRecentChats,
  setCurrentChatId,
  projectName,
  setProjectName,
  project,
  setProject,
  setShowProject,
  showProject,
  displayProject,
  setDisplayProject,
  activeMenu,
  setActiveMenu,
  rename,
  setRename,
  renamingId,
  setRenamingId,

}) => {
  const [sidebar, setSideBar] = useState(true);
  return (
    <>
      {sidebar ? (
        <Opensidebar
          sidebar={sidebar}
          setSideBar={setSideBar}
          input={input}
          setStarted={setStarted}
          setInput={setInput}
          started={started}
          messages={messages}
          setMessages={setMessages}
          recentChats={recentChats}
          setRecentsChats={setRecentChats}
          setCurrentChatId={setCurrentChatId}
          setShowProject={setShowProject}
          projectName={projectName}
          setProjectName={setProjectName}
          project={project}
          setProject={setProject}
          showProject={showProject}
           displayProject={displayProject}
          setDisplayProject={setDisplayProject}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          rename={rename}
          setRename={setRename}
          renamingId={renamingId}
          setRenamingId={setRenamingId}
    
        />
      ) : (
        <Closesidebar
          sidebar={sidebar}
          setSideBar={setSideBar}
          input={input}
          setInput={setInput}
          started={started}
        />
      )}
    </>
  );
};

export default Sidebar;
