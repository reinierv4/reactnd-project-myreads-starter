import React from 'react'
import { Route } from 'react-router-dom'

const Book = (props) => {
	return(
		<li key={props.book.id}>
			<div className="book">
			    <div className="book-top">
	                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})`}}></div>
	                <div className="book-shelf-changer">
		                <select onChange = {(event) => props.onChangeShelf(props.book, event.target.value)}>
							<option 
							    value="none" 
							    disabled
							    selected>
							       	Move to...
							</option>
							<option 
							    value="currentlyReading" 
							    selected={props.book.shelf==="currentlyReading"}>
							    Currently Reading
							</option>
							<option 
							    value="wantToRead" 
							    selected={props.book.shelf==="wantToRead"}>
							    	Want to Read
							</option>
							<option 
							    value="read" 
							    selected={props.book.shelf==="read"}>
							    Read
							</option>
							<Route 
				          		exact path="/"
				          		render= {() => (
							        <option value="none">None</option>
							    )}
							/>
						</select>
					</div>
				</div>
			    <div className="book-title">{props.book.title}</div>
			    <div className="book-authors">{props.book.authors}</div>
			</div>
		</li>
	)
	
}

export default Book