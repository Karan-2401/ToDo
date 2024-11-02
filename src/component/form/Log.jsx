import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Newpage } from '../../store/slices/userSlice'
const Log = () => {
  const name = useRef()
  const password = useRef()
  const dispatch = useDispatch()
  return (
    <>
    <div className='flex justify-center'>
        <form className='flex flex-col justify-center items-center bg-blue-300  gap-4 w-10/12 md:w-3/12 h-auto py-5 rounded shadow-md shadow-blue-300'>
          <h1 className='text-2xl font-roboto text-center text-white'>Log In</h1>
          <input type="text" name='name' placeholder='Enter Name' className=' w-10/12 px-2 rounded text-sm h-7 outline-none' ref={name} />
          <input type='password' name='password' placeholder='Enter Password' className='w-10/12 h-7 px-2 rounded text-sm outline-none' ref={password} />
          <button className='bg-salad w-24 h-8 rounded text-white' onClick={(e) => {
            e.preventDefault();
            if (name.current.value == localStorage.user) {
              if (String(password.current.value) == localStorage.password) {
                  dispatch(Newpage())
              }
              else {
                
                alert("the password is wrong") 
              }
            } else {
              alert('Error in Log in')
            }
          }}>Log In</button>
        </form>
      </div>
      
    </>

  )
}

export default Log
