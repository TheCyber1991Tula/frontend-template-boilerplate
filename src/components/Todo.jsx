import React, { Component } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

import '~/assets/styles/todo.scss';

const todoData = [
    {
        name: 'Купить хлеб',
        id: 1,
        isImportant: false,
    },
    {
        name: 'Попить чай',
        id: 2,
        isImportant: false,
    },
    {
        name: 'Сходить поссать',
        id: 3,
        isImportant: false,
    },
    {
        name: 'Обновить резюме',
        id: 4,
        isImportant: false,
    },
];

export default class Todo extends Component {
    render() {
        return (
            <div className="container text-center">
                <TodoItem />
            </div>
        );
    }
}
