import React, { Component } from 'react';
import TodoItem from './TodoItem';

import '~/assets/styles/todo.scss';

export default class Todo extends Component {
    render() {
        return (
            <div className="container text-center">
                <TodoItem />
            </div>
        );
    }
}
