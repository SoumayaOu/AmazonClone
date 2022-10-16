import React, { useState } from 'react';
import "./Login.css";
import {Link,useNavigate} from 'react-router-dom';
import {auth} from "./firebase";


function Login() {
  const navigate= useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const signIn=e=>{
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email,password)
    .then(auth => {
      navigate('/')
    })
    .catch(error =>alert(error.message))
  }
  const register=e=>{
    e.preventDefault();// prevent refreshing the browser
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      //It successfully created a new user with 
      //email and password.
      if(auth){
        navigate('/');
      }
    })
    .catch(error =>alert(error.message))
    //firebase register
  }
  return (
    <div className='login'>
      <Link to='/'>
      <img className='login__logo'
      src='https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png'
      />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password"  value={password} onChange={e=>setPassword(e.target.value)}/>
          <button className='login__signInButton' onClick={signIn}>Sign In</button>
        </form>
        <p>By Signing-In you agree to Amazon's conditions of Use & Sale. Please see your privacy Notice , our cookies Notice and our Interest-Based Ads Notice.</p>
        <button className='login__registerButton' onClick={register}>Create your account </button>
      </div>
    </div>
  )
}

export default Login