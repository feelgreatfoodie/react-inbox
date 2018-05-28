import React from 'react'
import '../index.css'

const ToolBar = ({ handleDelete, handleLabels, handleSelectAll, handleReadUnread, messages, showComposeForm }) => {
    const selectedMessages = messages.filter(e => e.selected).length
    const unreadMessages = messages.filter(e => !e.read).length
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
            { unreadMessages === 1 ? 'unread message' : 'unread messages' }
          </p>

          <a className="btn btn-danger">
            <i className="fa fa-plus"
              onClick={ showComposeForm }></i>
          </a>

          <button className="btn btn-default">
            <i className={`fa ${boxType}`}
              onClick={ handleSelectAll }></i>
          </button>

          <button className="btn btn-default" onClick={ handleReadUnread.bind(null, messages, 'read') } disabled={ buttonActive }>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={ handleReadUnread.bind(null, messages, 'unread') } disabled={ buttonActive } >
            Mark As Unread
          </button>

          <select className="form-control label-select" onChange={(event) => handleLabels(messages, event.target.value, 'apply')} disabled={ buttonActive }>
            <option value="">Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" onChange={(event) => handleLabels(messages, event.target.value, 'remove')} disabled={ buttonActive }>
            <option value="">Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" onClick={ handleDelete.bind(null, messages) } disabled={ buttonActive }>
            <i className="fa fa-trash-o"></i>
          </button>

        </div>
      </div>
    )
  }

export default ToolBar
