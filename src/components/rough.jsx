{/*

const Hero = () => {
  const [input, setInput] = useState("");
  return (
    <div className="w-full h-screen relative ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="  flex flex-col items-center gap-8">
          <p className="capitalize text-2xl whitespace-nowrap tracking-wide cursor-default">
            "got something on your mind? iam curious to hear it..."
          </p>
          <div className="relative  ">
            <input
              className="w-xl h-12 pl-10 py-2 bg-white border border-[#B8C2D1] select-none outline-none rounded-3xl focus:border-blue-600  "
              type="text"
              placeholder="ask anything"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            {/* plus sign and hover effect 
            <div className="absolute left-2 top-1/2 -translate-y-1/2 group flex items-center  justify-center">
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
        opacity-0 invisible group-hover:opacity-100 duration-200 delay-300 transition-opacity group-hover:visible text-nowrap font-semibold
        "
              >
                add files and more
              </p>
            </div>
            </div>
            
          
        </div>
        {/*voice button right *
         <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center mr-7 mt-8 p-2 hover:backdrop-brightness-85 rounded-full cursor-default" >
              <button>
                <img src={voice} alt="" />
              </button>
            </div>
      </div>

      {input.length === 0 && (
        <div className="flex w-full justify-end items-start py-1 cursor-default px-4">
          <div className="flex items-center gap-4 ">
            <span className="flex gap-1 items-center px-2 py-1 hover:bg-blue-100 rounded">
              <img src={upgrade} className="h-4 w-4 select-none" />
              <p className="text-[13px] font-semibold text-blue-800 capitalize select-none">
                upgrade
              </p>
            </span>
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
        </div>
      )}
    </div>
  );
};
