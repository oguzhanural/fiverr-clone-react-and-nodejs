import React from 'react'
import "./Reviews.scss"
import Review from '../review/Review'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

const Reviews = ({gigId}) => {

  const { isLoading, error, data } = useQuery({
    queryKey: ['reviews'],
    queryFn: () => 
      newRequest.get(
        `/reviews/${gigId}`).then((res)=>{
        return res.data;
      }),
  });

  return (
     
    <div className="all-reviews">
      <h2>Reviews</h2>
      {
        isLoading
        ? " Loading..."
        : error ? "Error!"
        : data.map((reviev) => <Review key={reviev._id} reviev = {reviev} />)
      }
    </div>
  )
}

export default Reviews