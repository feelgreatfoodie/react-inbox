import React from 'react'
import '../index.css'

const Message = ({ message, handleClick }) => (
      <div
        className={`row message ${ message.selected ? 'selected' : '' } ${ message.read ? 'read': 'unread' }`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox"
                checked={ message.selected ? 'checked' : '' }
                onClick={ handleClick.bind(null, message.id, 'selected') }
              />
            </div>
            <div className="col-xs-2">
              <i onClick={ handleClick.bind(null, message.id, 'starred') }
                className={ message.starred ? "star fa fa-star" : "star fa fa-star-o" }></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          { message.labels.map(e => <span className="label label-warning">{ e }</span> )}
          <span>
            { message.subject }
          </span>
        </div>
      </div>
    )

export default Message
