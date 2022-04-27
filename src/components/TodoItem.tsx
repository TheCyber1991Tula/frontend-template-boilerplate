import React from 'react';
import '@Styles/TodoItem.scss';

interface IProps {
    task: string,
    importance: boolean,
}

const TodoItem = ({ task, importance }: IProps) => {
    const isImportant = {
        background: importance ? '#FF6E6E' : '#55C0EB',
    };

    return (
        <div style={isImportant} className="container" id="todo-list-item">
            <b className="todo-list-item__task">{ task }</b>
            <b className="todo-list-item__importance">{ importance }</b>
        </div>
    );
};

export default TodoItem;
