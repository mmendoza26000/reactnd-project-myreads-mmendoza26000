import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Bookshelf from './Bookshelf';

class MainPage extends Component{

    static propTypes = {
      books: PropTypes.array.isRequired,
      shelves: PropTypes.object.isRequired,
      onShelfChange: PropTypes.func.isRequired
    }

    render(){
        
        const { books, shelves, onShelfChange } = this.props;

        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                    Object.keys(shelves).map( shelf => 
                        <Bookshelf 
                            key={shelf} 
                            name={shelf} 
                            title={shelves[shelf]} 
                            books={books} 
                            onShelfChange={onShelfChange} />                    
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