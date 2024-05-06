import axios from "axios"
import { useState } from "react"
import {useNavigate } from "react-router-dom"


export default function Signin()
{
    const navigate=useNavigate()
    const[token,setToken]=useState()
    const[userDetails,setUserDetails]=useState({})
    const handleChange=(event)=>{
        const{name,value}=event.target
        setUserDetails({...userDetails,[name]:value})

    }
    const handleSubmit=(async(event)=>{
        event.preventDefault()
        await axios.post("http://localhost:5000/signin",userDetails)
        .then((res)=>{
            console.log(res)
            setToken(res.data.token)
            window.localStorage.setItem("user",res.data.token)
            {res.data.loginStatus && navigate("/product")}
        })
        .catch((err)=>{
            console.log(err)
        })
        
    })
    
    return(
        <>
            <h1>Signin</h1>
            <form onSubmit={handleSubmit}>
                <label>username</label><input type="text" name="username" onChange={handleChange}/> <br/>
                <label>username</label><input type="text" name="password" onChange={handleChange}/> <br/>
                <input type="submit" value="Signin"/>
            </form>
        </>

    )
}