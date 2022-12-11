import React,{useState} from 'react'
// import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [Username, setUsername] = useState("");
  const [C_Password, setC_Password] = useState("");
  // const navigate= useNavigate();

  const handleSubmit=(e)=>{
  e.preventDefault();
  
   console.log(email);
    console.log(Username);
    e.target.reset();
  }
  return (
    <>
    <div className="loginform">
      
    <form onSubmit={handleSubmit}>
    <h2>Registeration</h2>
        <label htmlFor="Username">Username</label>
        <input
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          type="Text"
          placeholder="Fullname"
          id="Username"
          name="Username"
          required
        />
       
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
          id="Password"
          name="Password"
          required
        />
         <label htmlFor="C_Password">Confirm Password</label>
        <input
          value={C_Password}
          onChange={(e) => setC_Password(e.target.value)}
          type="Password"
          placeholder="*********"
          id="C_Password"
          name="C_Password"
          required
        />
       <button type='Submit'>Sign Up</button>
      </form>
       </div>
     
    </>
  )
}

export default Register