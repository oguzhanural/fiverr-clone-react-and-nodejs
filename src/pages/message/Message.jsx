import React from 'react'
import { Link } from 'react-router-dom'
import "./Message.scss"

const Message = () => {
  return (
    <div className='message'>
      <div className="message-page-container">
        <span className='message-page-breadcrumbs'>
        <Link to="/messages" className='link'>MESSAGES {'>'} John Doe</Link>
        </span>
        <div className="message-page-messages">
          <div className="message-page-item">
            <img className='message-page-user-image' src="https://img.freepik.com/free-photo/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background_273609-32160.jpg?w=2000&t=st=1679164566~exp=1679165166~hmac=692e1c0172b097e7907e358cc3a4360f90d4baed2ba1c2ab674515ee6c17af92" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at eos porro quaerat. Doloremque totam, iure eligendi dignissimos doloribus placeat sint ullam odit tenetur reiciendis delectus unde dolor perferendis corrupti.
            </p>
          </div>
        </div>
        <div className="message-page-message-write">
          <textarea name="" placeholder='Write a message ' id="" cols="30" rows="10"></textarea>
          <button className='message-page-message-send-button'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message