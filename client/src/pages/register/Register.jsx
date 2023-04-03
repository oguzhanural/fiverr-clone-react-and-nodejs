import React, { useState } from 'react'
import "./Register.scss"


const Register = () => {

  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    passaword: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const handleChange = (e) => {
    setUser(prev =>{
      return {...prev,  [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser(prev =>{
      return {...prev, isSeller: e.target.checked};
    });
  };
  console.log(user);

  return (
    <div className='register-page'>
      <div className="register-page-container">
        <form action="">
          <div className="left">
            <h1>Create a New Account</h1>
            <label htmlFor="">Username</label>
            <input name='username' type="text" placeholder='Username' onChange={handleChange}/>
            <label htmlFor="">Email</label>
            <input type="email" name='email' placeholder='Email' onChange={handleChange}/>
            <label htmlFor="">Password</label>
            <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
            <label htmlFor="">Country</label>
            <input type="text" name='country' placeholder='Country' onChange={handleChange}/>
            <label htmlFor="">Profile Picture</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])}/> 
            <button>Register</button>
          </div>
          <div className="right">
          <h1>Become a Seller</h1>
          <div className="seller-acount-toggle">
         <div className="text-seller">
         <p>Activate the seller account</p>
         </div>
            <div className="toggle-button">
            <label className="switch">
              <input type="checkbox" onChange={handleSeller}/>
              <span className="slider"></span>
            </label>
            </div>
          </div>
          <label htmlFor="">Phone Number</label>
          <input type="text" name=' ' placeholder='5554443322' onChange={handleChange}/>
          <label htmlFor="">Description</label>
          <textarea name="desc" id="" cols="30" rows="12" onChange={handleChange}></textarea>

  
          </div>
        </form>
        
      </div>
      
    </div>
  )
}

export default Register