  import React from 'react'
  import { Link } from 'react-router-dom'
  import "./Messages.scss"
  import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
  import newRequest from '../../utils/newRequest';
  import moment from "moment";

  const Messages = () => {

    const queryClient = new QueryClient();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
     
    const { isLoading, error, data } = useQuery({
      queryKey: ['conversations'],
      queryFn: () => 
        newRequest.get(
          `/conversations`)
          .then((res)=>{
          return res.data;
        }),
    });
    // console.log(data);

    const mutation = useMutation({
      mutationFn: (id) =>{
        return newRequest.put(`/conversations/${id}`);
      },
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['conversations'] })
      },
    })

    const handleRead = (id) => {
      mutation.mutate(id);
    }
    return (
          <div className='messages-page'>
        {isLoading ? (
          "Loading..."
          ) : error ? (
          "Something went wrong!"
          ) : 
          (
          <div className="messages-page-container">
            <div className="messages-page-title">
              <h1>Messages</h1> 
            </div>
            <table>
              <tbody>
                <tr>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
              {data.map(conversation => (
                <tr className='message-page-active-message' key={conversation.id}>
                <td>
                {currentUser.isSeller? conversation.buyerId : conversation.sellerId}
                </td>
                <td> <Link to="/message/123" className='link'>{conversation?.lastMessage?.substring(0,100)}...</Link></td>
                <td>{moment(conversation.updatedAt).fromNow()}</td>
                <td>
                  {((currentUser.isSeller && !conversation.readBySeller) || 
                  (!currentUser.isSeller && !conversation.readByBuyer))
                  &&(
                    <button className='message-read-button' onClick={()=>handleRead(conversation.id)}>Mark as Read</button>
                    )}
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

  export default Messages