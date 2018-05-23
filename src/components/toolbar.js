import React from 'react'
import '../index.css'

const ToolBar = ({ messages, handleSelectAll, handleToolbarButton }) => {
    const unreadMessages = messages.filter(e => e.read === false).length
    const selectedMessages = messages.filter(e => e.selected === true).length
    let boxType, buttonActive

    selectedMessages > 0 ?
      selectedMessages === messages.length ?
        boxType = 'fa-check-square-o' :
        boxType = 'fa-minus-square-o' :
        (boxType = 'fa-square-o', buttonActive = 'disabled')


    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{ unreadMessages }</span>
            unread messages
          </p>

          <a className="btn btn-danger">
            <i className="fa fa-plus"></i>
          </a>

          <button className="btn btn-default">
            <i className={`fa ${boxType}`}
              onClick={ handleSelectAll }></i>
          </button>

          <button className="btn btn-default" onClick={ handleToolbarButton.bind(null, 'read') } disabled={ buttonActive }>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={ handleToolbarButton.bind(null, 'unread') } disabled={ buttonActive } >
            Mark As Unread
          </button>

          <select className="form-control label-select" disabled={ buttonActive }>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" disabled={ buttonActive }>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" disabled={ buttonActive }>
            <i className="fa fa-trash-o"></i>
          </button>

        </div>
      </div>
    )
  }

export default ToolBar
