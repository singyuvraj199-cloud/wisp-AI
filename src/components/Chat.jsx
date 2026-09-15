import React, { useState, useRef } from 'react'


const Chat = () => {
  return (
    <div className=' p-1 overflow-y-auto'>
        {/* USER MESSAGE */}
         <div className='  flex flex-1 min-h-0  w-2xl flex-col  justify-end gap-10 '>
      <div className=' self-end flex  flex-col gap-5'>
        <p className='border border-transparent rounded-2xl bg-blue-50 px-4 py-2 shadow-sm '>
            hello wisp this is me?
        </p>
        <p className='border border-transparent rounded-2xl bg-blue-50 px-4 py-2 shadow-sm '>
            hello wisp this is me?
        </p>
        <p className='border border-transparent rounded-2xl bg-blue-50 px-4 py-2 shadow-sm '>
            hello wisp this is me?
        </p>
        <p className='border border-transparent rounded-2xl bg-blue-50 px-4 py-2 shadow-sm '>
            hello wisp this is me?
        </p>
        <p className='border border-transparent rounded-2xl bg-blue-50 px-4 py-2 shadow-sm '>
            hello wisp this is me?
        </p>
        <p className='border border-transparent rounded-2xl bg-blue-50 px-4 py-2 shadow-sm '>
            hello wisp this is me?
        </p>
        <p className='border border-transparent rounded-2xl bg-blue-50 px-4 py-2 shadow-sm '>
            hello wisp this is me?
        </p>
        
        
      </div>
      



    {/*AI MESSAGE  */}
    <div className=' self-start mt-4 flex flex-col  '>
        <div className='flex flex-col gap-5'>
    
        <p>
            hi yuvraj how are you.
        </p>
        <p>
            hi yuvraj how are you.
        </p>
        <p>
            hi yuvraj how are you.
        </p>
        <p>
            hi yuvraj how are you.
        </p>
    
       </div>
        
        <p>
            hi yuvraj how are you.
        </p>
    </div>
    </div>
</div>


  )
}

export default Chat
