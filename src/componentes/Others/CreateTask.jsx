import React from 'react';
import { useState } from 'react';
import {AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

const CreateTask = () => {
  
  const [userData,setUserData]=  useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
  
  const [newTask, setNewTask] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({taskTitle, taskDescription, taskDate, category, active:false,newTask:true,failed:false,completed:false})

    const data = userData
   

    data.forEach(function(elem){
      if (asignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCount.newTask = elem.taskCount.newTask+1
        
      }
    })
    setUserData(data)
     console.log(data);
    
    
          setTaskTitle('')
          setCategory('')
          setTaskDescription('')
          setTaskDate('')
          setAsignTo('')
  //  settaskDate('')
  //  setAsignTo('')
  //  setCategory('')
  //  setTaskDescription('')
  //  setTaskTitle('')
  }
  return (
    <div>
        <div className='p-5 bg-black mt-7 rounded-xl'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-wrap items-start justify-between '>
            <div className='w-1/2 '>
                <div >
                     <h3  className='text-sm text-grey-300 mb-0.5'>Task Title</h3>
                     <input value={taskTitle} 
                     onChange={(e)=>{
                      setTaskTitle(e.target.value)}}className='text-sm py-1 px-2 w-1/2 rounded outline bg-transparent border-[1px] border-grey-400 mb-4' type="text"  placeholder='Make a UI design'/>
                 </div>
                 <div>
                     <h3 className='text-sm text-grey-300 mb-0.5'>Date</h3>
                     <input value={taskDate} 
                     onChange={(e)=>{
                      setTaskDate(e.target.value)}} className='text-sm py-1 px-2 w-1/2 rounded outline bg-transparent border-[1px] border-grey-400 mb-4' type="date" />
                 </div>
                 <div>
                     <h3 className='text-sm text-grey-300 mb-0.5'>Asign to</h3>
                     <input value={asignTo} 
                     onChange={(e)=>{
                      setAsignTo(e.target.value)}} className='text-sm py-1 px-2 w-1/2 rounded outline bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='Employee Name' />
                  </div>
                 <div>
                     <h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
                     <input value={category} 
                     onChange={(e)=>{
                      setCategory(e.target.value)}} className='text-sm py-1 px-2 w-1/2 rounded outline bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='design, dev, etc' />
                 </div>
             </div>

             <div className='w-2/5 flex flex-col items-start'>
                  <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>
                  <textarea value={taskDescription} 
                     onChange={(e)=>{
                      setTaskDescription(e.target.value)}} className='w-full h-44 text-sm py-2 px-4 rounded outline bg-transparent border-[1px] border-grey-400 mb-4' name="" id="" cols="30" rows="5" placeholder='Task details here...'></textarea>

                  <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full  flex items-center justify-between'>Create Task</button>

            </div>
                 
            
         </form>

      </div>
    </div>
  );
}

export default CreateTask;
