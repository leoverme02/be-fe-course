import React, { Component } from 'react'
import classes from './ImportForm.css';
// import Input from '../../components/Input/Input';

class InputForm extends Component {

    render () {
        return (
            <div>
            <form action="befe-lesson3.html" method="post">
                <div class="row" id="header">
                    <div id="header-left">
                        <div id="title">Book entry</div>
                        <div id="description">Please add a new book to your library by filling out the fields below</div>
                    </div>
                </div>
                <div id="errorfield"></div>
                <div class="row" id="header-right">
                    <button type="reset" id="cancelbtn" class="form-button">Cancel</button>
                    <button type="submit" id="donebtn" class="form-button">Save</button>
                </div>
            
                <div class="row" id="header">
                    <div>
                        <span class="entryformlbl" id="book_title_label" for="book_title">Book title</span>
                        <input placeholder="title" id="book_title" class="textentry" onfocusout="checkValid('book_title')"></input>
                    </div>
                    <div>
                        <span class="entryformlbl" id="book_author_label"  for="book_author">Author</span>
                        <input placeholder="author" id="book_author" class="textentry" onfocusout="checkValid('book_author')"></input>
                    </div>
                    <div>
                        <span class="entryformlbl" id="book_isbn_label"  for="book_isbn">ISDN number</span>
                        <input placeholder="ISBN number" id="book_isbn" class="textentry" onfocusout="checkIsbn()"></input>
                    </div>
                    <div>
                        <span class="entryformlbl" id="book_published_label"  for="book_published">Published year</span>
                        <input placeholder="published" id="book_published" class="textentry"></input>
                    </div>       
                </div>                          
            </form>
            </div>
        )
    }
    // state = {
    //     bookForm: {
    //         author: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'text',
    //                 placeholder: 'author'
    //             },
    //             value: ''
    //         },
    //         title: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'text',
    //                 placeholder: 'title'
    //             },
    //             value: ''
    //         },
    //         isn: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'text',
    //                 placeholder: 'ISBN'
    //             },
    //             value: ''
    //         },
    //         year: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'text',
    //                 placeholder: 'year'
    //             },
    //             value: ''
    //         }
    //     },
    //     loading: false
    // }

    // bookHandler = ( event ) => {
    //     event.preventDefault();
    //     this.setState( { loading: true } ) ;
    //     const formData{};
    //     for (let formElementIdentifier in this.state.orderForm) {
    //         formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    //     };
    // }

    // inputChangedHandler = (event, inputIdentifier) => {
    //     const updatedOrderForm = {
    //         ...this.state.orderForm
    //     };
    //     const updatedFormElement = {
    //         ...updatedOrderForm[inputIdentifier]
    //     };
    // }

    // render() {
    //     const formElementsArray = [];
    //     for (let key in this.state.orderForm) {
    //         formElementsArray.push({
    //             id: key,
    //             config: this.state.orderForm[key]
    //         });
    //     }
    //     let form = (
    //         <form onSubmit={this.orderHandler}>
    //             {formElementsArray.map(formElement => (
    //                 <Input
    //                 key={formElement.id}
    //                 elementType={formElement.config.elementType}
    //                 elementConfig={formElement.config.elementConfig}
    //                 value={formElement.config.value}
    //                 changed={(event) => this.inputChangedHandler(event, formElement.id)} />
    //             ))}
    //             <Button btnType="Save">SAVE</Button>
    //         </form>
    //     );
    //     return (
    //         <div className={classes.InputForm}>
    //             <h4>Enter new book</h4>
    //             {form}
    //         </div>
    //     );
    //     };
}

export default InputForm;