import React, { MouseEventHandler } from 'react';
import '@Styles/ItemStatusFilter.scss';

const ItemStatusFilter = () => {
    const filterTasksFunction = (category: string): void => {
        console.log(`Filtered by category ${category}`);
    };

    return (
        <div id="itemStatusFilter__wrap">
            <h1>Filter Tasks by Category</h1>
            <div id="itemStatusFilter__buttons-block">
                <button
                    type="button"
                    className="btn btn-warning"
                    value="in progress"
                    onClick={(evt: Event) => filterTasks(evt.target.value)}
                >
                    in progress
                </button>
                <button
                    type="button"
                    className="btn btn-success"
                    value="complete"
                    onClick={(evt: Event) => filterTasks(evt.target.value)}
                >
                    complete
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    value="all"
                    onClick={(evt: Event) => filterTasks(evt.target.value)}
                >
                    all
                </button>
            </div>
        </div>
    );
};

export default ItemStatusFilter;
