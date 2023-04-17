import React from 'react'
import { Link } from 'react-router-dom'
import "./Orders.scss"
import { useQuery } from "@tanstack/react-query"
import newRequest from '../../utils/newRequest'


const Orders = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      newRequest.get(
        `/orders`)
        .then((res)=>{
        return res.data;
      }),
  });

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
              <img className='contact-button-image' src="https://cdn-icons-png.flaticon.com/512/9068/9068642.png" alt="" />
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