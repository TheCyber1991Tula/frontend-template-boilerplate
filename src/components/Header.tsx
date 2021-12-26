import React, { Component } from 'react';

import '~/assets/styles/header.scss';

export default class Header extends Component {
    render() {
        return (
            <header className="container">
                <button className="btn btn-warning">some text</button>
                <h1>lorem ipsum dolor sit amet</h1>
            </header>
        );
    };
};
