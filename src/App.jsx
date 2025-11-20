import React from 'react';
import Login from './componentes/Auth/Login';
import EmployeeDashboard from './componentes/Dashboard/EmployeeDashboard';
import AdminDashboard from './componentes/Dashboard/AdminDashboard';
import { setLocalStorage } from './utils/LocalStorage';

const App = () => {

  // useEffect(() => {
  //   setLocalStorage()
  
  // },)
  
  return (
    <>
    <Login />
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
