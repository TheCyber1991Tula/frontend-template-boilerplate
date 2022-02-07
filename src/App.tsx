import React from 'react';
import Header from '@Components/Header';
import Todo from '@Components/Todo';
import Footer from '@Components/Footer';
import ItemStatusFilter from '@Components/ItemStatusFilter';
import SearchBar from '@Components/SearchBar';

const todoData = {
    key: 1,
    heading: 'Heading 1',
    price: 15000,
    description: 'et enim repellendus',
};

const App = () => {
    return (
        <div className="container" id="app-wrap">
            <Header />
            <ItemStatusFilter />
            <SearchBar />
            <Todo heading={todoData.heading} price={todoData.price} description={todoData.description} key={todoData.key} />
            <Footer />
        </div>
    );
};

export default App;
