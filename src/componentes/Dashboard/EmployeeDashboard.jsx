import React from 'react';
import Header from '../Others/Header';
import TaskListNo from '../Others/TaskListNo';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h--screen text-white'> 
    <Header />
    <TaskListNo/>
    <TaskList/>  
    </div>
  );
}

export default EmployeeDashboard;
