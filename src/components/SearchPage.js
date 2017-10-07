import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

import Book from './Book';

class SearchPage extends Component {

    state={ 
        searchedBooks : [],
        errorString : ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const queryString = e.target.elements.searchField.value;

        BooksAPI.search(queryString, 20).then( searchedBooks => {
            
            if(!searchedBooks.error){
                //searchedBooks.map(book => console.log(book.title,',',book.shelf));
                this.setState({ 
                    searchedBooks,
                    errorString : ''
                });
            } else {
                this.setState({
                    searchedBooks : [],
                    errorString: 'The Search you entered is unsupported.'
                })
            }

        })
    }

    render(){
        const { searchedBooks } = this.state;

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <form onSubmit={this.handleSubmit}>
                    <input name="searchField" type="text" placeholder="Search by title or author"/>
                </form>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

                { searchedBooks.map( book => <Book key={book.id} book={book} />) }

              </ol>
            </div>
          </div>
        )
    }

}

export default SearchPage;