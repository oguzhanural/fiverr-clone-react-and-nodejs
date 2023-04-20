import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Message.scss"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

const Message = () => {

  const {id} = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['messages'],
    queryFn: () => 
      newRequest.get(
        `/messages/${id}`)
        .then((res)=>{
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) =>{
      return newRequest.post(`/messages`, message);
    }, 
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['messages'] })
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });

    e.target[0].value = "";
     
  }

  return (
    
    <div className='message'>
      <div className="message-page-container">
        <span className='message-page-breadcrumbs'>
        <Link to="/messages" className='link'>MESSAGES {'>'} John Doe</Link>
        </span>
        {isLoading ? "Loading..." : error ? "Something went wrong!" :
          <div className="message-page-messages">
        {data.map(message =>(
          <div className={message.userId === currentUser._id ? "owner message-page-item" : "message-page-item"} key={message._id}>
            <img className='message-page-user-image' src="https://img.freepik.com/free-photo/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background_273609-32160.jpg?w=2000&t=st=1679164566~exp=1679165166~hmac=692e1c0172b097e7907e358cc3a4360f90d4baed2ba1c2ab674515ee6c17af92" alt="" />
            <p>
              {message.desc}
            </p>
          </div>
        ))
          }
        </div>
        }
        <hr />
        <form className="message-page-message-write" onSubmit={handleSubmit}>
          <textarea name="" placeholder='Write a message...' id="" cols="30" rows="10"></textarea>
          <button type="submit" className='message-page-message-send-button'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Message