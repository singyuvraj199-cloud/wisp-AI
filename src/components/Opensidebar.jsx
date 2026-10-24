import React, { useEffect, useRef, useState } from "react";

import search from "../assets/search.png";
import closeOpen from "../assets/sidebar-close-open.png";
import download from "../assets/download.jpg";
import image from "../assets/image.png";
import library from "../assets/library.png";
import schedule from "../assets/schedule.png";
import plugins from "../assets/plugins.png";
import more from "../assets/more.png";
import arrow from "../assets/projectArrow.png";
import plus from "../assets/plus.svg";
import chat from "../assets/chatw.png";
import chatIcon from "../assets/chats.png";
import Project from "./Projects";
import dot from "../assets/dot.png";
import proimg from "../assets/projecticon.png";

const Opensidebar = ({
  setStarted,
  setInput,
  createChat,
  setSideBar,
  sidebar,
  setMessages,
  messages,
  recentChats,
  setRecentChats,
  setCurrentChatId,

  projectName,
  setProjectName,
  project,
  setProject,
  setShowProject,
  displayProject,
  setDisplayProject,
  activeMenu,
  setActiveMenu,
  rename,
  setRename,
  renamingId,
  setRenamingId,
}) => {
  const [showRecents, setShowRecents] = useState(true);

  {
    /*CLOSE PROJECT MENU */
  }
  useEffect(() => {
    const closeMenu = () => setActiveMenu(null);
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [setActiveMenu]);

  {
    /*CLOSE RENAMING */
  }
  useEffect(() => {
    const closeRename = () => setRenamingId(null);
    setRename("");

    document.addEventListener("click", closeRename);

    return () => {
      removeEventListener("click", closeRename);
    };
  }, [setRenamingId, setRename]);

  const deleteProject = (id) => {
    setProjectName((prev) => prev.filter((project) => project.id !== id));
  };

  const reNameProject = (id, newName) => {
    if (!newName.trim()) return;

    setProjectName((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, name: newName } : project,
      ),
    );
    setRenamingId(null);
    setRename("");
  };
  const handleName = (project) => {
    setRenamingId(project.id);
    setRename(project.name);
  };
  return (
    <div className="flex h-screen w-[17%] flex-col border-r border-[#E2E8F0] bg-[#F8FAFC] px-2 select-none ">
      {/* ================= TOP ================= */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h3 className="text-[20px] font-semibold tracking-wide text-blue-700">
          wisp <span className="ml-auto font-semibold tracking-wide">AI</span>
        </h3>

        {/* Top Icons */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <img
            src={search}
            alt="Search"
            className="h-5 w-5 opacity-70 hover:opacity-100"
          />

          {/* Close Sidebar */}
          <img
            src={closeOpen}
            alt="Close sidebar"
            className="h-5 w-5  opacity-70 hover:opacity-100"
            onClick={() => setSideBar(false)}
          />
        </div>
      </div>

      <div className="scroll-sidebar  overflow-y-auto">
        {/* ================= SIDEBAR CONTENT ================= */}
        <div className="mt-1 flex flex-1 flex-col text-[12.5px]  tracking-wide">
          {/* ---------- MAIN MENU ---------- */}

          {/* New Chat */}
          <button
            className="flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-blue-100"
            onClick={() => {
              setStarted(false);
              setInput("");
              setMessages([]);
              setCurrentChatId(null);
            }}
          >
            <img src={chat} alt="" className="image" />
            <p>New chat</p>
          </button>

          {/* Images */}
          <div className="flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-blue-100">
            <img src={image} alt="" className="image" />
            <p>Images</p>
          </div>

          {/* Library */}
          <div className="flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-blue-100">
            <img src={library} alt="" className="image" />
            <p>Library</p>
          </div>

          {/* Scheduled */}
          <div className="flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-blue-100">
            <img src={schedule} alt="" className="image" />
            <p>Scheduled</p>
          </div>

          {/* Plugins */}
          <div className="flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-blue-100">
            <img src={plugins} alt="" className="image" />
            <p>Plugins</p>
          </div>

          {/* More */}
          <div className="flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-blue-100">
            <img src={more} alt="" className="image" />
            <p>More</p>
          </div>

          {/* ---------- PROJECTS ---------- */}

          <div className="group relative mt-6 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <p
                onClick={() => {
                  setDisplayProject(!displayProject);
                }}
                className="font-semibold tracking-wide opacity-60"
              >
                Projects
              </p>

              <img
                src={arrow}
                alt=""
                className="h-3 w-3 opacity-70"
                onClick={() => {
                  setDisplayProject(!displayProject);
                }}
              />
            </div>

            <img
              onClick={() => {
                setShowProject(true);
              }}
              src={plus}
              alt="Add project"
              className="
              absolute right-10
              h-5 w-5
              opacity-0 invisible
              transition-opacity duration-200
              group-hover:visible group-hover:opacity-70
              hover:opacity-100
            "
            />
          </div>

          {/*PROJECT SECTION*/}

          {displayProject && (
            <div className="  ">
              {projectName.map((project) => (
                <div
                  className="hover:bg-blue-100 px-2.5  group relative py-1 rounded-2xl flex items-center w-full font-semibold text-gray-700 "
                  key={project.id}
                >
                  <img src={proimg} alt="" className="w-4 h-4 mr-1" />{" "}
                  {renamingId === project.id ? (
                    <input
                      type="text"
                      autoFocus
                      value={rename}
                      onChange={(e) => setRename(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          reNameProject(project.id, rename);
                        }

                        if (e.key === "Escape") {
                          setRenamingId(null);
                          setRename("");
                        }
                      }}
                      className="w-full min-w-0 bg-white border border-blue-400 rounded px-1 outline-none"
                    />
                  ) : (
                    <span className="truncate">{project.name}</span>
                  )}
                  <span className="ml-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenu(
                          activeMenu === project.id ? null : project.id,
                        );
                      }}
                    >
                      <img
                        src={dot}
                        alt=""
                        className="w-5.5 h-5.5 opacity-50 invisible  group-hover:visible  group-hover:opacity-50 hover:opacity-100 ml-auto  "
                      />
                    </button>
                  </span>
                  {activeMenu === project.id && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute right-0 top-full z-50 mt-1 w-36 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleName(project);
                          setRenamingId(project.id);
                          setRename(project.name);
                          setActiveMenu(null);
                        }}
                        className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100"
                      >
                        Rename
                      </button>

                      <button
                        onClick={() => {
                          deleteProject(project.id);
                        }}
                        className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ---------- CHATS ---------- */}

          <div className="mt-2 flex flex-col">
            <div className="group relative flex items-center px-2">
              <div className="flex items-center gap-2">
                <p className="font-semibold tracking-wide opacity-60">
                  <button
                    onClick={() => {
                      setShowRecents(!showRecents);
                    }}
                  >
                    Chats
                  </button>
                </p>

                <img
                  src={arrow}
                  alt=""
                  className="h-3 w-3 opacity-70"
                  onClick={() => {
                    setShowRecents(!showRecents);
                  }}
                />
              </div>

              <img
                src={chatIcon}
                alt="New chat"
                className="
                absolute right-10
                h-3.5 w-3.5
                opacity-0 invisible
                transition-opacity duration-200
                group-hover:visible group-hover:opacity-70
                hover:opacity-100
              "
              />
            </div>

            {/* Recent chats will go here */}
            {showRecents && (
              <div className="recents-chats  ">
                {recentChats.map((chat) => (
                  <div
                    key={chat.id}
                    className="hover:bg-blue-100 px-2 py-1 rounded-2xl"
                  >
                    {chat.title}{" "}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="flex items-center justify-around gap-3 border-t border-[#E2E8F0] bg-[#F8FAFC] p-3 mt-auto">
        {/* Profile */}
        <img src={download} alt="Profile" className="h-9 w-9 rounded-full" />

        {/* Name */}
        <div>
          <p>Yuvraj</p>
        </div>

        {/* Menu */}
        <select className="bg-transparent opacity-70 outline-none">
          <option value="free">. Free</option>
          <option value="settings">Settings</option>
          <option value="language">Language</option>
          <option value="help">Get help</option>
          <option value="upgrade">Upgrade plan</option>
          <option value="logout">Logout</option>
        </select>
      </div>
    </div>
  );
};

export default Opensidebar;
