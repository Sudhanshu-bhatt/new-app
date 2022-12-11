import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate= useNavigate();

  const handleSubmit=(e)=>{
   e.preventDefault();
   
    console.log(email);
    e.target.reset();
  }
  

  return (
    <>
    <div className="loginform">  
      <form onSubmit={handleSubmit}>

       <h2>  Log In  </h2>
        <label htmlFor="Email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="abc@org.in"
          id="email"
          name="email"
          required
        />
        <label htmlFor="Password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="Password"
          placeholder="*********"
          id="password"
          name="password"
          required
        />
       <button id="signupbutton"  type="Submit" onClick={()=>navigate('/Dashboard')}>Log In</button>
      </form>
      <h5>Or else ?</h5>
      <button   onClick={()=>navigate('/Register')}>Sign Up</button>
      </div>
    </>
  );
};

export default Login;
