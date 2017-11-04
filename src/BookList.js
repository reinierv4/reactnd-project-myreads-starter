import React from 'react';
import BookListTitle from './BookListTitle'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'


class BookList extends React.Component{
	state = {
		currentlyReading: [],
		wantToRead: [],
		read: []
	}
	
	componentDidMount() {
		BooksAPI.getAll().then( (books) => {
			const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
			const wantToRead = books.filter(book => book.shelf === "wantToRead");
			const read = books.filter(book => book.shelf === "read");
			this.setState({
				currentlyReading, wantToRead, read
			})
		})
	}

	render(){
		return(
			<div className="list-books">
				<BookListTitle title="My Reads"/>
				<div className="list-books-content">
                	<Bookshelf 
                		shelfTitle="Currently Reading"
                		books = {this.state.currentlyReading}
                	/>
                	<Bookshelf 
                		shelfTitle="Want to Read"
                		books = {this.state.wantToRead}
                	/>
                	<Bookshelf 
                		shelfTitle="Read"
                		books = {this.state.read}
                	/>
                </div>
            </div>
				
		)
	}
}

export default BookList