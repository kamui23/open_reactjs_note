import React, { Component } from 'react'

const TitleListing = () => {
	return <h1>Listing My Note</h1>
}

const ListingBody = props => {
	const { done, reopen } = props
	const status = idx => {
		if (done.indexOf(idx) !== -1) {
			return 'done'
		}
		else if(reopen.indexOf(idx) !== -1) {
			return 're-open'
		}
		return 'inprocess'
	}
	const listNote = props.notes.map((noteItem, idx) => {
		return (
			<div className="list-group-item list-group-item-action" key={idx}>
		    <div className="d-flex w-100 justify-content-between">
		      <p className="mb-1">{noteItem}</p>
		      <small>{status(idx)}</small>
		    </div>
		    <small>
		    	<div className="btn-toolbar">
						<div className="btn-group mr-2">
							<button className="btn btn-warning btn-sm" onClick={() => props.removeNote(idx)}>Remove</button>
						</div>
						<div className="btn-group mr-2">
							<button type="button" className="btn btn-success btn-sm" onClick={() => props.tickDone(idx)}>
							  Tick-Done <span className="badge badge-light">&#10003;</span>
							</button>
						</div>
						<div className="btn-group mr-2">
							<button type="button" className="btn btn-info btn-sm" onClick={() => props.reopenNote(idx)}>
							  Re-Open <span className="badge badge-light">&#10003;</span>
							</button>
						</div>
					</div>
		    </small>
		  </div>
		)
	})
	return <div>{listNote}</div>
}

class Listing extends Component {
	render() {
		const { notes, removeNote, done, tickDone, reopen, reopenNote } = this.props
		return(
			<div className="App-listing-container">
				<TitleListing />
				<div className="list-group">
					<ListingBody notes={notes} removeNote={removeNote} done={done} tickDone={tickDone} reopen={reopen} reopenNote={reopenNote} />
				</div>
			</div>
		)
	}
}

export default Listing;