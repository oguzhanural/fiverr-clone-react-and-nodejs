import React, { useState } from 'react'
import "./Login.scss"
// import axios from "axios"
import newRequest from '../../utils/newRequest';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  // console.log(setUsername);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try {
    const res = await newRequest.post("auth/login", {username, password,});
    localStorage.setItem("currentUser", JSON.stringify(res.data));
    navigate("/");

    console.log(res.data);
    } catch (error) {
      setError(error.response.data);
      // console.log(error.response.data);
    }
  }

  return (
    <div className='login'> 
        <div className="container">
          <form action="" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <label htmlFor="">Username</label>
          <input name='username' type="text" placeholder='oguzhan'
          onChange={e=>setUsername(e.target.value)}/>
          
          <label htmlFor="">Password</label>
          <input name='password' type='password'
          onChange={e=>setPassword(e.target.value)}/>

          <button type='submit'>Login</button>
          {
            error && error
          }
        </form>
        </div>
    </div>
  )
}

export default Login