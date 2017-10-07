import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {

    render(){

        const { title, books, name, onShelfChange } = this.props;

        const shelfBooks = books.filter( book => book.shelf === name )

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">

                    { shelfBooks.map( book => 
                        <Book key={book.id} book={book} onShelfChange={onShelfChange} />) }

                </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf;