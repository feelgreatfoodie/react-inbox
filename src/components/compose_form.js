import React, { Component } from 'react'


class ComposeForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
      this.props.postMessage({
      subject: this.refs.subject.value,
      body: this.refs.body.value
    })
  }

render(){
  return (
  <form className={`form-horizontal well ${this.props.hidden}`} onSubmit={this.handleSubmit}>
    <div className="form-group">
      <div className="col-sm-8 col-sm-offset-2">
        <h4>Compose Message</h4>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
      <div className="col-sm-8">
        <input type="text" ref="subject" className="form-control" id="subject" placeholder="Enter a subject" name="subject" />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="body" className="col-sm-2 control-label">Body</label>
      <div className="col-sm-8">
        <textarea name="body" ref="body" id="body" className="form-control"></textarea>
      </div>
    </div>
    <div className="form-group">
      <div className="col-sm-8 col-sm-offset-2">
        <input type="submit" value="Send" className="btn btn-primary"/>
      </div>
    </div>
  </form>

)}
}

export default ComposeForm
