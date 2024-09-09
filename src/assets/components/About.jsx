import React from 'react'
import '../components/About.css';
const About = () => {
  return (
    <div className="form-container">
    <h2>Register</h2>
    <form>
      <div className="input-field">
        <input type="text" placeholder="First Name" required />
      </div>
      <div className="input-field">
        <input type="text" placeholder="Last Name" required />
      </div>
      <div className="input-field">
        <input type="email" placeholder="Email" required />
      </div>
      <div className="input-field">
        <input type="password" placeholder="Password" required />
      </div>
      <div className="input-field">
        <input type="password" placeholder="Confirm Password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
  )
}

export default About