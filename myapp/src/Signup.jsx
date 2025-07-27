import React, { useState } from 'react'

const Signup = () => {
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [phone,setPhone] =useState('')

    const handlesubmit = (e) => {
  e.preventDefault();
  const data = { name, email, password, phone };
  console.log("Form Data Submitted:", data);

  // Save to localStorage
  localStorage.setItem("userData", JSON.stringify(data));

  // Retrieve from localStorage
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log("Data from localStorage:", userData);
  if(data.name===name && data.password===password){
    alert('submitted sucessfully')
  }
};
  return (
    <div className='signup-topmost'>
        <div className='signup-container'>
        <h1 className='signup title'>Signup page</h1>
        <form  onSubmit={handlesubmit}>
          <label htmlFor='name'>Name</label>
           <input
           id='name'
            type="text"
            placeholder='write you name'
            value={name}
            onChange={(e)=>
                setName(e.target.value)
            }
            className='signup-input'
            />
           <br/>
           <label htmlFor='email'>Email</label>
           <input
           id='email'
            type="email"
            placeholder='Write you email'
            value={email}
            onChange={(e)=>
                setEmail(e.target.value)
            }
             className='signup-input'
            />
           <br/>
           <label htmlFor='password'>Password</label>
           <input
           id='password'
            type="text"
            placeholder='Enter the password '
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             className='signup-input'
           />
           <br/>
           <label htmlFor='phone'>Phone</label>
           <input
           id='phone'
            type="phone"
            placeholder='Write your phonr number'
            value={phone}
            onChange={(e)=>
                setPhone(e.target.value)
            }
             className='signup-input'
           /> 
           <br/>
           <button type=" submit" className='submit-btn' >
            Submit
           </button>
        </form>
    </div>
    </div>
    
  )
}

export default Signup