import React from 'react';

const Login = () => {

    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
 const submitHandler = (e) => {
    e.preventDefault();
   console.log("email is",email);
   console.log("password is",password); 

   setEmail("");
    setPassword("");
 }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form onSubmit={(e)=>{
         submitHandler(e)
        }} className='flex flex-col item-center justify-center '>
          < input value={email} onChange={(e)=>{
              setEmail(e.target.value);
          }}required className= ' outline-none bg-trasnparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type = "email"placeholder =  "enter your email"/>
          < input value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}  required className= ' outline-none bg-trasnparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-3' type = "password" placeholder = "enter your password"/>
          < button className= 'text-white  border-none outline-none  border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white mt-5' > Login </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
