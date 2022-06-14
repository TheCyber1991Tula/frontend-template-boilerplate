import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TodoApplication from './components/TodoApplication';
import MarksApplication from './components/MarksApplication';

const App = () => {
    return (
        <div className="container" id="app-wrap">
            <Header />
            <Navbar />
            <TodoApplication />
            <MarksApplication />
            <Footer />
        </div>
    );
};

export default App;
