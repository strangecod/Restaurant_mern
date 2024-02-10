import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
const Register = () => {
  const [value,setValue]=useState({
    name:'',
    email:'',
    date:'',
    time:'',
    phone:''
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
    const register=await axios.post('http://localhost:4000/registersign',value);
    console.log(register.data);
    setValue({
      name:'',
      email:'',
      date:'',
      time:'',
      phone:''
    })
    navigate("/Chef");
    alert("Account created");
  }
  return (
   <>
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/photos/17.jpg" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
    <form onSubmit={handleSubmit}>
        <input placeholder='Name' onChange={handlechange} value={value.name} name='name'></input>
        <input placeholder='Email' type='email'  onChange={handlechange}  value={value.email}  name='email'></input>
        <input placeholder='Date' type='date'  onChange={handlechange}  value={value.date}  name='date'></input>
        <input placeholder='Time'type='time'  onChange={handlechange}  value={value.time}  name='time'></input>
        <input placeholder='Phone'  onChange={handlechange}  value={value.phone}  name='phone'></input>
        
        <button type="submit">Register</button>
    </form>
    </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Register