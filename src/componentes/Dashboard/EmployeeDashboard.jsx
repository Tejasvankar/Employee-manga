import React from 'react';
import Header from '../Others/Header';
import TaskListNo from '../Others/TaskListNo';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen text-white'> 
    
    <Header changeUser={props.changeUser} data = {props.data} />
    <TaskListNo data = {props.data}/>
    <TaskList data = {props.data}/>  
    </div>
  );
}

export default EmployeeDashboard;
