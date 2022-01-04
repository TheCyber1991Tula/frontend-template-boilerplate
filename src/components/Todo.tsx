import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

export default class Todo extends Component {
    render() {
        return (
            <StyledTodo className="container text-center">
                <TodoItem />
            </StyledTodo>
        );
    }
}

const StyledTodo = styled.div`
    width: 100%;
    height: auto;
    background: skyblue;
    font-family: 'Roboto Regular';
    font-style: italic;
`;
