import React, { Component } from 'react';
import '../assets/styles/Header.scss';

export default class Header extends Component {
    render() {
        return (
            <div className="container" id="header__wrap">
                <h1 id="header__h1">ToDo Application</h1>
            </div>
        );
    };
};
