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
        const { searchedBooks, errorString } = this.state;
        const { onShelfChange, books } = this.props;

        // If any of the books returned from the search is in any or our shelves,
        // use the information from the shelf.
        const booksToRender = searchedBooks.map(searchedBook => 
            books.find( (book)=> book.id === searchedBook.id ) || searchedBook  );

        return(
             
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input name="searchField" type="text" placeholder="Search by title or author"/>
                </form>

              </div>
            </div>

            { errorString ? 
                (
                    <div style={{paddingTop: '80px'}}>{errorString}</div>
                )
                :
                (<div className="search-books-results">
                <ol className="books-grid">

                    { booksToRender.map( book => <Book key={book.id} book={book} onShelfChange={onShelfChange} />) }

                </ol>
                </div>) 
            }


          </div> 
        )
    }

}

export default SearchPage;