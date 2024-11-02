
import { useEffect, useState } from "react"
import Navbar from "./component/Navbar"
import { useSelector } from "react-redux"
import Form from "./component/form/Form"
import Task from "./component/Task"
function App() {
  const user = useSelector((state)=> state.user.value)
  const New = useSelector((state)=> state.user.value)
  
  return (
    <div className="h-screen flex flex-col">
      <div><Navbar /></div>
      {!New.newPage ? <div className="my-20 md:mt-60"><Form/></div> : <Task/>}
      
    </div>
  )
}

export default App
