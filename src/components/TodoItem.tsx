import React from 'react';
import styled from 'styled-components';
import 'src/assets/fonts/fonts.scss';

interface IPost {
    id: number
    heading: string
    price: number
    description: string
    canBuy: () => boolean
}

interface Style {
    [key: string]: string
}

const StyledTodo: Style = styled.div`
    width: 100%;
    height: auto;
    background: skyblue;
    font-family: 'Roboto Regular';
    font-style: italic;
`;

const StyledTodoListItem: Style = styled.div`
    width: 500px;
    height: 100px;
    background: silver;
    border: 1px solid black;
    border-radius: 5px;
`;

const TodoItem = ({ info, heading, price, description }) => {
    return (
        <StyledTodoListItem>
            <p>{info}</p>
            <b>{heading}</b>
            <p>{price}</p>
            <i>{description}</i>
        </StyledTodoListItem>
    );
};

export default TodoItem;
