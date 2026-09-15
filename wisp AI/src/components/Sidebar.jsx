import React from "react";
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
import chats from "../assets/chats.png";
import searchblue from "../assets/searchblue.svg";

const Sidebar = ({ started, setStarted, input, setInput }) => {
  return (
    <div className=" flex h-screen flex-col  px-2  justify-between cursor-default select-none w-[20%] border-r border-[#E2E8F0]/100  ">
      {/*top sidebar  */}

      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-semibold tracking-wide text-blue-800">
          wisp{" "}
          <span className="capitalize ml-auto font-semibold tracking-wide">
            AI
          </span>
        </h3>

        <button className="flex gap-5 items-center ">
          <img
            src={search}
            alt="search"
            className="opacity-70  w-5 h-5 hover:opacity-100 "
          />
          <img
            src={closeOpen}
            alt="close-open-sidebar"
            className="opacity-70  w-5 h-5 hover:opacity-100"
          />
        </button>
      </div>

      {/*sidebat content */}
      <div className="text-[13px] mb-auto mt-2 tracking-wide  flex flex-col capitalize  ">
        <button
          onClick={() => {
            setStarted(false);
            setInput("");
          }}
        >
          <span className="flex gap-2 px-2 py-2 items-center hover:bg-blue-100 rounded-xl ">
            <img src={newChat} alt="" className="image" />
            <p>new chat</p>
          </span>
        </button>
        <span className="flex gap-2 px-2  py-2 items-center  hover:bg-blue-100 rounded-xl  ">
          <img src={image} alt="" className="image" />
          <p>images</p>
        </span>
        <span className="flex  gap-2  px-2 py-2  items-center  hover:bg-blue-100 rounded-xl  ">
          <img src={library} alt="" className="image" />
          <p>library</p>
        </span>
        <span className="flex gap-2 px-2 py-2  items-center  hover:bg-blue-100 rounded-xl ">
          <img src={schedule} alt="" className="image" />
          <p>scheduled</p>
        </span>
        <span className="flex gap-2 px-2 py-2  items-center  hover:bg-blue-100 rounded-xl ">
          <img src={plugins} alt="" className="image" />
          <p>plugins</p>
        </span>
        <span className="flex gap-2 px-2 py-2  items-center  hover:bg-blue-100 rounded-xl ">
          <img src={more} alt="" className="image" />
          <p>more</p>
        </span>

        {/* section-project sidebar */}

        <div className="mt-6 flex justify-between items-center group relative px-2">
          <div className="flex items-center gap-2 ">
            <p className="capitalize font-semibold tracking-wide opacity-70">
              projects
            </p>
            <img src={arrow} alt="" className="h-3 w-3 opacity-70" />
          </div>
          <img
            src={plus}
            alt=""
            className="h-5 w-5 opacity-0   invisible group-hover:opacity-70 group-hover:visible transition-opacity duration-200 absolute right-10 hover:opacity-100"
          />
        </div>
        {/*section chat sidebar */}

        <div className="flex group mt-4 relative px-2">
          <div className="flex items-center gap-2">
            <p className="capitalize font-semibold tracking-wide opacity-70">
              chats
            </p>
            <img src={arrow} alt="" className="h-3 w-3 opacity-70" />
          </div>

          <img
            src={chats}
            alt=""
            className="h-4 w-4 opacity-0   invisible group-hover:opacity-70 group-hover:visible transition-opacity duration-200 absolute right-10 hover:opacity-100"
          />
        </div>
      </div>

      {/*bottom sidebar */}
      <div className="flex items-center justify-around border-t gap-3 p-3 border-[#E2E8F0]/100">
        <img src={download} alt="y" className="h-9 w-9 rounded-full" />
        <div>
          <p className="capitalize items-center">yuvraj</p>
        </div>
        <select className="opacity-70">
          <option value="free">. free</option>
          <option value="">setting</option>
          <option value="">language</option>
          <option value="">get help</option>
          <option value="">upgrade plan</option>
          <option value="">logout</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
