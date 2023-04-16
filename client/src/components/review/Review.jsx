import React from 'react'
import "./Review.scss"
// import { useQuery } from '@tanstack/react-query';
// import newRequest from '../../utils/newRequest';

const Review = ( {review} ) => {

  console.log("içinde ne var");
  console.log(review);
  return (
    <div className="gig-page-review">
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
                <p>{review.desc}</p>
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
  )
}

export default Review