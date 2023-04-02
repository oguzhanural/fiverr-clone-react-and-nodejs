import React from 'react'
import "./Register.scss"


const Register = () => {
  return (
    <div className='register-page'>
      <div className="register-page-container">
        <form action="">
          <div className="left">
            <h1>Create a New Account</h1>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Username'/>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Email'/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password'/>
            <label htmlFor="">Profile Picture</label>
            <input type="file" />
            <button>Register</button>
          </div>
          <div className="right">
          <h1>Become a Seller</h1>
          <div className="seller-acount-toggle">
         <div className="text-seller">
         <p>Activate the seller account</p>
         </div>
            <div className="toggle-button">
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider"></span>
            </label>
            </div>
          </div>
          <label htmlFor="">Phone Number</label>
          <input type="text" placeholder='5554443322'/>
          <label htmlFor="">Description</label>
          <textarea name="" id="" cols="30" rows="12"></textarea>

  
          </div>
        </form>
        
      </div>
      
    </div>
  )
}

export default Register