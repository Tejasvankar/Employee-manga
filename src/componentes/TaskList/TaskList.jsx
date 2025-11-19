import React from 'react';

const TaskList = () => {
  return (
    <div id='tasklist' className='h-65 overflow-x-auto flex item-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
      <div className=' flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
         <div className='flex jsutify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
            <h4 className='text-sm'>11 nov 2025</h4>
         </div>
         <h2 className='mt-5 text-2xl font-semibold'>Make a Video</h2>
         <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore, fugit voluptas vel dolorem libero!
         </p>
      </div>

       <div className=' flex-shrink-0 h-full w-[300px] bg-emerald-400 rounded-xl p-5'></div>

        <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'></div>

         <div className=' flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'></div>
      
    </div>
  );
}

export default TaskList;
