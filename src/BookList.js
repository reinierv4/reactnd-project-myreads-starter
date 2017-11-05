import React from 'react';
import BookListTitle from './BookListTitle'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'


const BookList = (props) => {
	
	return(
		<div>
            <div className="list-books">
				<BookListTitle title="My Reads"/>
				<div className="list-books-content">
                	<Bookshelf 
                		shelfTitle="Currently Reading"
                		books={props.books.filter(book => book.shelf==="currentlyReading")}
                        onChangeShelf = {props.onChangeShelf}
                	/>
                	<Bookshelf 
                		shelfTitle="Want to Read"
                		books={props.books.filter(book => book.shelf==="wantToRead")}
                        onChangeShelf = {props.onChangeShelf}
                	/>
                	<Bookshelf 
                		shelfTitle="Read"
                		books={props.books.filter(book => book.shelf==="read")}
                        onChangeShelf = {props.onChangeShelf}
                	/>
                </div>
            </div>
        </div>
    
	)
	
}

export default BookList