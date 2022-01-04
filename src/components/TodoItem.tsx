import React, { Component } from 'react';
import styled from 'styled-components';
import '../assets/fonts/fonts.scss';

export default class TodoItem extends Component {
    render() {
        return (
            //! добавить кнопки выполнено и удалить
            <TodoListItem>
                <p>todo list item</p>
            </TodoListItem>
        );
    }
}

const TodoListItem = styled.div`
    width: 500px;
    height: 100px;
    background: silver;
    border: 1px solid black;
    border-radius: 5px;
`;
