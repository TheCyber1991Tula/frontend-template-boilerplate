import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '@Styles/App.scss';
import '@Styles/fonts.scss';

import '@Fonts/accuratist.woff';
import '@Fonts/compact-bold.woff';
import '@Fonts/noto-sans-display-condensed-extrabold-italic.woff';
import '@Fonts/open-sans-bold.woff';
import '@Fonts/open-sans.woff';
import '@Fonts/roboto-bold.woff';
import '@Fonts/roboto-regular.woff';

ReactDOM.render(<App />, document.getElementById('app'));
