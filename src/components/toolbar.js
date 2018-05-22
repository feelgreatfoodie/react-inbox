import React, { Component } from 'react'
import '../index.css'

class ToolBar extends Component {
  render() {

    const unreadMessages = this.props.messages.filter(e => e.read === false).length
    const buttonActive = this.props.messages.filter(e => e.selected === true).length > 0 ? '' : 'disabled'
    console.log('hola', buttonActive)
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{unreadMessages}</span>
            unread messages
          </p>

          <a className="btn btn-danger">
            <i className="fa fa-plus"></i>
          </a>

          <button className={`btn btn-default ${buttonActive}`}>
            <i className="fa fa-check-square-o"></i>
          </button>

          <button className={`btn btn-default ${buttonActive}`}>
            Mark As Read
          </button>

          <button className={`btn btn-default ${buttonActive}`}>
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
