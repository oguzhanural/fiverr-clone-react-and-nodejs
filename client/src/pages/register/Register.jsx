import React, { useState } from 'react'
import "./Register.scss"
import upload from '../../utils/upload';
import newRequest from '../../utils/newRequest';
import { useNavigate } from "react-router-dom";


const Register = () => {

  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    passaword: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();


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

  const handleSubmit = async(e) => {

    e.preventDefault();
    const url = await upload(file);

    try {
      await newRequest.post("/auth/register",{
        ...user,
        img: url
      });
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }

  };

  // const upload = async (file) => {
  //   // firstly convert form data
  //   const data = new FormData();
  //   data.append("file",file);
  //   data.append("upload_preset", "fiverr")
  //   try {
  //     const res = await axios.post("api.cloudinary bla bla.." ,data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(user);

  return (
    <div className='register-page'>
      <div className="register-page-container">
        <form action="" onSubmit={handleSubmit}>
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
          <input type="text" name="phone" placeholder='5554443322' onChange={handleChange}/>
          <label htmlFor="">Description</label>
          <textarea name="desc" id="" cols="30" rows="12" onChange={handleChange}></textarea>

  
          </div>
        </form>
        
      </div>
      
    </div>
  )
}

export default Register