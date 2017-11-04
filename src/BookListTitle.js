import React, {Component} from 'react'

const BookListTitle = (props) =>  {
	return (
		<div className="list-books-title">
            <h1>{props.title}</h1>
        </div>
	)
} 
export default BookListTitle