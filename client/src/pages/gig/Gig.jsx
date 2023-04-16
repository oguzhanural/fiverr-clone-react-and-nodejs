import React from 'react'
import GigSlider from '../../components/gigSlider/GigSlider'
// import Slide from '../../components/Slide/Slide'
import { useParams } from "react-router-dom"
import "./Gig.scss"
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import Reviews from '../../components/reviews/Reviews'

const Gig = () => {

  const { id } = useParams();
  //console.log(id);

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () => 
      newRequest.get(
        `/gigs/single/${id}`)
        .then((res)=>{
        return res.data;
      }),
  });
   //console.log(data);


   const userId = data?.userId;

   const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ['user'],
    queryFn: () => 
      newRequest.get(
        `/users/${userId}`)
        .then((res)=>{
        return res.data;
      }),
      enabled: !!userId,
  });
  // console.log(data.userId);


  return (
    <div className='gig'>
      {
        isLoading ? "Loading..." : error ? "Something went wrong"+error :
      <div className="container">
        <div className="left">
        <span className="breadCrumbs">
            FIVERR {'>'} GRAPHICS DESIGN</span>
            <h1>{data.title}</h1>

            {isLoadingUser? (
              "Loading..."
              ) : errorUser ? (
                "Something went wrong! User error"
                ) :(
              <div className="user">
                <img className='userPicture' src={dataUser.img} alt="" />
                <span className='gig-page-username-up'>{dataUser.username}</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span className='star-size'>5</span>
                </div> 
            </div>
            )}
            
            <GigSlider />
            <h2>About This Gig</h2>
            <p className='lorem-p'>{data.desc}</p>
            <h2>About The Seller</h2>
            {isLoadingUser? (
              "Loading"
              ) : errorUser ? (
                "Something went wrong! User error"
                ) :(
              <div className="seller-section">
                <div className="seller-user-pictures">
                <img src="https://img.freepik.com/free-photo/portrait-cute-happy-girl-smiling-touching-her-curly-red-hair_176420-9241.jpg?size=626&ext=jpg&ga=GA1.2.1067247315.1677148623&semt=sph" alt="" />
                </div>
                <div className="seller-user">
                  <span>{data.username}</span>
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
            )}
            
            {isLoadingUser? (
              "Loading..."
              ) : errorUser ? (
                "Something went wrong! User error"
                ) :(
            <div className="user-box-seller">
              <div className="user-box-items">
                 <ul className='user-stats'>
                  <li>From
                    <strong>{dataUser.country}</strong>
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
                 
                 <p>
                  {dataUser.desc}
              </p>
              </div>
            </div>
            )}

          {/* reviews component here */}
          <Reviews gigId = {id}/>

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
                {
                data.features.map((feature) => (
                  <li key={feature}>
                  <img src="https://cdn-icons-png.flaticon.com/512/5299/5299035.png" alt="" />
                  <span>{feature}</span>
                </li>
                ))
                }
              </ul>
            </div>
            <button className='gig-page-sidebar-details-button'>Continue</button>
          </div>
          
        </div>
      </div>
      }
    </div>
  )
}

export default Gig