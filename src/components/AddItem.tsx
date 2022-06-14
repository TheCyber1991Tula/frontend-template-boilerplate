import React, { useState } from 'react';
import '@Styles/AddItem.scss';

const AddItem = () => {
    //* добавление нового таска
    const addNewTaskFunction = (taskName: string): void => {
        const newTask = {
            id: todoContent.length + 1,
            task: taskName,
            important: false,
            complete: false,
        };
        setState(todoContent.forEach(elem => console.log(elem)));
        console.log(todoContent);
    };

    const [inputContent, setInputContent] = useState('');
    return (
        <div id="add-item__wrap">
            <div id="add-item__heading">
                <h2>Add Tasks</h2>
                <div id="add-item__img" />
            </div>
            <div id="add-item__content">
                <input
                    type="text"
                    placeholder="Type here..."
                    onChange={(evt: Event) => setInputContent(evt.target.value)}
                />
                <button type="button" onClick={addNewTask(inputContent)}>
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default AddItem;
