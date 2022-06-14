import React, { useState } from 'react';
import '@Styles/TodoList.scss';

const Todo = () => {
    const state = [
        { id: 1, task: 'drink coffee', important: false, complete: false },
        { id: 2, task: 'build react app', important: true, complete: false },
        { id: 3, task: 'wash', important: true, complete: false },
    ];
    const [currentState, setState] = useState(state);

    //* помечаем таск как завершенный

    const [complete, toggleComplete] = useState();
    const toggleCompleteFunc = () => {};

    //* помечаем таск как важный

    const [important, toggleImportant] = useState(() => {});
    const toggleImportantFunc = () => {};

    /*
    const style = {
        isComplete: { 'text-decoration': todoContent[0].complete ? 'line-through' : 'none' },
        isImportant: { 'background': todoContent[0].important ? 'tomato' : 'skyblue' },
    };
    */

    const result = state.map(elem => {
        return (
            <div className="container todo-list-item" key={elem.id}>
                <b className="todo-list-item__task">{elem.task}</b>

                <div className="todo-item__buttons__wrap">
                    <button
                        className="markAsCompleteButton"
                        value={elem.id}
                        type="button"
                        onClick={evt => toggleCompleteFunc(evt.target.value)}
                    />

                    <button value={elem.id} className="removeButton" type="button" onClick={null} />

                    <button
                        value={elem.id}
                        className="markAsImportantButton"
                        type="button"
                        onClick={evt => toggleImportantFunc(evt.target.value)}
                    />
                </div>
            </div>
        );
    });

    return <div className="todo__wrap">{result}</div>;
};

export default Todo;
