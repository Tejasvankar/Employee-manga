import React from 'react';
import Login from './componentes/Auth/Login';
import EmployeeDashboard from './componentes/Dashboard/EmployeeDashboard';
import AdminDashboard from './componentes/Dashboard/AdminDashboard';
import { setLocalStorage } from './utils/LocalStorage';
import { useEffect } from 'react';
import { useState ,} from 'react';
import { AuthContext } from './context/AuthProvider';
import { useContext } from 'react';

const App = () => {

  const [user,setUser] = useState(null);
    const handleLogin = (email,password) => {  
        if(email == 'admin@me.com' && password == 123){
            setUser('admin');
         } else if(email == 'user@me.com' && password == 123){
          setUser('employee');    
        }else{
        alert("Invalid credentials");
    }
}
   
  const data = useContext(AuthContext)
  console.log(data)
  
  return (
    <>
   {!user ? <Login handleLogin={handleLogin} />:''}
  {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App;