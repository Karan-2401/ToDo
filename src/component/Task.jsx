import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";

const Task = () => {
  return (
    <div className=''>
      <IoIosAddCircle className='text-5xl text-blue-400  fixed bottom-20 right-5 bottom-10 md:bottom-24 md:right-5'/>
      <form  className='absolute top-24 md:top-52 left-8 md:left-1/3 md:ms-12 flex flex-col justify-center items-center bg-blue-300  gap-4 w-10/12 md:w-3/12 h-auto py-5 rounded shadow-md shadow-blue-300'>
        <div className='w-full flex justify-end pe-3'><RiCloseFill className='text-red-500 text-3xl  rounded-full items-end'/></div>
        <input type="text" placeholder='Add Task' className=' w-10/12 px-2 rounded text-sm h-7 outline-none' />
        <input type="time" className=' w-10/12 px-2 rounded text-sm h-7 outline-none' />
        <button className='bg-salad w-24 h-8 rounded text-white'>Add</button>
      </form>
    </div>
  )
}

export default Task
