import React, { Component } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Footer from './components/Footer';
import Post from './components/Post';

import '~/assets/styles/style.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header currentDate="fuck you!!" />
                <Post />
                <Todo />
                <Footer />
            </div>
        );
    }
}
