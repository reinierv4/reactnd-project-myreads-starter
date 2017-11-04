import React from 'react';
import BookListTitle from './BookListTitle'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'


class BookList extends React.Component{
	

	render(){
		return(
			<div className="list-books">
				<BookListTitle title="My Reads"/>
				<div className="list-books-content">
                	<Bookshelf 
                		shelfTitle="Currently Reading"
                		books = {this.props.books.filter(book => book.shelf === "currentlyReading")}
                	/>
                	<Bookshelf 
                		shelfTitle="Want to Read"
                		books = {this.props.books.filter(book => book.shelf === "wantToRead")}
                	/>
                	<Bookshelf 
                		shelfTitle="Read"
                		books = {this.props.books.filter(book => book.shelf === "read")}
                	/>
                </div>
            </div>
				
		)
	}
}

export default BookList