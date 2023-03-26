  import React from 'react'
  import { Link } from 'react-router-dom'
  import "./Messages.scss"

  const Messages = () => {

      const messages = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor voluptates iure repellat odit molestiae nam tenetur, deleniti beatae eos neque`;

    return (
          <div className='messages-page'>
        <div className="messages-page-container">
          <div className="messages-page-title">
            <h1>Messages</h1> 
          </div>
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className='message-page-active-message'>
              <td>
              John Doe
              </td>
              <td> <Link to="/message/123" className='link'>{messages.substring(0,100)}...</Link></td>
              <td>1 hour ago</td>
              <td>
                <button className='message-read-button'>Mark as Read</button>
              </td>
            </tr>
            <tr className='message-page-active-message'>
              <td>
              John Doe
              </td>
              <td><Link to="/message/123" className='link'>{messages.substring(0,100)}...</Link></td>
              <td>1 hour ago</td>
              <td>
              <button className='message-read-button'>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>
              John Doe
              </td>
              <td><Link to="/message/123" className='link'>{messages.substring(0,100)}...</Link></td>
              <td>1 hour ago</td>
            </tr>
            <tr>
              <td>
              John Doe
              </td>
              <td><Link to="/message/123" className='link'>{messages.substring(0,100)}...</Link></td>
              <td>1 hour ago</td>
            </tr>
            <tr>
              <td>
              John Doe
              </td>
              <td><Link to="/message/123" className='link'>{messages.substring(0,100)}...</Link></td>
              <td>1 hour ago</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }

  export default Messages