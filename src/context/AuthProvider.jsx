import React,{createContext}from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)

  return (
    <div>
        <AuthContext.Provider value ={"tejas"}>
           {children}
        </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
