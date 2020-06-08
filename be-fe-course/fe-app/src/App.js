import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Book from './Book/Book.js';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor:  pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'bisque'};
    color: black;
  }
`;

class App extends Component {
  state = {
    books: [
      { id: '12', author: 'Donald Davies', title:'Project Management Secrets',     isbn:'1234567890123', year:'2000' },
      { id: '13', author: 'Donald Davies', title:'Testledning',                    isbn:'1234567890123', year:'2001' },
      { id: '14', author: 'Donald Davies', title:'Multiproject Navigation Centre', isbn:'1234567890123', year:'2002' }
    ],
    showBooks: false
  };

  deleteBookHandler = (bookIndex) => {
    const books = [...this.state.books];
    books.splice(bookIndex, 1);
    this.setState({books: books})
  }

  authorChangedHandler = (event, id) => {
    const bookIndex = this.state.books.findIndex(book => {
      return book.id = id;
    });
    const book = {
      ...this.state.books[bookIndex]
    }
    book.author = event.target.value;
    const books = [...this.state.books];
    books[bookIndex] = book;
    this.setState( {books: books} );
  }

  toggleBooksHandler = () => {
    const doesShow = this.state.showBooks;
    this.setState({showBooks: !doesShow});
  }
  render() {
    let books = null;
    if (this.state.showBooks) {
      books = (
        <div>
          {this.state.books.map((book, index) => {
            return <Book 
                    click={() => this.deleteBookHandler(index)}
                    title={book.title} 
                    author={book.author} 
                    isbn={book.isbn} 
                    year={book.year}
                    key={book.id}
                    changed={(event) => this.authorChangedHandler(event, book.id)}
                     />
          }
          )}
      </div>
      )
      // buttonstyle.backgroundColor = 'red';
      // buttonstyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color:           'black'
      // };
    };

    // let bookclasses = [];
    // if (this.state.books.length <= 2 ) {
    //   bookclasses.push('red');
    // };
    // if (this.state.books.length <=1 ) {
    //   bookclasses.push('bold');
    // };
    
    return (
        <div className="App">
          {/* <h1 className={bookclasses.join(' ')}>My library of books</h1> */}
          <h1>My library of books</h1>
          <StyledButton alt={this.state.showBooks} onClick={() => this.toggleBooksHandler()} >
            Show list of books  
          </StyledButton> 
          {books}
        </div>
    );
  }
}

export default App;
