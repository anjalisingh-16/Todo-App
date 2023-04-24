import React from 'react'
import {useState} from "react";
import axios from "axios";
 import {useHistory} from "react-router-use-history"
 import {Link} from "react-router-dom";

const Login = () => {
    
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const history=useHistory();
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        const responsed = await axios.post("http://localhost:3000/login", {
          email: email,
          password: password
        })
        console.log(responsed);
        alert("You have been logged in");
        history.push("/todo")
      } catch (err) {
        alert("Invalid email or password")
        history.push("/");
      }
    }
  return (
    <div className="login">
    <div>
    </div>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <button type="submit" className="loginbutton" >
          Sign In
        </button>
        <span>
          New to Todo? <Link to="/"><b>Sign up now.</b></Link>
        </span>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a
          bot. <b>Learn more</b>.
        </small>
      </form>
    </div>
  </div>
);

  
}

export default Login
