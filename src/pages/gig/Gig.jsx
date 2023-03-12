import React from 'react'
import Carousel from 'react-multi-carousel'
import Slide from '../../components/Slide/Slide'
import "./Gig.scss"

const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
        <span className="breadCrumbs">
            FIVERR {'>'} GRAPHICS DESIGN</span>
            <h1>I will created AI generated art for you</h1>
            <div className="user">
              <img className='userPicture' src="https://img.freepik.com/free-photo/portrait-cute-happy-girl-smiling-touching-her-curly-red-hair_176420-9241.jpg?size=626&ext=jpg&ga=GA1.2.1067247315.1677148623&semt=sph" alt="" />
              <span>John Doe</span>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
                </div> 
            </div>
            
          
        </div>
        <div className="right">

        </div>
      </div>
    </div>
  )
}

export default Gig