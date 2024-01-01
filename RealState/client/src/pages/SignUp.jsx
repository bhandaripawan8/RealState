import React from 'react'
import {Link, json} from 'react-router-dom'
import { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) =>{
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
  };
  console.log(formData);

  const handleSubmit = async (e) =>{
      e.preventDefault();
      const res = await fetch('api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onClick={handleChange} />
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onClick={handleChange} />
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onClick={handleChange} />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have a account?</p>
        <Link to={'/signIn'}>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
