import React, {Component} from 'react';
// import styled from 'styled-components';
import classes from './Book.css';

// const StyledDiv = styled.div`
//     width:      60%;
//     margin:     16px auto;
//     border:     1px solid #eeeeee;
//     box-shadow: 0 2px 3px #cccccc;
//     padding:    16px;
//     text-align: center;

//     @media (min-width: 500px): {
//     width: '450px'
//     }
// `;


class Book extends Component {
    render() {
        console.log('(Book.js) rendering...');
        return (
            <div className={classes.Book}>
                <p onClick={this.props.click}> Title: {this.props.title}</p>
                <p>Author: {this.props.author}</p>
                <p>ISBN: {this.props.isbn}</p>
                <p>Published: {this.props.year}</p>
                <p><b>{this.props.children}</b></p>
                <input type="text" value={this.props.author} onChange={this.props.changed} />
            </div>
            // <StyledDiv>
            //     <p onClick={props.click}> Title: {props.title}</p>
            //     <p>Author: {props.author}</p>
            //     <p>ISBN: {props.isbn}</p>
            //     <p>Published: {props.year}</p>
            //     <p><b>{props.children}</b></p>
            //     <input type="text" value={props.author} onChange={props.changed} />
            // </StyledDiv>
        );
    }
};

export default Book;