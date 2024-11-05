import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Add,del, edit } from '../store/slices/taskManager';
import { useRef } from 'react';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Task = () => {
  const [x, setX]= useState(false)
  const [y, setY]= useState(false)
  const [xy, setXY]= useState()
  const task = useSelector((state)=> state.Task.value)
  const dispatch = useDispatch()
  const newTask = useRef()
  const Time = useRef()
  const cTask = useRef()
  const cTime = useRef()
  console.log(task.Jarvis)
  return (
    <>
    <h1 className="font-poppins text-blue-400 text-2xl text-center p-5">TO DO App</h1>
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
      {y ? <form  className='absolute top-24 md:top-52 left-8 md:left-1/3 md:ms-12 flex flex-col justify-center items-center bg-orange-300  gap-4 w-10/12 md:w-3/12 h-auto py-5 rounded shadow-md shadow-orange-300'>
        <div className='w-full flex justify-end pe-3'><RiCloseFill className='text-red-500 text-3xl  rounded-full items-end cursor-pointer hover:text-red-700' onClick={()=> setY(false)}/></div>
        <input type="text" placeholder='Change Task' className=' w-10/12 px-2 rounded text-sm h-7 outline-none' ref={cTask}/>
        <input type="time" className=' w-10/12 px-2 rounded text-sm h-7 outline-none' ref={cTime}/>
        <button className='cursor bg-blue-700 w-24 h-8 rounded text-white hover:bg-blue-900' onClick={(e)=>{
          e.preventDefault()
          dispatch(edit({Task:cTask.current.value, Time:cTime.current.value, s:xy}))
          setTimeout(()=>{
            setY(false)
          },2000)
        } }>Change</button>
      </form> : ""}
      <div className='w-auto h-auto flex flex-col gap-2'>
      {task.Jarvis.map((x,key,key2)=>{
        return <>
          <div className='text-white border w-auto h-auto bg-purple-300 shadow-lg rounded-md flex p-2 justify-between items-center gap-4'>
            <div className='text-xl'>
              {key+1}.
            </div>
            <div className='text-xl'>
              {x.task}
            </div>
            <div className='text-xl'>
              {x.time}
            </div>
            <div className='text-2xl cursor-pointer text-orange-600'>
              <MdDelete onClick={()=>{
                dispatch(del({k:key}))
              }}/>
            </div>
            <div className='text-2xl cursor-pointer text-blue-600'>
              <CiEdit onClick={()=>{
                setY(true)
                setXY(key)
              }}/>
            </div>
          </div>
        </>
      })}
      </div>
    </div>
    </>
    
  )
}

export default Task
