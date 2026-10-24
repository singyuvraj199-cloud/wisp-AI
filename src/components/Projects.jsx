import React from "react";
import close from "../assets/close.png";

const Project = ({
  showProject,
  setShowProject,
  projectName,
  createProject,
  setProject,
  project,
}) => {
  return (
    <>
      {showProject && (
        <div
          onClick={() => {
            setShowProject(false);
          }}
          className="fixed inset-0 z-50  project-container  h-full w-full  flex justify-center items-center  bg-black/5 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[450px] h-65 p-3 border border-transparent rounded-xl bg-white"
          >
            <div className="flex justify-between">
              <h2 className="text-[18px]">Create project</h2>
              <span>
                <img
                  src={close}
                  onClick={() => {
                    setShowProject(false);
                  }}
                  alt=""
                />
              </span>
            </div>
            <div className="mt-3 text-[14px]">
              <p className="">Project name</p>
              <input
                type="text"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder="eg. doctor"
                className="mt-2 w-full border-gray-400 p-2 border rounded-xl focus:outline-none focus:border-blue-700"
              />
            </div>

            <div className="mt-5 bg-gray-200 rounded-xl shadow-sm">
              <p className="text-[13px] p-2  text-gray-600">
                Projects keep chats, files, and custom instructions in one
                place. Use them for ongoing work, or just to keep things tidy.
              </p>
            </div>

            <div className="mt-4 ml-77 w-full">
              <button
                onClick={createProject}
                disabled={!project.trim()}
                className={` text-[14px] border border-transparent rounded-2xl px-3 py-1 capitalize bg-blue-600 text-[#FAFAF9] font-semibold
          ${project.trim() === "" ? "opacity-50" : "opacity-100"}
          `}
              >
                create project
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
