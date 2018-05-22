import React from 'react'
import Message from './message'

const MessageList = (props) => (
  <div className="messages">
    { props.messages.map(message => (
      <Message
        key={message.id}
        message={message}
        handleSelected={props.handleSelected}
        handleStarred={props.handleStarred}
       />
    ))}
  </div>
)

export default MessageList
