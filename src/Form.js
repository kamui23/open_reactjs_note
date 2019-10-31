import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)
		this.initialState = {
			content: ''
		}
		this.state = this.initialState
	}
	handleChange = event => {
		const {name, value} = event.target
		this.name = name
		this.setState({
			content: value
		})
	}
	render() {
		const { submitHandle } = this.props
		const { content } = this.state
		const clickEvent = event => {
			if (content !== '') {
				submitHandle(this.state.content)
				this.setState(this.initialState)
			}
		}
		return(
			<div className="App-form-container">
				<form className="form-inline">
				  <label className="sr-only">Enter the note</label>
				  <div className="input-group mb-2 mr-sm-2">
				    <div className="input-group-prepend">
				      <div className="input-group-text">Enter the note</div>
				    </div>
				    <input type="text" className="form-control" value={content} onChange={this.handleChange} />
				  </div>
				  <button className="btn btn-primary mb-2" type="button" value="Submit" onClick={clickEvent}>Submit</button>
				</form>
			</div>
		)
	}
}

export default Form;