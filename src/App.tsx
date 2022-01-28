import React from 'react';
import Header from '@Components/Header';
import Todo from '@Components/Todo';
import Footer from '@Components/Footer';
import ItemStatusFilter from '@Components/ItemStatusFilter';
import SearchBar from '@Components/SearchBar';

import '@Styles/App.scss';

const App = () => {
    return (
        <div className="container" id="app-wrap">
            <Header />
            <ItemStatusFilter />
            <SearchBar />
            <Todo />
            <Footer />
        </div>
    );
};

export default App;
