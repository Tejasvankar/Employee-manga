import React from 'react';

const CreateTask = () => {
  return (
    <div>
        <div className='p-5 bg-black mt-7 rounded-xl'>
        <form className='flex flex-wrap items-start justify-between '>
            <div className='w-1/2 '>
                <div >
                     <h3  className='text-sm text-grey-300 mb-0.5'>Task Title</h3>
                     <input className='text-sm py-1 px-2 w-1/2 rounded outline bg-transparent border-[1px] border-grey-400 mb-4' type="text"  placeholder='Make a UI design'/>
                 </div>
                 <div>
                     <h3 className='text-sm text-grey-300 mb-0.5'>Date</h3>
                     <input className='text-sm py-1 px-2 w-1/2 rounded outline bg-transparent border-[1px] border-grey-400 mb-4' type="date" />
                 </div>
                 <div>
                     <h3 className='text-sm text-grey-300 mb-0.5'>Asign to</h3>
                     <input className='text-sm py-1 px-2 w-1/2 rounded outline bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='Employee Name' />
                  </div>
                 <div>
                     <h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
                     <input className='text-sm py-1 px-2 w-1/2 rounded outline bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='design, dev, etc' />
                 </div>
            </div>

             <div className='w-2/5 flex flex-col items-start'>
                  <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>
                  <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline bg-transparent border-[1px] border-grey-400 mb-4' name="" id="" cols="30" rows="5" placeholder='Task details here...'></textarea>

                  <buttonc className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full  flex items-center justify-between'>Create Task</buttonc>

            </div>
                 
            
        </form>

      </div>
    </div>
  );
}

export default CreateTask;
