// Styles
import { useState } from 'react'
import './Login.css'


function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form className="auth-form">
            <h2>Login</h2>
            <label>
                <span>Email:</span>
                <input 
                required 
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>Password:</span>
                <input 
                required 
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </label>
            <button className="btn">Login</button>
        </form>
        );
}

export default Login;