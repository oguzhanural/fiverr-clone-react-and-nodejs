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
              <span className='gig-page-username-up'>itsjason</span>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span className='star-size'>5</span>
                </div> 
            </div>
            <GigSlider />
            <h2>About This Gig</h2>
            <p className='lorem-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, neque? Veritatis suscipit, porro fuga vero rerum molestias? Minus assumenda nemo adipisci saepe incidunt a, esse cum, dicta mollitia facere sapiente?</p>
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
            <div className="gig-page-reviews">
              <div className="gig-page-reviews-item">
                <div className="gig-page-reviews-user">
                  <img className='gig-page-reviews-user-pic' src="https://img.freepik.com/free-photo/headshot-cute-emotional-caucasian-girl-with-hair-knot-having-rest-cafe_273609-9038.jpg?size=626&ext=jpg&ga=GA1.1.1067247315.1677148623&semt=ais" alt="" />
                  <div className="gig-page-reviews-info">
                    <span className='gig-page-reviews-username'>ballen1482</span>
                    <div className="gig-page-reviews-user-country">
                      <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1f7.png" alt="" />
                      <span className='gig-page-reviews-country-name'>Türkiye</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span className='star-size'>5</span>
                  <span className='gig-page-seperate'>|</span>
                  <span className='gig-page-reviews-date'>1 week ago</span>
                </div>
                <p>Working with Jason was something incredible,
                  it's like he got inside my head and perfectly understood what I wanted.
                  Work done to perfection, a true PROFESSIONAL</p>
                  <div className="gig-page-reviews-helpful">
                    <span>Helpful?</span>
                    <span>Yes</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/126/126473.png" alt="" />
                    <span>No</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/15/15107.png?w=1380&t=st=1678821099~exp=1678821699~hmac=045223895a9a31890b1393ed7527b189aa4c247c4882ec1565997fcaed1dff60" alt="" />
                  </div>
              </div>
              <hr />
             
              
            </div>
        </div>
        <div className="right">
          <div className="gig-page-container">
              <div className="gig-page-price">
                <h3>AI Generated Image</h3>
                <h3>€53.94</h3>
                
            </div>
            <p className='gig-slidebar-details-text'>2 Variation Images to explore your concept. [Portrait] High upscale included</p>
            <div className="gig-page-sidebar-details">
              <div className="delivery-revisions-date">
              <div className="gig-page-delivery-date">
                <img src="https://cdn-icons-png.flaticon.com/512/992/992700.png" alt="" />
                <span>5 Days Delivery</span>
              </div>
              <div className="gig-page-revisions-date">
                <img src="https://cdn-icons-png.flaticon.com/512/7204/7204779.png" alt="" />
                <span>3 Revisions</span>
              </div>

              </div>
              <ul className='gig-sidebar-features'>
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/512/5299/5299035.png" alt="" />
                  <span>Prompt writing</span>
                </li>
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/512/5299/5299035.png" alt="" />
                  <span>Prompt delivery</span>
                </li>
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/512/5299/5299035.png" alt="" />
                  <span>Generated image examples</span>
                </li>
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/512/5299/5299035.png" alt="" />
                  <span>Artwork delivery</span>
                </li>
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/512/5299/5299035.png" alt="" />
                  <span>Image upscaling</span>
                </li>
              </ul>
            </div>
            <button className='gig-page-sidebar-details-button'>Continue</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Gig