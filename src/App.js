import ComposeForm from './components/compose_form'
import MessageList from './components/message_list'
import messages from './messageData.json'
import React, { Component } from 'react'
import ToolBar from './components/toolbar'
import './index.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { messages }
  }

  handleClick = (id, quality) => {
    // quality variable will refer to either selected or starred
    const x = this.state.messages

    const messageDelta = x.filter(e => e.id === id)[0]
    messageDelta[quality] ? messageDelta[quality] = false : messageDelta[quality] = true

    const newMessages = [...x.slice(0,id-1), messageDelta, ...x.slice(id)]
    this.setState( messages: newMessages)
  }

  handleDelete = (messages) => {
    const newMessages = messages.filter(e => !e.selected)
    this.setState( {messages: newMessages} )
  }

  handleSelectAll = () => {
    const x = this.state.messages
    let newMessages = []

    const selectedMessages = x.filter(e => e.selected === true).length
    selectedMessages < x.length ?
      newMessages = x.map(e => e.selected = true) :
      newMessages = x.map(e => e.selected = false)

    this.setState(messages: newMessages)
  }

  handleReadUnread = (messages, readStatus) => {
    // variable readStatus will be 'read' or 'unread'
    let newMessages
    readStatus === 'unread' ?
      newMessages = messages.map(e => e.selected ? e.read = false : null) :
      newMessages = messages.map(e => e.selected ? e.read = true : null)
    this.setState(messages: newMessages)
  }

  render() {
    return (
      <div className="App">
        <ToolBar
          messages={ this.state.messages }
          handleDelete={ this.handleDelete }
          handleSelectAll={ this.handleSelectAll }
          handleReadUnread={ this.handleReadUnread } />
        <ComposeForm />
        <MessageList
        messages={ this.state.messages }
        handleClick={ this.handleClick } />
      </div>
    )
  }
}

export default App
