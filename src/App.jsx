import React, { Component } from 'react';
import Header from './components/header/Header';
import Todo from './components/todo/Todo';
import Footer from './components/footer/Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Todo />
                <Footer />
            </div>
        );
    }
}
