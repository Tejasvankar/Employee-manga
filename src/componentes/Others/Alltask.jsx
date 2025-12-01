import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Alltask = () => {

   const[ userData,setUserData]=  useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] mt-5 p-5 rounded-lg  h-9text-lg font-medium 0'>
      <div className='bg-red-400 py-2 px-4 flex justify-between rounded mb-2'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
         <h5 className='text-lg font-medium w-1/5 '>completed</h5>
         <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
      </div>

       <div className='h-[80%] overflow-y-auto'>
         {userData.map(function(elem,idx){
        return <div key={idx} className='border-2 border-emerald-400 py-2 px-4 flex justify-between rounded mb-2'>
        <h2 className='text-lg font-medium w-1/5 '>{elem.firstName}</h2>
        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCount.newTask}</h3>
        <h5 className='text-lg font-medium w-1/5 text-yellow'>{elem.taskCount.active}</h5>
         <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCount.completed}</h5>
          <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
          </div>
         })}
       </div>
    </div>
  );
}

export default Alltask;
