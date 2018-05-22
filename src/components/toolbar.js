import React, { Component } from 'react'
import '../index.css'

class ToolBar extends Component {
  constructor(props) {
    super(props)

    const unreadMessages = props.messages.filter(e => e.read === false).length

    this.state = {
      unreadMessages: unreadMessages
    }
  }

  render() {
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{this.state.unreadMessages}</span>
            unread messages
          </p>

          <a className="btn btn-danger">
            <i className="fa fa-plus"></i>
          </a>

          <button className="btn btn-default disabled">
            <i className="fa fa-check-square-o"></i>
          </button>

          <button className="btn btn-default disabled">
            Mark As Read
          </button>

          <button className="btn btn-default disabled">
            Mark As Unread
          </button>

          <select className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-defalut">
            <i className="fa fa-trash-o"></i>
          </button>

        </div>
      </div>
    )
  }
}

export default ToolBar
