import React from 'react';
import '@Styles/SearchBar.scss';

const SearchBar = () => {
    return (
        <div className="container" id="searchbar__input__wrap">
            <input type="text" placeholder="Type to search..." id="search-input" />
        </div>
    );
};

export default SearchBar;
