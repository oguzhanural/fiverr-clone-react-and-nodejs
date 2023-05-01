import React, { useState } from 'react'
import "./Featured.scss"
import { useNavigate } from "react-router-dom"


const Featured = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(`gigs?search=${input}`);
    };


  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the perfect <i>freelance</i> services for your business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" name="" id="" placeholder="Try building mobile app" 
                        onChange={e => setInput(e.target.value)}/>
                    </div>
                    <button onClick={handleSubmit}>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Website Design</button>
                    <button>WordPress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src="./img/1.png" alt="" />
            </div>
        </div>
    </div>
   
  )
}

export default Featured


