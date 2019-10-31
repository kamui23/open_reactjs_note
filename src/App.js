import React, { Component } from 'react'
import IntroApp from './IntroApp'
import Listing from './Listing'
import Form from './Form'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		const stateBefore = {
			notes: [],
			done: [],
			reopen: []
		}
		if (!document.cookie.length) {
			document.cookie = JSON.stringify(stateBefore)
		}
		this.initialState = JSON.parse(document.cookie)
		this.state = this.initialState
	}
	removeNote = idx => {
		const { notes, done, reopen } = this.state
		const stateAfter = {
			notes: notes.filter((noteItem, key) => {
				return key !== idx
			}),
			done: done.filter((entry, key) => {
				return key !== entry
			}),
			reopen: reopen.filter((entry, key) => {
				return key !== entry
			})
		}
		this.setState(stateAfter)
		document.cookie = JSON.stringify(stateAfter)
	}
	submitHandle = noteItem => {
		const { notes, done, reopen } = this.state
		const stateAfter = {
			notes: [...notes, noteItem],
			done,
			reopen
		}
		this.setState(stateAfter)
		document.cookie = JSON.stringify(stateAfter)
	}
	tickDone = itemId => {
		const { notes, done, reopen } = this.state
		let doneAfter = []
		if (done.indexOf(itemId) === -1) {
			doneAfter = [...done,itemId]
		}
		else {
			doneAfter = [...done]
		}
		const stateAfter = {
			notes,
			done: doneAfter,
			reopen: reopen.filter((entry, id) => {
				return itemId !== entry
			})
		}
		this.setState(stateAfter)
		document.cookie = JSON.stringify(stateAfter)
	}
	reopenNote = itemId => {
		const { notes, done, reopen } = this.state
		let reopenAfter = []
		if (reopen.indexOf(itemId) === -1) {
			reopenAfter = [...reopen,itemId]
		}
		else {
			reopenAfter = [...reopen]
		}
		const stateAfter = {
			notes,
			done: done.filter((entry, id) => {
				return itemId !== entry
			}),
			reopen: reopenAfter
		}
		this.setState(stateAfter)
		document.cookie = JSON.stringify(stateAfter)
	}
  render() {
  	const { notes, done, reopen } = this.state
    return(
    	<div className="App-container">
	      <IntroApp />
	      <Listing notes={notes} removeNote={this.removeNote} done={done} tickDone={this.tickDone} reopen={reopen} reopenNote={this.reopenNote} />
	      <Form submitHandle={this.submitHandle} />
      </div>
    )
  }
}

export default App;
