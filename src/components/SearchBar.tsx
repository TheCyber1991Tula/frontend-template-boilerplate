import React from 'react';
import '@Styles/SearchBar.scss';

const SearchBar = () => {
    //* поиск таска
    const searchTasksFunction = (inputValue): void => {
        console.log(inputValue);
    };

    return (
        <div className="container" id="searchbar__input__wrap">
            <div id="searchbar__heading">
                <h2>Search Tasks</h2>
                <div id="searchbar__heading__img" />
            </div>
            <input
                type="text"
                placeholder="Type to search..."
                id="search-input"
                onChange={(evt: Event) => searchTasks(evt.target.value)}
            />
        </div>
    );
};

export default SearchBar;
