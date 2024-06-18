// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logedin } from '../store/Actions/productAction';

const Login = () => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);

 const[username,setusername] = useState("")
 const[password,setpassword] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      dispatch(logedin({username,password}))
      alert('Login successful');
      
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form className="flex flex-col gap-5 items-center justify-center" onSubmit={handleSubmit}>
      <input
        autoComplete="on"
        className="w-60 h-8 rounded pl-5 border-gray-300 outline-none"
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <div className="bg-white flex items-center pl-2 pr-4 rounded w-60 h-8 border border-gray-300">
        <input
          autoComplete="on"
          name="password"
          className="pl-4 rounded outline-none w-full h-full"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <i
          className={`cursor-pointer ml-2 ${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'}`}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      <input className="mt-2 w-40 h-8 rounded-full bg-zinc-600 text-white text-center active:scale-95" type="submit" value="Submit" />
    </form>
  );
};

export default Login;
