import React from 'react'
import {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-use-history";
import {Link } from "react-router-dom";
import{Login} from "@mui/icons-material";
const CryptoJS = require("crypto-js");
const Register = () => {
    const[userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const history=useHistory();
    async function handleSubmit(event)
   {
    event.preventDefault();
   const responsed=await axios.post("http://localhost:3000/register",{
    username:userName,
    email:email,
    password: password
 })
 console.log(responsed);
 alert("You have been registered");
 history.push("/login");
   }
  return (
<div className="register_container">
    
    <div className="register">
      <form  className="register_form" onSubmit={handleSubmit}>
      <h2 id="signup">SIGN UP</h2>
      <input type="text" value={userName} placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/>
      <input type="text" value ={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
       <div className="regisbtn"><button type="submit">REGISTER</button></div> 
      
      </form>
    </div>
    </div>
  
  );
}

export default Register
