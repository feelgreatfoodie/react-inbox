import ComposeForm from './components/compose_form'
import MessageList from './components/message_list'
// import messages from './messageData.json'
import React, { Component } from 'react'
import ToolBar from './components/toolbar'
import './index.css'

class App extends Component {

  state = { messages: [], hidden: 'hidden' }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:8082/api/messages')
    const json = await response.json()
    this.setState({messages: json._embedded.messages})
  }

  handleClick = (id, quality) => {
    // quality variable will refer to either selected or starred
    const x = this.state.messages
    const messageDelta = x.filter(e => e.id === id)[0]
    const index = this.state.messages.indexOf(messageDelta)

    messageDelta[quality] ? messageDelta[quality] = false : messageDelta[quality] = true
    const newMessages = [...x.slice(0,index), messageDelta, ...x.slice(index+1)]

    const messageToPatch = {
      messageIds: [id],
      command: 'star',
      star: messageDelta[quality]
    }

    quality === 'starred' ? this.patchMessages(messageToPatch) : null
    this.setState({messages: newMessages})
  }

  handleDelete = (messages) => {
    const newMessages = messages.filter(e => !e.selected)

    this.patchMessages ({
      messageIds: messages.map(e => e.selected ? e.id : '' ).filter(a => Number.isInteger(a)),
      command: 'delete'
    })
    this.setState( {messages: newMessages} )
  }

  handleLabels = (messages, value, action) => {
    let newMessages
    // if action is apply, add label, otherwise remove label
    action === 'apply' && value.length > 0 ?
     newMessages = messages.map(e => e.selected && !e.labels.includes(value) ? e.labels.push(value) : null):
     newMessages = messages.map(e => e.selected && e.labels.includes(value) ? e.labels = e.labels.filter(l => l !== value) : null)

    this.patchMessages({
      messageIds: messages.map(e => e.selected ? e.id : '' ).filter(a => Number.isInteger(a)),
      command: action === 'apply' ? 'addLabel' : 'removeLabel',
      label: value
    })
    this.setState(messages: newMessages)
  }

  handleReadUnread = (messages, readStatus) => {
    // variable readStatus will be 'read' or 'unread'
    let newMessages
    readStatus === 'unread' ?
      newMessages = messages.map(e => e.selected ? ({...e, read: false}) : e) :
      newMessages = messages.map(e => e.selected ? ({...e, read: true}) : e)

    this.patchMessages({
      messageIds: messages.map(e => e.selected ? e.id : '' ).filter(a => Number.isInteger(a)),
      command: 'read',
      read: readStatus === 'unread' ? false : true
    })
    this.setState({messages: newMessages})
  }

  handleSelectAll = () => {
    const x = this.state.messages
    let newMessages

    const selectedMessages = x.filter(e => e.selected === true).length
    selectedMessages < x.length ?
      newMessages = x.map(e => ({...e, selected: true})) :
      newMessages = x.map(e => ({...e, selected: false}))

    this.setState({messages: newMessages})
  }

  patchMessages = async (messagesToPatch) => {
    await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      body: JSON.stringify(messagesToPatch),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
  }

  postMessage = async (messageToPost) => {
    await fetch('http://localhost:8082/api/messages', {
      method: 'POST',
      body: JSON.stringify(messageToPost),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.setState({
      hidden: 'hidden',
      messages: [...this.state.messages, messageToPost]
    })
  }

  showComposeForm = () => this.setState({hidden: ''})

  render() {
    return (
      <div className="App">
        <ToolBar
          messages={ this.state.messages }
          handleDelete={ this.handleDelete }
          handleLabels={ this.handleLabels }
          handleSelectAll={ this.handleSelectAll }
          handleReadUnread={ this.handleReadUnread }
          showComposeForm={ this.showComposeForm } />
        <ComposeForm
          postMessage={ this.postMessage }
          hidden={ this.state.hidden }/>
        <MessageList
        messages={ this.state.messages }
        handleClick={ this.handleClick } />
      </div>
    )
  }
}

export default App
