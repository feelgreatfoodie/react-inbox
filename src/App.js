import MessageList from './components/message_list'
import React, { Component } from 'react'
import ToolBar from './components/toolbar'
import './index.css'
import messageData from './messageData.json'
import ComposeForm from './components/compose_form'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { messages: messageData }
  }

  render() {
    return (
      <div className="App">
        <ToolBar messages={this.state.messages}/>
        <ComposeForm />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
