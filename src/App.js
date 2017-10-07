import React from 'react';
import * as BooksAPI from './BooksAPI';

import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';

import { BrowserRouter, Route } from 'react-router-dom';


import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount(){
    BooksAPI.getAll().then( books => {
      books.map(book => console.log(book.title,',',book.imageLinks.smallThumbnail));
      console.log('books:', books);
    });



    BooksAPI.search('Shakespeare', 5).then( books => {
      console.log('----------------');
      books.map(book => console.log(book.title,',',book.shelf));
      console.log('books:', books);
    });

  }


  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={MainPage} />
          <Route path="/search" component={SearchPage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp;

