import React, {Component} from 'react';
import Book from './Book/Book';

class Books extends Component {
    static getDerivedStateFromProps(props, state){
        console.log('(Books.js) getDerivedStateFromProps')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('(Books.js) shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('(Books.js) getSnapsotBeforeUpdate');
        return { messsage: 'snapshot' };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('(Books.js) componentDidUpdate');
        console.log(snapshot);
        
    }
    componentWillUnmount() {
        console.log('(Books.js) componentWillUnmount');
    };
    
    render() {
        console.log('(Books.js) rendering...');
        return this.props.books.map((book, index) => {
            return ( <Book 
              click=   {() => this.props.clicked(index)}
              title=   {book.title} 
              author=  {book.author} 
              isbn=    {book.isbn} 
              year=    {book.year}
              key=     {book.id}
              changed= {(event) => this.props.changed(event, book.id)}
            />  
        );
    });
}
}

export default Books;