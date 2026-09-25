import React from 'react'
import Opensidebar from './Opensidebar'
import Closesidebar from './Closesidebar'
import { useState } from 'react'


const Sidebar = ({  setInput, input}) => {

  const [sidebar, setSideBar] = useState(true)
  return (
    <>
    {sidebar ?(
      <Opensidebar
       setSideBar={setSideBar}
      setInput={setInput}
      input={input}

      />
    ) : (
      <Closesidebar 
      setSideBar={setSideBar}
      setInput={setInput}
      input={input}
      />
    ) }
    </>
  )
}

export default Sidebar
