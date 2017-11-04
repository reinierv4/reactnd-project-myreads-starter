import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

class App extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({
        books
      })
    })
  }



  render() {
    return (
      <div className="app">
        <Route 
            path="/search"
            component={SearchBook}
          />
          <Route exact path="/" render={ () => (
            <div>
              <BookList 
              books={this.state.books} 
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
