
import upgrade from "../assets/upgrade.png";
import share from "../assets/share.png";
import more from "../assets/more.png";
import temporary from "../assets/temporary.png";
import plus from "../assets/plus.svg";
import voice from "../assets/voice.png";
import Chat from './Chat';


const Hero = ({started,setStarted, input, setInput , messages, sendMessage} ) => {

 

  const handlekey = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setStarted(true);
     const newMessage = {

      id: Date.now(),
      role: "user",
      content: input,
     };
      sendMessage(newMessage);
      setInput("");

    }
  };

  return (
    <>
      {started ? (
        // ---------- CHAT LAYOUT (after first message) ----------
        <div className="w-full flex-1 min-h-0 flex flex-col items-center">
          <div className="flex w-full justify-end items-start py-1 cursor-default px-4 ml-auto">
            <div className="flex items-center gap-3">
              <span className=" flex gap-1 items-center px-2 py-1 hover:bg-blue-100 rounded">
                <img src={upgrade} className="h-4 w-4 select-none" />

                <p className="text-[13px] font-semibold text-blue-800 capitalize select-none">
                  upgrade
                </p>
              </span>

              <span
                className="animate-appear  flex gap-1 px-3 items-center py-1 hover:backdrop-brightness-85 rounded "
                style={{ animationDelay: "300ms" }}
              >
                <img src={share} alt="" className="h-4 w-4" />

                <p className="capitalize font-semibold text-[13px]">share</p>
              </span>

              <div
                className="relative group flex items-center  animate-appear hover:backdrop-brightness-85 rounded-full"
                style={{ animationDelay: "500ms" }}
              >
                <button className="">
                  <img src={more} alt="" className="w-7 h-7 p-1 " />
                </button>

                <p
                  className="capitalize text-xs absolute top-full mt-2 right-0
                  opacity-0 invisible whitespace-nowrap tracking-wide px-4 py-2
                  group-hover:opacity-100 duration-200 delay-300 transition-opacity
                  bg-blue-700 text-white rounded-2xl group-hover:visible font-semibold"
                >
                  more
                </p>
              </div>
            </div>
          </div>




          {/* CHAT LAYOUT */}
          <Chat 
          input={input}
          setInput={setInput}
          messages={messages}
          sendMessage={sendMessage}
          />






          <div className="relative mb-8 mt-auto">
            <input
              className="w-2xl h-12 pl-10 py-2 bg-white border shadow-sm border-[#B8C2D1] select-none outline-none rounded-3xl focus:border-blue-600"
              type="text"
              placeholder="ask anything"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handlekey}
            />

            {/* plus sign and hover effect */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 group flex items-center justify-center">
              <div className="relative group">
                <button className="flex items-center">
                  <img
                    src={plus}
                    className="p-1 hover:backdrop-brightness-85 rounded-full select-none"
                  />
                </button>
              </div>
              <p
                className="absolute top-full border bg-blue-700 rounded-3xl tracking-wide text-white text-xs px-3 capitalize w-fit py-2
                opacity-0 invisible group-hover:opacity-100 duration-200 delay-300 transition-opacity group-hover:visible text-nowrap font-semibold"
              >
                add files and more
              </p>
            </div>

            {/* voice button right */}
            <div className="absolute right-2 bottom-5 top-1/2 -translate-y-1/2 group flex items-center justify-center">
              <div className="relative group">
                <button className="flex items-center">
                  <img
                    src={voice}
                    className="p-1 w-8 h-8 hover:backdrop-brightness-85 rounded-full select-none"
                  />
                </button>
              </div>
              <p
                className="absolute top-5 border bg-blue-700 rounded-3xl tracking-wide text-white text-xs px-4 capitalize w-fit py-2
                opacity-0 invisible group-hover:opacity-100 duration-200 delay-300 transition-opacity group-hover:visible text-nowrap font-semibold"
              >
                start voice
              </p>
            </div>
          </div>
        </div>
      ) : (





        // ---------- WELCOME LAYOUT (before first message) ----------

        <div className="w-full flex-1 relative">
          <div className="flex w-full justify-end gap-4 items-center py-1 cursor-default px-4 ml-auto">
            <div className="flex items-center gap-3">
              <span className="flex gap-1 items-center px-2 py-1 hover:bg-blue-100 rounded">
                <img src={upgrade} className="h-4 w-4 select-none" />
                <p className="text-[13px] font-semibold text-blue-800 capitalize select-none">
                  upgrade
                </p>
              </span>
            </div>

            <div className="relative group flex items-center ">
              <button>
                <img
                  src={temporary}
                  alt=""
                  className="w-6 h-6 p-1  hover:backdrop-brightness-85 rounded-full  "
                />
              </button>

              <p
                className="capitalize text-xs absolute top-full  mt-2 right-0 
          opacity-0
            invisible whitespace-nowrap tracking-wide px-3 py-2
          group-hover:opacity-100 duration-200 delay-300 transition-opacity
           bg-blue-700 text-white rounded-2xl  group-hover:visible font-semibold
           "
              >
                temporary chats
              </p>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center gap-6">
              <p className="capitalize text-[22px] whitespace-nowrap tracking-wide cursor-default select-none text-blue-800">
                "got something on your mind? iam curious to hear it..."
              </p>

              <div className="relative">
                <input
                  className=" w-2xl h-12 pl-10 py-2 bg-white border border-[#B8C2D1] select-none outline-none rounded-3xl focus:border-blue-600"
                  type="text"
                  placeholder="ask anything"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handlekey}
                />

                {/* plus sign and hover effect */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 group flex items-center justify-center">
                  <div className="relative group">
                    <button className="flex items-center">
                      <img
                        src={plus}
                        className="p-1 hover:backdrop-brightness-85 rounded-full select-none"
                      />
                    </button>
                  </div>
                  <p
                    className="absolute top-full border bg-blue-700 rounded-3xl tracking-wide text-white text-xs px-3 capitalize w-fit py-2
                    opacity-0 invisible group-hover:opacity-100 duration-200 delay-300 transition-opacity group-hover:visible text-nowrap font-semibold"
                  >
                    add files and more
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-2 mt-8.5 top-1/2 -translate-y-1/2 group flex items-center justify-center">
              <div className="relative group">
                <button>
                  <img
                    src={voice}
                    className="p-1 w-8 h-8 hover:backdrop-brightness-85 rounded-full select-none"
                  />
                </button>
              </div>
              <p
                className="absolute top-full border bg-blue-700 rounded-3xl tracking-wide text-white text-xs px-3 capitalize w-fit py-2
                    opacity-0 invisible group-hover:opacity-100 duration-200 delay-300 transition-opacity group-hover:visible text-nowrap font-semibold"
              >
                start voice
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
