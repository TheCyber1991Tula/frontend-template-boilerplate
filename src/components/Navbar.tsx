import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@Styles/Navbar.scss';
import MarksApplication from './MarksApplication';
import TodoApplication from './TodoApplication';

const Navbar = () => {
    return (
        <BrowserRouter>
            <div className="navbar__wrap">
                <div className="navbar__content">
                    <Routes>
                        <Route path="/marks" component={MarksApplication} />
                        <Route path="/todo" component={TodoApplication} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Navbar;
