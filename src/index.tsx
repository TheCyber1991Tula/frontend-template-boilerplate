import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

/*
import '@Scripts/arrays';
import '@Scripts/async';
import '@Scripts/functions';
import '@Scripts/promises';
import '@Scripts/strings';
import '@Scripts/dom';
import '@Scripts/etc';
*/
import '@Scripts/calc';

import '@Styles/App.scss';

import '@Fonts/accuratist.woff';
import '@Fonts/compact-bold.woff';
import '@Fonts/noto-sans-display-condensed-extrabold-italic.woff';
import '@Fonts/open-sans-bold.woff';
import '@Fonts/open-sans.woff';
import '@Fonts/roboto-bold.woff';
import '@Fonts/roboto-regular.woff';

ReactDOM.render(<App />, document.getElementById('app'));
