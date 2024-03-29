import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest';
import "./Navbar.scss"


const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive)
    return ()=> {
      window.removeEventListener('scroll', isActive)
    };
  }, []);

  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () =>{
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");

    } catch (error) {
      console.log(error);
    }
  }

  return (
      <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
              <Link to="/" className='link'>
                <span className='text'>fiverr</span>
              </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Fiver Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                <Link to="/login" className='link'>Sign in</Link>
                {!currentUser && <button>Join</button>}
                {currentUser && (
                  <div className="user" onClick={()=> setOpen(!open)}>
                    <img src={currentUser.img || "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000&t=st=1680464902~exp=1680465502~hmac=76dc551683f3d98f7714c2b5087b6e5b1691c40a0cd8ff2e6d96daa11d86a08d" } alt="" />
                    <span>{currentUser?.username}</span>
                    {open &&<div className="options">
                      {
                        currentUser?.isSeller && (
                          <>
                          <Link className='link' to="/myGigs">Gigs</Link>
                          <Link className='link' to="/add">Add New Gig</Link>
                          </>
                      )}
                      <Link className='link' to="/orders">Orders</Link>
                      <Link className='link' to="messages">Messages</Link>
                      <Link className='link' onClick={handleLogout}>Logout</Link>
                    </div>
                    }
                  </div>
                )}
            </div>
        </div>
      {(active || pathname!=="/") && (
        <>
        <hr />
        <div className="menu">
            <Link className='link' to="/">Graphics & Design</Link>
            <Link className='link' to="/">Digital Marketing</Link>
            <Link className='link' to="/">Writing & Translation</Link>
            <Link className='link' to="/">Video & Animation</Link>
            <Link className='link' to="/">Music & Audio</Link>
            <Link className='link' to="/">Programming & Tech</Link>
            <Link className='link' to="/">Business</Link>
            <Link className='link' to="/">Lifestyle</Link>
            <Link className='link' to="/">AI Services</Link>
        </div>
        </>
      )}
      
    </div>
  )
}

export default Navbar