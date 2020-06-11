import React, { useEffect } from 'react';
import classes from './Header.css';

const header = (props) => {
    useEffect( () => {
        console.log('(Header.js) useEffect');
        //simulate http request
        setTimeout(() => {
            alert('Pretended to read book data from an API');
        }, 1000);
        return() => {
            console.log('(Header.js) cleanup work in useEffect');
        };
    }, []);
    useEffect( () => {
        console.log('(Header.js) 2nd useEffect');
        return () => {
            console.log('(Header.js) cleanup in 2nd useEffect');
        };
    });

    const bookclasses = [];
    let btnClass = '';
    if (props.showBooks) {
        btnClass = classes.Red;
    }
    if (props.books && props.books.length <= 2 ) {
      bookclasses.push(classes.red);
    };
    if (props.books && props.books.length <=1 ) {
      bookclasses.push(classes.bold);
    };
    return(
        <div className={classes.Header}>
            <header id={classes.pageheader} className={classes.headfoot}>
                <div id={classes.headerleft}>
                    <img alt="placeholder" src="https://via.placeholder.com/150x150"></img>
                </div>
                <div id={classes.headercentre}>
                    <div>
                        <p>This is a test page for CSS and HTML and Javascript using React</p>
                    </div>
                </div>
                <div id={classes.headerright}>
                    <div>
                        <p>Leo Vermeulen</p>
                    </div>
                </div>
            </header>
            <h1 className={bookclasses.join(' ')}>{props.title}</h1>
            <button 
                className={btnClass} 
                onClick={props.clicked}>
                Show list of books  
            </button>
            <button 
                className={btnClass} 
                onClick={props.newbook}>
                Enter a new book  
            </button>
        </div>
    );
};
export default header;