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

  handleSelected = id => {
    const x = this.state.messages
    const messageDelta = x.filter(e => e.id === id)[0]

    messageDelta.selected ? messageDelta.selected = false : messageDelta.selected = true
    const newMessages = x.slice(0,id-1).concat(messageDelta, x.slice(id))
    console.log('hola', newMessages)
    this.setState( messages: newMessages)
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

  handleStarred = id => {
    const x = this.state.messages
    const messageDelta = x.filter(e => e.id === id)[0]
    messageDelta.starred ? messageDelta.starred = false : messageDelta.starred = true
    const newMessages = x.slice(0,id-1).concat(messageDelta, x.slice(id))

    this.setState( messages: newMessages)
  }

  render() {
    return (
      <div className="App">
        <ToolBar
          messages={this.state.messages}
          handleSelectAll={this.handleSelectAll} />
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
