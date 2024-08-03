import React, { useState } from 'react'
import {app} from "../Firebase"
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"

const auth = getAuth(app)

export default function CreateAccount() {

    const uservalidation = yup.object({
        email: yup.string().email('Invalid email').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Invalid email format").required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      }); 
    let navigate = useNavigate()    

    let [user , setUser] = useState({
        email:"",
        password:""
    })
    let [errors , setErrors] = useState({})
    

    const handlesubmit=async(e)=>{
        e.preventDefault();
        try {
            await uservalidation.validate(user , {abortEarly:false})
            setErrors({})
            const {email , password} = user
            createUserWithEmailAndPassword(auth , email , password)
            .then((value)=>{
                console.log(value.user.accessToken)
                if(value.user.accessToken){
                    navigate("/point")
                }
    
            })
            .catch((error)=>{
                console.log(error)
            })

        } catch (error) {
            if(error){
                const newErrors = {}
                error.inner.forEach((err)=>{
                    newErrors[err.path] = err.message
                })
                setErrors(newErrors)
            }
        }
       
    }

  return (
    <div className='login'>
    <div>
        <h1>Easy To Create Account</h1>
    </div>
    <div className='login1'>
        <form className='login3' onSubmit={handlesubmit}>
        <div>
            <input type='email' placeholder='EMAIL'value={user.email} name='email' onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
            {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div>
            <input type='password' placeholder='PASSWORD'value={user.password} name='password' onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}/>
            {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <button className='button' type='submit'>SignUp</button>
        </form>
    </div>
</div>
  )
}

