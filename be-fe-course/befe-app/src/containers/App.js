import React, { Component } from 'react';
// import styled from 'styled-components';
import classes from './App.css';
import Books from '../components/Books/Books';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Inputform from '../components/Input/Input';

// const StyledHeader = styled.h1`
//   align: center;
// `;

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor:  pointer;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'bisque'};
//     color: black;
//   }
// `;

class App extends Component {
  constructor(props) {
    super(props);
    console.log('(App.js) constructor');
    this.state = {
      books: [
        { id: '12', author: 'Donald Davies', title:'Project Management Secrets',     isbn:'1234567890123', year:'2000' },
        { id: '13', author: 'Donald Davies', title:'Testledning',                    isbn:'1234567890123', year:'2001' },
        { id: '14', author: 'Donald Davies', title:'Multiproject Navigation Centre', isbn:'1234567890123', year:'2002' }
      ],
      showBooks: false,
      showForm: false
    };
  };

  static getDerivedStateFromProps(props, state ) {
    console.log('(App.js) getDerivedStateFromProps', JSON.stringify(props) );
    return state;
  }

  componentDidMount() {
    console.log('(App.js) componentDidMount');
  }
  shouldComponentUpdate(nextProps, netxState) {
    console.log('(App.js) shouldComponentUpdate');
    return true;
  }

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

  toggleNewBookForm = () => {
    const doesShowForm = this.state.showForm;
    this.setState({showForm: !doesShowForm});
  }

  render() {
    console.log('(App.js) render');
    let books = null;
    let inpform = null;
    if (this.state.showBooks) {
      books = ( <Books 
            books={this.state.books} 
            clicked={this.deleteBookHandler}
            changed={this.authorChangedHandler} />
      )
    };
    if (this.state.showForm) {
      return (
        <div className={classes.App}>
          <Header
            title={this.props.appTitle} 
            showBooks={this.state.showBooks} 
            books={this.state.books}
            clicked={this.toggleBooksHandler}
            newbook={this.toggleNewBookForm} />
          <Inputform 
            books={this.state.books} />
          <Footer/>
        </div>
      )
    } else {
      return (
        <div className={classes.App}>
          <Header
            title={this.props.appTitle} 
            showBooks={this.state.showBooks} 
            books={this.state.books}
            clicked={this.toggleBooksHandler}
            newbook={this.toggleNewBookForm} />
          {books}
          <Footer/>
        </div>
      )
    }
  }
};

export default App;