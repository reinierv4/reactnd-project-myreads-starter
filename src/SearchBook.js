import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import * as Util from './utils.js'

class SearchBook extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      booksFromSearchListed: [],
      booksFromSearch: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const searchText = event.target.value;
    if(searchText === ""){
      this.setState({
        value: searchText,
        booksFromSearchListed: [],
        booksFromSearch: []
      })
    }else{
      this.setState({
        value: searchText
      },
        Util.debounce( () => ( this.updateSearchResults(searchText) , 1000))
      )
    }
  }
  
  updateSearchResults(searchText){
    BooksAPI.search(searchText, 10).then( (booksFromSearching) => {
      const booksFromSearchListed = this.props.books.filter( b => booksFromSearching.filter(books => books.id===b.id).length > 0 )
      const booksFromSearch = booksFromSearching.filter( b => this.props.books.filter(books => books.id===b.id).length === 0 )
      this.setState({
        booksFromSearchListed,
        booksFromSearch
      })
    }).catch(function(e) {
      console.log(e);
    })
  }

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search"> Close </Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              value={this.state.value} 
              onChange={this.handleChange} 
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.booksFromSearchListed &&
              this.state.booksFromSearchListed.length > 0 &&
                this.state.booksFromSearchListed.map(book => <Book book={book} onChangeShelf={this.props.onChangeShelf}/>)
          }
          {this.state.booksFromSearch &&
              this.state.booksFromSearch.length > 0 &&
                this.state.booksFromSearch.map(book => <Book book={book} onChangeShelf={this.props.onChangeShelf}/>)
          }
          </ol>
        </div>
      </div>
    )
  }
  		
	
}

export default SearchBook
