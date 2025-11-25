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
   const [loggedInUser, setLoggedInUser] = useState(null);
   const authData = useContext(AuthContext)
   
  //  useEffect(() => {
  //    if (authData) {
  //      const loggedInUser = localStorage.getItem('loggedInUser');
  //      if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //      }
  //    }
  //  },[authData]);
   

    const handleLogin = (email,password) => {  
        if(email == 'admin@me.com' && password == 123){
            setUser('admin');
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
           } else if(authData  ){
            const employees = authData.employees.find((e) => email==e.  email && e.password == password)
            if(employees)
           { setUser('employee')
            setLoggedInUser(employees)
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
          }
            }else{
        alert("Invalid credentials");
    }
}
   
 
  
  return (
    <>
   {!user ? <Login handleLogin={handleLogin} />:''}
   {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ?   <EmployeeDashboard id={loggedInUser.id} /> : null ) }
    </>
  );
}

export default App;