import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
const Signup = () => {
  const [value,setValue]=useState({
    name:'',
    email:'',
    password:''
  })
  const navigate=useNavigate();
  const handlechange=(e)=>{
    setValue({
      ...value,
      [e.target.name]:e.target.value,
    })
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const register=await axios.post('http://localhost:3000/register',value);
    console.log(register.data);
    setValue({
      name:'',
      email:'',
      password:''
    })
    navigate("/Chef");
    alert("Account created");
  }
  return (
   <>
   <div className='sign'>
   <div className='container-signup'>
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
        <input placeholder='Name' onChange={handlechange} value={value.name} name='name'></input>
        <input placeholder='Email'  onChange={handlechange}  value={value.email}  name='email'></input>
        <input placeholder='Password'   onChange={handlechange}  value={value.password} name='password'></input>
        <button type="submit">Sign Up</button>
    </form>
   </div>
   </div>
   </>
  )
}

export default Signup