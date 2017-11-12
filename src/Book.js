import React from 'react'
import { Route } from 'react-router-dom'

const Book = (props) => {
	return(
		<li key={props.book.id}>
			<div className="book">
			    <div className="book-top">
	                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})`}}></div>
	                <div className="book-shelf-changer">
	                <Route 
          				path="/search"
          				render= {() => (
					        <select onChange = {(event) => props.onChangeShelf(props.book, event.target.value)}>
						        <option 
						        	value="none" 
						        	selected
						        	disabled>
						        	Move to...
								</option>
						        <option 
						        	value="currentlyReading" 
						        	>
						        	Currently Reading
						        </option>
						        <option 
						        	value="wantToRead" 
						        	>
						        	Want to read
						        </option>
						        <option 
						        	value="read" 
						        >
						        	Read
						        </option>
						    </select>
					    )}
					/>
					<Route 
          				exact path="/"
          				render= {() => (
					        <select onChange = {(event) => props.onChangeShelf(props.book, event.target.value)}>
						        <option 
						        	value="none" 
						        	disabled>
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
						        	selected={props.book.shelf==="read"}
						        >
						        	Read
						        </option>
						        <option value="none">None</option>
					        </select>
					    )}
					/>
				    </div>
				</div>
			    <div className="book-title">{props.book.title}</div>
			    <div className="book-authors">{props.book.authors}</div>
			</div>
		</li>
	)
	
}

export default Book