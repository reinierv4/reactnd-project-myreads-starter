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
                	/>
                	<Bookshelf 
                		shelfTitle="Want to Read"
                		books={props.books.filter(book => book.shelf==="wantToRead")}
                	/>
                	<Bookshelf 
                		shelfTitle="Read"
                		books={props.books.filter(book => book.shelf==="read")}
                	/>
                </div>
            </div>
            <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
        </div>
    
	)
	
}

export default BookList