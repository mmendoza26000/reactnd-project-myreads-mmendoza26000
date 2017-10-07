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
    });

  }

  onShelfChange = (newShelf, theBook) => {
    console.log('Im in the app');
    console.log(newShelf);
    console.log(theBook.title);
    theBook.shelf = newShelf;

    BooksAPI.update(theBook, newShelf);

    this.setState( prevState => ({
      books : prevState.books.filter(book => book.id !== theBook.id ).concat([theBook]) 
    }))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          
          <Route exact path="/" render={ () => 
            <MainPage 
              books={this.state.books}
              shelves={this.state.shelves} 
              onShelfChange={this.onShelfChange} />} />

          <Route path="/search" render={ ()=>
            <SearchPage
              books={this.state.books}
              onShelfChange={this.onShelfChange} />} />
          
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp;

