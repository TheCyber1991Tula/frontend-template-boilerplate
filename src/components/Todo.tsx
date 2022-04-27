import React from 'react';
import '@Styles/TodoList.scss';
import TodoItem from './TodoItem';

interface ITodoContent {
    task: string,
    importance: boolean,
    id: number
}

const Todo = ({ todoContent }: any) => {
    const elements = todoContent.map((elem: ITodoContent) => {
        // нужно что-то вернуть обязательно!!!
        return (
            // можно записать и через spread, но я не стал
            <TodoItem task={elem.task} importance={elem.importance} key={elem.id} />
        );
    });
    // потом просто вставляем сюда наш код написанный выше
    return (
        <div className="todo__wrap">
            { elements }
        </div>
    );
};

export default Todo;
