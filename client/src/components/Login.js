import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { userLogin } from '../JS/userSlice/userSlice';

const Login = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch()

    const[Login,setLogin]=useState({
    
    email:"",
    password:"",
  });
  return (
    <div>
          <div className ="wrapper">
    <form onSubmit={(e)=>e.preventDefault()
    } className="form-signin">       
      <h2 className="form-signin-heading">Please login</h2>
      <input type="text"
       className="form-control"
        name="email" 
        placeholder="Email Address"
         required=""
          autofocus=""
          onChange={(e)=>setLogin({...Login,email:e.target.value})}/>   
      <input type="password"
       className="form-control"
        name="password" 
        placeholder="Password"
         required=""
         onChange={(e)=>setLogin({...Login,password:e.target.value})}/>       
      
      <button className="btn btn-lg btn-primary btn-block"
       onClick={()=>{
        dispatch(userLogin(Login));
        navigate('/')
       }}>Login</button>
      <label className="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
      </label>
      <h5>u already have acount<Link to ="/register"> register now </Link></h5>   
    </form>
  </div>
    </div>
  )
}

export default Login