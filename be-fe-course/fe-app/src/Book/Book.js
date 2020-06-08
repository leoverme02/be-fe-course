import React from 'react';
import styled from 'styled-components';
// import './Book.css';

const StyledDiv = styled.div`
    width:      60%;
    margin:     16px auto;
    border:     1px solid #eeeeee;
    box-shadow: 0 2px 3px #cccccc;
    padding:    16px;
    text-align: center;

    @media (min-width: 500px): {
    width: '450px'
    }
`;

const book = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}> Title: {props.title}</p>
            <p>Author: {props.author}</p>
            <p>ISBN: {props.isbn}</p>
            <p>Published: {props.year}</p>
            <p><b>{props.children}</b></p>
            <input type="text" value={props.author} onChange={props.changed} />
        </StyledDiv>
    )
};

export default book;