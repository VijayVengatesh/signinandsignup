import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
  const[userDetails,setUserDetails]=useState({})
  const handleChanege=(event)=>{
    const {name,value}=event.target
    setUserDetails({...userDetails,[name]:value})
  }

  const handleSubmit=async(event)=>{
      event.preventDefault()

     const data=await axios.post("http://localhost:5000/signup",userDetails)
     console.log("data",data)
  }
  return (
    <div>
      <h1>signup</h1>
     <form onSubmit={handleSubmit}>
      <label>username:</label><input type='text' name='username' onChange={handleChanege}/><br/>
      <label>password:</label><input type='text' name='password' onChange={handleChanege}/> <br/>
      <input type='submit' value="signup"/>
     </form>
    </div>
  )
}

export default Signup
