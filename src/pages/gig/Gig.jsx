import React from 'react'
import GigSlider from '../../components/gigSlider/GigSlider'
// import Slide from '../../components/Slide/Slide'
import { gigSliderData } from '../../data'
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
              <span>itsjason</span>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
                </div> 
            </div>
            <GigSlider />
            <h2>About This Gig</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque? Veritatis suscipit, porro fuga vero rerum molestias? Minus assumenda nemo adipisci saepe incidunt a, esse cum, dicta mollitia facere sapiente?</p>
            <h2>About The Seller</h2>
            <div className="seller-section">
              <div className="seller-user-pictures">
              <img src="https://img.freepik.com/free-photo/portrait-cute-happy-girl-smiling-touching-her-curly-red-hair_176420-9241.jpg?size=626&ext=jpg&ga=GA1.2.1067247315.1677148623&semt=sph" alt="" />
              </div>
              <div className="seller-user">
                <span>itsjason</span>
                <p>Hi! I can help you with your art fantasy!</p>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button className=''>Contact Me</button>
              </div>
            </div>
            <div className="user-box-seller">
              <div className="user-box-items">
                 <ul className='user-stats'>
                  <li>From
                    <strong>Netherlands</strong>
                  </li>
                  <li>Avg. response time
                    <strong>1 hour</strong>
                  </li>
                  <li>Languages
                    <strong>Dutch, English</strong>
                  </li>
                  <li>Member since
                    <strong>Jul 2017</strong>
                  </li>
                  <li>Last delivery
                    <strong>about 24 minutes</strong>
                  </li>
                 </ul>
                 <hr />
                 
                 <p>Hey! I am an AI-powered art seller on Fiverr,
                providing custom-made masterpieces that'll take your breath away.
                From character portraits to fan art, I use the latest AI technology
                to bring your favorite characters to life. With fast turnaround times,
                affordable prices, and exceptional quality. Order now and see the magic unfold!
              </p>
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