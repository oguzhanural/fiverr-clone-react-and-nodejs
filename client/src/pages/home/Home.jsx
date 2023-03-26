import React from 'react'
import Featured from '../../components/featured/Featured'
import FreelancersSlide from '../../components/freelancersSlide/FreelancersSlide'
import Slide from '../../components/Slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import "./Home.scss"


const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy/>
      <div className="popular-services-text">
        <h2>
        Popular professional services
        </h2>
      </div>
      <Slide/>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <ul className='title'> 
              <li>
                <h6>
                  <span>
                    <img src="./img/check.png" alt="" />
                  </span>
                  The best for every budget
                </h6>
                <p>
                Find high-quality services at every price point. No hourly rates, just project-based pricing.
                </p>
              </li>
              <li>
                <h6>
                  <span>
                    <img src="./img/check.png" alt="" />
                  </span>
                  Quality work done quickly
                </h6>
                <p>
                Find the right freelancer to begin working on your project within minutes.
                </p>
              </li>
              <li>
                <h6>
                  <span>
                    <img src="./img/check.png" alt="" />
                  </span>
                  Protected payments, every time
                </h6>
                <p>
                Always know what you'll pay upfront. Your payment isn't released until you approve the work.
                </p>
              </li>
              <li>
                <h6>
                  <span>
                    <img src="./img/check.png" alt="" />
                  </span>
                  24/7 support
                </h6>
                <p>
                Questions? Our round-the-clock support team is available to help anytime, anywhere.
                </p>
              </li>
            </ul>
          </div>
          <div className="item">
            <img className='video720' src="./img/selling-proposition-still-1400-x1.png"></img>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1 className='font-domaine'>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
            <div className="title">
              <img className='check-' src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img className='check-' src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img className='check-' src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button className='explore-button'>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img className='right-image' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="freelancer-slide-text">
        <h2>
        Get inspired with projects made by our freelancers
        </h2>
      </div>
      <FreelancersSlide/>
      
    </div>

  );
};

export default Home