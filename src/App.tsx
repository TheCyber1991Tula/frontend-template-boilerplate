import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Footer from './components/Footer';
import ItemStatusFilter from './components/ItemStatusFilter';
import SearchBar from './components/SearchBar';

const App = () => {
    const todoData = [
        {
            id: 0,
            task: 'drink coffee',
            importance: false,
        },
        {
            id: 1,
            task: 'learn react',
            importance: true,
        },
        {
            id: 2,
            task: 'build react app',
            importance: true,
        },
        {
            id: 3,
            task: 'play computer games',
            importance: false,
        },
    ];

    return (
        <div className="container" id="app-wrap">
            <Header />
            <ItemStatusFilter />
            <SearchBar />
            <Todo todoContent={todoData} />
            <Footer />
        </div>
    );
};

export default App;
