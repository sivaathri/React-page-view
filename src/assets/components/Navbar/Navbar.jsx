import React from 'react'
import {Link} from 'react-router-dom'
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <div className="sidebar">
    <div className="logo">
      <h1>MyLogo</h1>
    </div>
    <nav className="nav-links">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </div>
  )
}

export default Navbar