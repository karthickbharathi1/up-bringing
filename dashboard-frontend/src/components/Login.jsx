import React from 'react'
import kids from "../assets/kids-online-classes.jpg"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    
    const [email , setEmail] = useState()
    const [password , setPasswaord] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/login' ,{ email , password} )
        .then(result => {console.log(result)
            if(result.data === "Success"){
                navigate('/home')
            }else{
                alert(result.data)
            }
       
        })
        .catch(err => console.log(err))
    }
  return (
 
    <div className='flex '>
        <div className='hidden sm:block w-1/2 '>
            <img src={kids} alt=""  className='object-cover h-screen'/>
        </div>
        <div className='w-full sm:w-1/2 h-screen py-10 flex justify-center items-center'>
           

            <div className='w-1/2'>
            <h1 className='text-center text-white font-bold text-[35px] mb-10'> Up Bringing</h1>
            <p className='text-white text-center mb-5'>Welcome to Up-Bringing</p>
            <div className=' flex justify-center items-center'>
                <div className='bg-white rounded-lg px-1 py-1 '>
                    <button className='px-5 bg-[#6557FF] focus:text-white text-white rounded-lg'>Login</button>
                    <Link to="/register">
                    <button className='px-5  bg-white   focus:text-white text-black rounded-lg'>Register</button>
                    </Link>
                </div>

            </div>
           
            <form className='w-full' onSubmit={handleSubmit}>
                <div className='mb-10'>
                <label htmlFor="" className='text-white mb-4'>Email</label>
                <br />
                <input className='w-full rounded-lg py-1 px-2 ' type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder='Your Email'/>

                </div>
                <div className='mb-10'>
                <label htmlFor="" className='text-white mb -5'>Password</label>
                <br />
                <input className='w-full rounded-lg py-1 px-2 mb-10' type="password" onChange={(e) => {setPasswaord(e.target.value)}} placeholder='Your Pasword' />

                <div className='text-center'>
                    <button type='submit'  className='bg-[#514ED8] text-white px-5 py-1 rounded-lg'>Login</button>
                </div>

                </div>
              
              
            </form>
           
            </div>
        </div>
    </div>
  )
}
