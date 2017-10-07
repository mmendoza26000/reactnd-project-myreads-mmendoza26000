import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from './Bookshelf';

class MainPage extends Component{

    render(){
        
        const { books, shelves } = this.props;

        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                    Object.keys(shelves).map( shelf => 
                        <Bookshelf key={shelf} name={shelf} title={shelves[shelf]} books={books} />                    
                    )
                }

              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )
    }
}






export default MainPage;