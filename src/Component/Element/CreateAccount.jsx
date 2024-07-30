import React, { useState } from 'react'
import {app} from "../Firebase"
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const auth = getAuth(app)

export default function CreateAccount() {
    let navigate = useNavigate()    

    let [email , setEmail] = useState("")
    let [password , setPassword] = useState("")
    

    const handlesubmit=(e)=>{
        e.preventDefault();
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
    }

  return (
    <div className='login'>
    <div>
        <h1>Easy To Create Account</h1>
    </div>
    <div className='login1'>
        <form className='login3' onSubmit={handlesubmit}>
        <div>
            <input type='email' placeholder='EMAIL'value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
            <input type='password' placeholder='PASSWORD'value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className='button' type='submit'>SignUp</button>
        </form>
    </div>
</div>
  )
}

