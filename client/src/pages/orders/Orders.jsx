import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Orders.scss"
import { useQuery } from "@tanstack/react-query"
import newRequest from '../../utils/newRequest'


const Orders = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      newRequest.get(
        `/orders`)
        .then((res)=>{
        return res.data;
      }),
  });
  console.log(data);
  
  const handleContact = async(order) => {
     const sellerId = order.sellerId;
     const buyerId = order.buyerId;
     const id = sellerId + buyerId; // our conversation id

     try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
     
    } catch (error) {
      if(error.response.status === 404) {
      const res = await newRequest.post(`/conversations/`,{
        to: currentUser.isSeller ? buyerId : sellerId
      });
      navigate(`/message/${res.data.id}`);
      }
    }
  }

  return (
    
     <div className='orders-page'>
      {isLoading ? (
        "Loading"
        ) : error ? (
          "Error"
          ) : (
      <div className="orders-page-container">
        <div className="orders-page-title">
          <h1>Orders</h1> 
        </div>
        <table>
          <tbody>
            <tr>
            <th>Image</th>
            <th>Titles</th>
            <th>Price</th> 
            <th>Contact</th>
          </tr>
          {
            data.map(order => (
              <tr key={order._id}>
            <td>
              <img className='table-image' src={order.img} alt="" />
            </td>
            <td>{order.title}</td>
            <td>{order.price}</td>
            <td>
              <img className='contact-button-image' src="https://cdn-icons-png.flaticon.com/512/9068/9068642.png" 
              alt="" onClick={() => handleContact(order)}/>
            </td>
          </tr>
            ))
          }
          </tbody>
        </table>
      </div>)}
    </div>
    
  )
}

export default Orders