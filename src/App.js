import MessageList from './components/message_list'
import React, { Component } from 'react'
import ToolBar from './components/toolbar'
import './index.css'
import messages from './messageData.json'
import ComposeForm from './components/compose_form'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { messages }
  }

  handleSelected = id => {
    const messageDelta = this.state.messages.filter(e => e.id === id)[0]
    messageDelta.selected ? messageDelta.selected = false : messageDelta.selected = true
    const newMessages = this.state.messages.slice(0,id-1).concat(messageDelta, this.state.messages.slice(id))
    this.setState( messages: newMessages)
  }

  handleStarred = id => {
    const messageDelta = this.state.messages.filter(e => e.id === id)[0]
    messageDelta.starred ? messageDelta.starred = false : messageDelta.starred = true
    const newMessages = this.state.messages.slice(0,id-1).concat(messageDelta, this.state.messages.slice(id))
    this.setState( messages: newMessages)
  }

  render() {
    return (
      <div className="App">
        <ToolBar
         messages={this.state.messages}/>
        <ComposeForm />
        <MessageList
        messages={this.state.messages}
        handleSelected={this.handleSelected}
        handleStarred={this.handleStarred}/>
      </div>
    )
  }
}

export default App
