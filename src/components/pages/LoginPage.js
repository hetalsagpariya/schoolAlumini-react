import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    const[userName,setUserName]=useState('')
    const[password,setPassword]=useState('')

    const navigate = useNavigate()

    const submit =()=>{
        // return Alert.alert(userName,password)
        if(userName ==="admin@admin.com" && password ==="admin"){
            alert(`Thank You ${userName}`)
          navigate("/home")
        } else{
            alert(`UserName and password is not correct`)
            navigate("/")
        }
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Admin Login</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required onChange={(e)=>{
          setUserName(e.target.value)
        }} />
                </p>
                <p>
                    <label>Password</label>
                
                    <br/>
                    <input type="password" name="password" required  onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={submit}>Login</button>
                </p>
            </form>
            <footer>
           
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
