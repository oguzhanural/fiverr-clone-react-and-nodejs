import React from 'react'
import { Link } from 'react-router-dom'
import "./Orders.scss"

const Orders = () => {

  const currentUser = {
    id: 1,
    username: "Kay Carlson",
    isSeller: true
  };

  return (
    
     <div className='orders-page'>
      <div className="orders-page-container">
        <div className="orders-page-title">
          <h1>Orders</h1> 
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Titles</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Seller" : "Buyer"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='table-image' src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?w=1800&t=st=1679359161~exp=1679359761~hmac=ac9e7b721178d9550edbf371499a157a1221a14d4326ce0f5d3ac0d10d789c90" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='contact-button-image' src="https://cdn-icons-png.flaticon.com/512/9068/9068642.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='table-image' src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?w=1800&t=st=1679359161~exp=1679359761~hmac=ac9e7b721178d9550edbf371499a157a1221a14d4326ce0f5d3ac0d10d789c90" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
            <img className='contact-button-image' src="https://cdn-icons-png.flaticon.com/512/9068/9068642.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='table-image' src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?w=1800&t=st=1679359161~exp=1679359761~hmac=ac9e7b721178d9550edbf371499a157a1221a14d4326ce0f5d3ac0d10d789c90" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
            <img className='contact-button-image' src="https://cdn-icons-png.flaticon.com/512/9068/9068642.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='table-image' src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?w=1800&t=st=1679359161~exp=1679359761~hmac=ac9e7b721178d9550edbf371499a157a1221a14d4326ce0f5d3ac0d10d789c90" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
            <img className='contact-button-image' src="https://cdn-icons-png.flaticon.com/512/9068/9068642.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='table-image' src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?w=1800&t=st=1679359161~exp=1679359761~hmac=ac9e7b721178d9550edbf371499a157a1221a14d4326ce0f5d3ac0d10d789c90" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
            <img className='contact-button-image' src="https://cdn-icons-png.flaticon.com/512/9068/9068642.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
    
  )
}

export default Orders