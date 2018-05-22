import React, { Component } from 'react'
import '../index.css'

class Message extends Component {

  render() {

    return (
      <div
        className={`row message
          ${this.props.message.selected ? 'selected' : null} ${this.props.message.read ? 'read': 'unread'}`}
        >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox"
                onChange={this.props.handleSelected.bind(null, this.props.message.id)}
                checked={this.props.message.selected ? 'checked' : ''}
              />
            </div>
            <div className="col-xs-2">
              <i onClick={this.props.handleStarred.bind(null, this.props.message.id)}
                className={this.props.message.starred ? "star fa fa-star" : "star fa fa-star-o"}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {this.props.message.labels.map(e => <span className="label label-warning">{e}</span>
        )}
          <a href="#">
            {this.props.message.subject}
          </a>
        </div>
      </div>
    )
  }
}

export default Message
