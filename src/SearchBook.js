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
      booksFromSearch: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const searchText = event.target.value;
    if(searchText === ""){
      this.setState({
        value: searchText,
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
    BooksAPI.search(searchText, 10).then( (booksFromSearch) => {
      this.setState({
        booksFromSearch
      })
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
          {this.state.booksFromSearch &&
              this.state.booksFromSearch.length > 0 &&
                this.state.booksFromSearch.map(book => <Book book={book}/>) }
          </ol>
        </div>
      </div>
    )
  }
  		
	
}

export default SearchBook
