import React, { useState } from "react";

import search from "../assets/search.png";
import closeOpen from "../assets/sidebar-close-open.png";
import download from "../assets/download.jpg";
import newChat from "../assets/newchat.png";
import image from "../assets/image.png";
import library from "../assets/library.png";
import schedule from "../assets/schedule.png";
import plugins from "../assets/plugins.png";
import more from "../assets/more.png";
import arrow from "../assets/projectArrow.png";
import plus from "../assets/plus.svg";
import chatIcon from "../assets/chats.png";

const Opensidebar = ({
  setStarted,
  setInput,
  createChat,
  setSideBar,
}) => {
  const [showChats, setShowChats] = useState(false);

  return (
    <div className="flex h-screen w-[17%] flex-col border-r border-[#E2E8F0] bg-[#F8FAFC] px-2 select-none">

      {/* ================= TOP ================= */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h3 className="text-[20px] font-semibold tracking-wide text-blue-800">
          wisp{" "}
          <span className="ml-auto font-semibold tracking-wide">
            AI
          </span>
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
            className="h-5 w-5 cursor-pointer opacity-70 hover:opacity-100"
            onClick={() => setSideBar(false)}
          />

        </div>
      </div>


      {/* ================= SIDEBAR CONTENT ================= */}
      <div className="mt-2 flex flex-1 flex-col text-[13px] tracking-wide">

        {/* ---------- MAIN MENU ---------- */}

        {/* New Chat */}
        <button
          className="flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-blue-100"
          onClick={() => {
            setStarted(false);
            setInput("");
            createChat();
          }}
        >
          <img
            src={newChat}
            alt=""
            className="image"
          />
          <p>New chat</p>
        </button>


        {/* Images */}
        <div className="flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-blue-100">
          <img src={image} alt="" className="image" />
          <p>Images</p>
        </div>


        {/* Library */}
        <div className="flex items-center gap-2 rounded-xl px-2 py-2 hover:bg-blue-100">
          <img src={library} alt="" className="image" />
          <p>Library</p>
        </div>


        {/* Scheduled */}
        <div className="flex items-center gap-2 rounded-xl px-2 py-2 hover:bg-blue-100">
          <img src={schedule} alt="" className="image" />
          <p>Scheduled</p>
        </div>


        {/* Plugins */}
        <div className="flex items-center gap-2 rounded-xl px-2 py-2 hover:bg-blue-100">
          <img src={plugins} alt="" className="image" />
          <p>Plugins</p>
        </div>


        {/* More */}
        <div className="flex items-center gap-2 rounded-xl px-2 py-2 hover:bg-blue-100">
          <img src={more} alt="" className="image" />
          <p>More</p>
        </div>


        {/* ---------- PROJECTS ---------- */}

        <div className="group relative mt-6 flex items-center justify-between px-2">

          <div className="flex items-center gap-2">
            <p className="font-semibold tracking-wide opacity-70">
              Projects
            </p>

            <img
              src={arrow}
              alt=""
              className="h-3 w-3 opacity-70"
            />
          </div>

          <img
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


        {/* ---------- CHATS ---------- */}

        <div className="mt-2 flex flex-col">

          <div className="group relative flex items-center px-2">

            <div className="flex items-center gap-2">

              <p className="font-semibold tracking-wide opacity-70">
                <button onClick={() => setShowChats(!showChats)}>
                  Chats
                </button>
              </p>

              <img
                src={arrow}
                alt=""
                className="h-3 w-3 opacity-70"
              />

            </div>


            <img
              src={chatIcon}
              alt="New chat"
              className="
                absolute right-10
                h-4 w-4
                opacity-0 invisible
                transition-opacity duration-200
                group-hover:visible group-hover:opacity-70
                hover:opacity-100
              "
            />

          </div>


          {/* Recent chats will go here */}
          {showChats && (
            <div className="mt-2 px-2">
              {/* Your chat history */}
            </div>
          )}

        </div>

      </div>


      {/* ================= BOTTOM ================= */}
      <div className="flex items-center justify-around gap-3 border-t border-[#E2E8F0] bg-[#F8FAFC] p-3">

        {/* Profile */}
        <img
          src={download}
          alt="Profile"
          className="h-9 w-9 rounded-full"
        />

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