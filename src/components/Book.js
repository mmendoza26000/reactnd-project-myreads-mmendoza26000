import React, { Component } from 'react';

class Book extends Component {


    onShelfChange = (e) => {
        const newShelf = e.target.value;
        const theBook = this.props.book;
        this.props.onShelfChange(newShelf, theBook);
    }

    render(){
        const { book } = this.props;
        const coverStyle = { 
            width: 128, 
            height: 193, 
            backgroundImage: 'url(' + `${book.imageLinks.smallThumbnail}` + ')'  // eslint-disable-line no-useless-concat
        }

        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={coverStyle}></div>
                    <div className="book-shelf-changer">
                    <select value={book.shelf ? book.shelf : 'none'} onChange={this.onShelfChange} >
                        <option value="moveTo" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                
                    {
                        Object.values(book.authors).map( author => <div key={author} className="book-authors">{author}</div>)
                    }

                
                </div>
            </li>
        )
    }
}

export default Book;