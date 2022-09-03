import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Styles
import './Signup.css'

function Signup(){
    const host = 'http://localhost:5000';
    const [credential, setCredential] = useState({name: "", email: "", password: ""});
    let Navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        //console.log(email, password, displayName, thumbnail);
        const {name, email, password} = credential;
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
          });
          const json = await response.json();
          console.log(json);

          if(json.success){
            //save the auth token and redirect
            console.log('signup success');
            localStorage.setItem('token', json.authToken);
            Navigate("/", { replace: true });
          }
          else{
            alert("Internal server error");
          }
    }
    const handleChange = (e) =>{
        setCredential({...credential, [e.target.name]: e.target.value});
    }

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
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
            <label>
                <span>Display Name:</span>
                <input 
                required 
                type='text'
                name='name'
                onChange={handleChange}
                value={credential.name}
                />
            </label>
            <button className="btn">Sign up</button>
        </form>
    );
}

export default Signup;