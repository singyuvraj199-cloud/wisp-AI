import React from 'react'
import plus from '../assets/plus.svg';







const Input = () => {
  return (
    <div>
        <div className="input-area flex  gap-1 justify-center w-full  relative">
            <img src={plus}  className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6  " />
            <input type="text" placeholder="ask anything..." className='outline-none border pl-9  py-2 px-2 w-[20rem] rounded-full border-blue-900 ' />
            <button className=' py-3 px-5 capitalize  bg-blue-900 text-white hover:bg-blue-800 cursor-pointer rounded-full '>ask</button>
          </div>
      
    </div>
  )
}

export default Input
