import React from 'react'
import { Link } from 'react-router-dom'
import "./MyGigs.scss"
import getCurrentUser from "../../utils/getCurrentUser"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const MyGigs = () => {

  const currentUser = getCurrentUser();
  
  const quertClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['myGigs'],
    queryFn: () => 
      newRequest.get(
        `/gigs?userId=${currentUser._id}`)
        .then((res)=>{
        return res.data;
      }),
  });
  console.log(data);

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: ()=>{
      quertClient.invalidateQueries(["myGigs"]);
    }
  });

  const handleDelete = (gigId) => {
     mutation.mutate(gigId);
  };


  return (
    <div className='mygigs-page'>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Something went wrong!"
        ) : (
        <div className="mygigs-page-container">
          <div className="mygigs-page-title">
            <h1>Gigs</h1>
            <Link to="/add"><button className='add-new-gig-button'>Add New Gig</button></Link>
          </div>
          <table>
          <tbody>
          <tr>
            <th>Image</th>
            <th>Titles</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          {data.map(gig=>(
            <tr key={gig._id}>
            <td>
              <img className='table-image' src={gig.coverImg} alt="" />
            </td>
            <td>{gig.title}</td>
            <td>{gig.price}</td>
            <td>{gig.sales}</td>
            <td>
              <img className='delete-button-image' src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt="" 
              onClick={()=>handleDelete(gig._id)}/>
            </td>
          </tr>
          ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  )
}

export default MyGigs