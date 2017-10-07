import React from 'react';
import * as BooksAPI from './BooksAPI';

import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';

import { BrowserRouter, Route } from 'react-router-dom';


import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: {
      currentlyReading : "Currently Reading",
      wantToRead : "Want to Read",
      read : "Read"
    }
  }

  componentDidMount(){
    BooksAPI.getAll().then( books => {
      this.setState({ books });
      books.map(book => console.log(book.title,',',book.imageLinks.smallThumbnail));
      console.log('books:', books);
    });

  }


  render() {
    return (
      <BrowserRouter>
        <div className="app">
          
          <Route exact path="/" render={ () => 
              <MainPage 
                books={this.state.books}
                shelves={this.state.shelves} />} />

          <Route path="/search" component={SearchPage} />
          
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp;

