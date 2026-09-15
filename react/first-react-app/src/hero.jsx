import React from 'react'

const Hero = () => {
  return (
    <div className="grid grid-cols-3  gap-6 px-10 h-screen">
      <div className=' h-[70vh] rounded-xl col-span-1 flex flex-col justify-between items-center p-9'>
        <h1 className=' [text-shadow:1px_1px_2px_gray] font-extrabold text-4xl italic leading-relaxed  capitalize '>welcome to<br /><span className='text-blue-700'>yuvraj's</span> <br /> world</h1>
        <button className='bg-blue-700 text-white px-15 tracking-wider cursor-pointer py-2 rounded-2xl'>satisfied</button>
      </div>

      <div className= ' h-[70vh] col-span-2 rounded-xl grid grid-cols-2 p-6 gap-4'>
        <img src="https://images.unsplash.com/photo-1773332598414-44a45e364d85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" className='object-cover w-full h-full rounded-2xl ' />
        <img src="https://images.unsplash.com/photo-1773332611528-566f16120979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-full h-full rounded-2xl'/>
      </div>
    </div>
  )
}

export default Hero
