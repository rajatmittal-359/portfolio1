import React from 'react';
import './Login.css';
import { useState } from 'react';
const LLogin = () => {
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const handlesubmit =(e)=>{
    e.preventDefault();
    const SavedData = JSON.parse(localStorage.getItem('userData'));

    if(!SavedData){
      alert('Please sign-up first to login : ');
      return;
    }
    if(SavedData.email!==email){
      alert('Incorrect Email');
    }else if(SavedData.password!==password){
      alert('Password is incorrect');
    }else{
      alert('Login successfull');
    }
  };
  const logout =()=>{
    localStorage.removeItem('userData');
    alert('You have been logged out ');
    setEmail('')
    setPassword('')
  }
  return (
    <div className='login-topmost'>
      <div className='login-container'>
      <h1 className='login-title'>Login page </h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor='email' className='label'>Email : </label>
        <input
         id='email'
         type='email'
         placeholder='Write your email here '
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        className='input-box'
        ></input>
        <label htmlFor='password'  className='label'>Password : </label>
        <input
         id='password'
         type='password'
         placeholder='Write your password here '
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        className='input-box'
        ></input>
        <button type='submit' onClick={handlesubmit} className='submit-btn' >Submit</button>
        <button type='submit' onClick={logout} className='submit-btn2'>Logout</button>
      </form>
    </div>
    </div>
    
  )
};

export default LLogin

