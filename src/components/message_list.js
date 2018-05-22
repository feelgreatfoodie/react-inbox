import React from 'react'
import Message from './message'

const MessageList = ({messages}) => (
  <div className="messages">
      { messages.map(message => <Message key={message.id} message= {message} />)}
  </div>
)

export default MessageList
