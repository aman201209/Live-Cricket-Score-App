import React, { useState } from 'react'
import { app } from "../Firebase"
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from "yup"

const auth = getAuth(app)

 

export default function Login() {
  const uservalidation = yup.object({
    email: yup.string().email('Invalid email').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Invalid email format").required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  }); 
  let navigate = useNavigate()
  const googleProvider =new GoogleAuthProvider()

  let [user, setUser] = useState([
    {
      email:"",
      password:""
    }
  ])

  let [errors ,setErrors] = useState([])


  const handlesubmit =async (e) => {
    e.preventDefault();
    try {
      await uservalidation.validate(user, { abortEarly: false });
      setErrors({});      
      const {email ,password} = user
      console.log(email,password)
      signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        if (value.user.accessToken) {
          navigate("/point")
        }
        console.log(value)

      })
    }catch (error) {
      if (error) {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);    
    }
    
  }

    
  }
  const googleHandle = ()=>{
    signInWithPopup(auth , googleProvider).then((value)=>{
      navigate("/point")
    }).catch((error)=>{
    })
  }
console.log(errors)
  return (
    <div className='login'>
      <div>
        <h1>Easy To Create Account</h1>
      </div>
      <div className='login1'>
        <form className='login3' onSubmit={handlesubmit}>
          <div>
            <input type='email' placeholder='EMAIL' value={user.email} name='email'  onChange={(e) => setUser({...user,[e.target.name]:e.target.value})} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <input type='password' placeholder='PASSWORD' value={user.password} name='password' onChange={(e) => setUser({...user,[e.target.name]:e.target.value})} />
            {errors.password && <p className="error">{errors.password}</p>}

          </div>
          <button className='button' type='submit'>LogIn</button>
          <hr />
          <div className='login4'>
          <div className='login5'><Link className="link" to="/createAccount"><button className='link2 '>Create Account</button></Link></div>
          <div className='login5'><button className='google' onClick={googleHandle}>Sign with Google</button></div> 
          </div>
        </form>
      </div>
    </div>
  )
}




