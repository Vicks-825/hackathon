import { Link } from 'react-router-dom'
// import React from 'react'

// Styles & Images
import './Navbar.css'
import Devlogo from '../assets/dev-logo.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li className='logo'>
                <img src={Devlogo} alt='dev logo'></img>
                <span>Devs at Work</span>
            </li>
            <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li>
            <button className='btn'>Logout</button>
        </li>
        </ul>
    </div>
  )
}

export default Navbar