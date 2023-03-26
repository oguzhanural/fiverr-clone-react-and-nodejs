import React from 'react'
import { Link } from 'react-router-dom'
import "./MyGigs.scss"

const MyGigs = () => {
  return (
    <div className='mygigs-page'>
      <div className="mygigs-page-container">
        <div className="mygigs-page-title">
          <h1>Gigs</h1>
          <Link to="/add"><button className='add-new-gig-button'>Add New Gig</button></Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Titles</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='table-image' src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?w=1800&t=st=1679359161~exp=1679359761~hmac=ac9e7b721178d9550edbf371499a157a1221a14d4326ce0f5d3ac0d10d789c90" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete-button-image' src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt="" />
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
              <img className='delete-button-image' src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt="" />
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
              <img className='delete-button-image' src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt="" />
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
              <img className='delete-button-image' src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt="" />
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
              <img className='delete-button-image' src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs