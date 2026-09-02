import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-7 border-b border-gray-500">
        <h1 className='text-3xl uppercase font-bold ml-20 text-blue-700'>raj</h1>
        <div className="flex ">
            <ul className='flex gap-15 text-xm cursor-pointer font-medium mr-20 uppercase'>
                <li><a href="home"></a>home</li>
                <li><a href="service"></a>about</li>
                <li><a href="con"></a>service</li>
                <li><a href="about"></a>contact</li>
                <li><a href="mail"></a>email</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
