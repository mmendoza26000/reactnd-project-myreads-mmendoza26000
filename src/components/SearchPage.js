import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';

import Book from './Book';

class SearchPage extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    state={ 
        searchedBooks : [],
        errorString : '',
        queryString: ''
    };

    handleUserInput = (e) => {
        //e.preventDefault();
        const queryString = e.target.value;

        if(queryString.length > 0){
            BooksAPI.search(queryString, 20).then( searchedBooks => {

                if(!searchedBooks.error){
                    //searchedBooks.map(book => console.log(book.title,',',book.shelf));
                    this.setState({ 
                        searchedBooks,
                        errorString : '',
                        queryString
                    });
                } else {
                    this.setState({
                        searchedBooks : [],
                        errorString: 'The Search you entered is unsupported.',
                        queryString
                    });
                }

            }).catch(error=> {
                this.setState({ 
                    searchedBooks: [],
                    errorString : '',
                    queryString
                });
                 })
        } else {
            this.setState({ 
                searchedBooks: [],
                errorString : '',
                queryString
            });
        }
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
                
                    <input 
                        name="searchField" 
                        type="text" 
                        placeholder="Search by title or author"
                        onChange={this.handleUserInput} />
                

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