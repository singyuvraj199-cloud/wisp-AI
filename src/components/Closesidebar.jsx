import React from "react";
import wispblue from "../assets/wisp-blue.png";
import pinned from "../assets/pinned.png";
import chatw from "../assets/chatw.png";
import searchw from "../assets/searchw.png";
import recents from "../assets/recents.png";
import closeopen from "../assets/sidebar-close-open.png";

const Closesidebar = ({ sidebar, setSideBar }) => {
  return (
    <div
      className={`main-container select-none flex gap-1 border-r justify-center border-gray-300  transition-[width] duration-900 ease-in-out ${sidebar ? "w-[20%] translate-x-0" : "w-[4%] translate-x-0"}  `}
    >
      <div className="close-sidebar   flex flex-col justify-between items-center px-1 py-1  ">
        <div className="close-sidebar-icons  flex flex-col gap-3">
          <div className="group relative items-center w-7 h-7">
            {/* Logo */}
            <img
              src={wispblue}
              alt=""
              className=" absolute w-7 h-7 inset-0 group-hover:hidden duration-300 transition-opacity   "
            />

            {/* Hover button */}
            <button
              onClick={() => setSideBar(true)}
              className="hidden absolute inset-0 group-hover:flex items-center justify-center group-hover:bg-blue-100 rounded "
            >
              <img src={closeopen} alt="" className=" w-5 h-5" />
            </button>
          </div>

          {/* CLOSED SIDEBAR ICONS  */}
          <div className="closed-icons  gap-3 flex flex-col items-center mt-1">
            <div className="group relative">
              <div>
                <img
                  src={chatw}
                  alt=""
                  className="blueimg    hover:bg-blue-100 "
                />
              </div>
              <p className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity  absolute duration-300 left-10 top-1/2 -translate-y-1/2 whitespace-nowrap bg-blue-700 text-white rounded-3xl tracking-wide font-semibold px-5 py-2 capitalize text-xs ">
                new chat
              </p>
            </div>

            <div className="group relative">
              <div>
                <img
                  src={searchw}
                  alt=""
                  className="blueimg   hover:bg-blue-100"
                />
                <p className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity  absolute duration-300 left-10 top-1/2 -translate-y-1/2 whitespace-nowrap bg-blue-700 text-white rounded-3xl tracking-wide font-semibold px-5 py-2 capitalize text-xs ">
                  search
                </p>
              </div>
            </div>

            <div className="group relative">
              <div>
                <img
                  src={recents}
                  alt=""
                  className="blueimg  hover:bg-blue-100"
                />
              </div>
              <p className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity  absolute duration-300 left-10 top-1/2 -translate-y-1/2 whitespace-nowrap bg-blue-700 text-white rounded-3xl tracking-wide px-5 font-semibold py-2 capitalize text-xs ">
                pinned
              </p>
            </div>

            <div className="group relative">
              <div>
                <img
                  src={pinned}
                  alt=""
                  className="blueimg  hover:bg-blue-100"
                />
              </div>
              <p className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity  absolute duration-300 left-10 top-1/2 -translate-y-1/2 whitespace-nowrap bg-blue-700 text-white rounded-3xl tracking-wide px-5 py-2 font-semibold capitalize text-xs ">
                recents
              </p>
            </div>
          </div>
        </div>

        <div className="account-image  mb-3">
          <img src={recents} alt="" className="rounded-full w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Closesidebar;
