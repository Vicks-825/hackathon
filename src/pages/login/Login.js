// Styles
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'


function Login(){
    const host = 'http://localhost:5000';
    const [credential, setCredential] = useState({email: "", password: ""});
    let navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credential.email, password: credential.password})
          });
          const json = await response.json();
          console.log(json);

          if(json.success){
            //save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/home", { replace: true });
          }
          else{
            alert("Invalid credentials");
          }
    }
    const handleChange = (e) =>{
        setCredential({...credential, [e.target.name]: e.target.value});
    }
    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                <span>Email:</span>
                <input 
                required 
                type='email'
                name='email'
                onChange={handleChange}
                value={credential.email}
                />
            </label>
            <label>
                <span>Password:</span>
                <input 
                required 
                type='password'
                name='password'
                onChange={handleChange}
                value={credential.password}
                />
            </label>
            <button className="btn">Login</button>
        </form>
        );
}

export default Login;