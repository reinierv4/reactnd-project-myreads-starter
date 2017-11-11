import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
    this.changeShelf = this.changeShelf.bind(this);
  }
  

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({
        books
      })
    })
  }

  changeShelf(book, value) {
    BooksAPI.update(book, value).then( () => {
      BooksAPI.getAll().then( (books) => {
        this.setState({
          books
        })
      })
    });
    //This approach is much faster, is it allowed???
    // this.setState({
    //   books: this.state.books.map( b => {
    //     if(b.id===book.id){
    //       b.shelf=value 
    //     } 
    //     return b
    //   })
    // })
  }



  render() {
    return (
      <div className="app">
        <Route 
          path="/search"
          render= {() => (
            <SearchBook books={this.state.books} />
          )}
        />
          <Route exact path="/" render={ () => (
            <div>
              <BookList 
              books={this.state.books} 
              onChangeShelf={this.changeShelf}
              />
              <div className="open-search">
                  <Link to="/search">
                    Courses
                  </Link>
              </div>
            </div>
          )}/>
        
      </div>
    )
  }
}

export default App
