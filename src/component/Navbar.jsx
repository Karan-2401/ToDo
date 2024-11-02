import React, { useEffect } from 'react'
import img from '../assets/img.png'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/userSlice'

const Navbar = () => {
  const user = useSelector((state)=>state.user.value
  )
  
  const dispatch = useDispatch()
  
  return (
    <div className='flex justify-between p-2 bg-ghostwhite'>
      <div className='flex gap-3 items-center'>
      {user ? <img src={img} alt="" className=' w-12 rounded-md '/> : ""}
      <h2 className='font-poppins text-Darkcharcoal text-xl'>Quick Task Pro</h2>
      </div>
      <div>
        { localStorage.key('user') ? <button className='bg-salad h-10 w-24 rounded-md text-white hover:bg-green-600 font-pop' onClick={()=> dispatch(removeUser())}>Delete user</button> : ""}
        
      </div>
    </div>
  )
}

export default Navbar
