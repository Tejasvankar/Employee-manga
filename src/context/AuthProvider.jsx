import React,{createContext}from 'react';
import { getLocalstorage, setLocalStorage } from '../utils/LocalStorage';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
  setLocalStorage()
  const {employees,admin} = getLocalstorage();
  setUserData({employees,admin});
  },[])
  
  

  return (
    <div>
        <AuthContext.Provider value ={userData}>
           {children}
        </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
