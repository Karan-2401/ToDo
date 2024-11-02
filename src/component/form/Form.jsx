import React, { useEffect, useState } from 'react'
import Sign from './Sign'
import Log from './Log'
import { useSelector } from 'react-redux'

const Form = () => {
    const user = useSelector((state)=> state.user.value)
        
  return (
    <div>
       {localStorage.key('user') ? <Log/> : <Sign/>}
       
    </div>
    
  )
}

export default Form
