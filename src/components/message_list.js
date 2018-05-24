import Message from './message'
import React from 'react'

const MessageList = ({ messages, handleClick }) => (
  <div className="messages">
    { messages.map(message => (
      <Message
        // key={ message.id }
        message={ message }
        handleClick={ handleClick }
       />
    ))}
  </div>
)

export default MessageList
