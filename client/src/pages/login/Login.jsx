import axios from "axios";
import { useState } from "react"
import "./login.scss"
import {login} from "../../authContext/apiCalls";
import { useContext } from "react";
import {AuthContext} from "../../authContext/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Register() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {dispatch}=useContext(AuthContext);
    const navigate=useNavigate()

    const handleClick=(e)=>{
        e.preventDefault();
        console.log("cc")
        login({email,password},dispatch)
        navigate("/")
        

    }
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
            <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
                />
            <button className="loginButton">Sign In</button>                
            </div>
        </div>
        <div className="container">
            <form action="">
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or phone number" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button class="loginButton" onClick={handleClick}>Sign In</button>
                <span>New to Netflix?<b>Sign up now</b></span>
                <small>This page is protected by Google reCAPTCHA to ensure you are not a bot.<b>Learn more</b></small>
            </form>


        </div>
      
    </div>
  )
}
