import React, { Component } from 'react';
import classes from './Input.css';
import { v4 as uuidv4 } from 'uuid';

// const inputform = (props) => {
    // let inputElement = null;
    // switch ( props.inputType) {
    //     case ( 'input' ):
    //         inputElement = <input className={classes.inputElement} {...props} />;
    //         break;
    //     case ( 'textarea' ):
    //         inputElement = <textarea className={classes.inputElement} {...props} />;
    //         break;
    //     default:
    //         inputElement= <input className={classes.inputElement} {...props} />;
    //         break;
    // }
    // return(
    //     <div className={classes.Inputform}>
    //         <label className={classes.label}>{props.label}</label>
    //         {inputElement}
    //         <p>input form</p>
    //     </div>
    // );

class inputForm extends Component {
        constructor(props) {
            super(props);
        }

        formSubmitHandler = (event) => {
            console.log('(Input.js) submitting form');
            event.preventDefault();
            // const books = this.state.books;
            let newBook = { id: uuidv4(), author: event.target.author.value, title:event.target.title.value, isbn:event.target.isbn.value, year:event.target.year.value };
            let books = this.props.books;
            books.push(newBook);
            this.setState({books: books});
            alert('Saved');
            // setTimeout(() => {
            //     alert('');
            // }, 10000);
            return this.props;
        };

        formChangedHandler = (event) => {
            let nam = event.target.name;
            let val = event.target.value;
            console.log('(Input.js) '+nam+' '+val);
            this.setState({[nam]: val});
        };

        render () {
            console.log('(Input.js) rendering...');
            return(
                <div>
               <form onSubmit={this.formSubmitHandler}>
                    <div className="row" id="header">
                        <div id={classes.headerleft}>
                            <div id={classes.description}>Please add a new book to your library by filling out the fields below</div>
                        </div>
                    </div>
                    <div id={classes.errorfield}></div>
                    <div className={classes.row} id={classes.headerright}>
                        <button type="reset" id={classes.cancelbtn} className={classes.formbutton}>Cancel</button>
                        <button type="submit" id={classes.donebtn} className={classes.formbutton}>Save</button>
                    </div>
                
                    <div className={classes.row} id={classes.header}>
                        <div>
                            <span className={classes.entryformlbl} id={classes.book_title_label} htmlFor={classes.book_title}>Book title</span>
                            <input onChange={this.formChangedHandler} placeholder="title" name="title" id={classes.book_title} className={classes.textentry} ></input>
                        </div>
                        <div>
                            <span className={classes.entryformlbl} id={classes.book_author_label}  htmlFor={classes.book_author}>Author</span>
                            <input onChange={this.formChangedHandler} placeholder="author" name="author" id={classes.book_author} className={classes.textentry} ></input>
                        </div>
                        <div>
                            <span className={classes.entryformlbl} id={classes.book_isbn_label}  htmlFor={classes.book_isbn}>ISDN number</span>
                            <input onChange={this.formChangedHandler} placeholder="ISBN number" name="isbn" id={classes.book_isbn} className={classes.textentry} ></input>
                        </div>
                        <div>
                            <span className={classes.entryformlbl} id={classes.book_published_label}  htmlFor={classes.book_published}>Published year</span>
                            <input onChange={this.formChangedHandler} placeholder="published" name="year" id={classes.book_published} className={classes.textentry}></input>
                        </div>       
                    </div>                          
                </form>
                </div>
            )
        }
}
    
export default inputForm;