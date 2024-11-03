import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Add } from '../store/slices/taskManager';
import { useRef } from 'react';

const Task = () => {
  const [x, setX]= useState(false)
  const task = useSelector((state)=> state.Task.value)
  const dispatch = useDispatch()
  const newTask = useRef()
  const Time = useRef()
  const k = JSON.parse(task.memory)
  console.log(k)
  return (
    <div className='flex justify-center items-center h-screen'>
      <IoIosAddCircle className='cursor-pointer text-5xl text-blue-400  fixed right-5 bottom-10 md:bottom-24 md:right-5 hover:text-blue-500' onClick={()=>{setX(true)}}/>
      {x ? <form  className='absolute top-24 md:top-52 left-8 md:left-1/3 md:ms-12 flex flex-col justify-center items-center bg-blue-300  gap-4 w-10/12 md:w-3/12 h-auto py-5 rounded shadow-md shadow-blue-300'>
        <div className='w-full flex justify-end pe-3'><RiCloseFill className='text-red-500 text-3xl  rounded-full items-end cursor-pointer hover:text-red-700' onClick={()=> setX(false)}/></div>
        <input type="text" placeholder='Add Task' className=' w-10/12 px-2 rounded text-sm h-7 outline-none' ref={newTask}/>
        <input type="time" className=' w-10/12 px-2 rounded text-sm h-7 outline-none' ref={Time}/>
        <button className='cursor bg-salad w-24 h-8 rounded text-white hover:bg-green-600' onClick={(e)=>{
          e.preventDefault()
          dispatch(Add({Task:newTask.current.value, Time:Time.current.value}))
          setTimeout(()=>{
            setX(false)
          },2000)
        } }>Add</button>
      </form> : ""}
      <div className='w-auto h-auto bg-green-500'>
        
      </div>
    </div>
  )
}

export default Task
