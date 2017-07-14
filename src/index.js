import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
// import Dotenv from "dotenv-webpack";
require('dotenv').config();

ReactDOM.render(<Root history={BrowserRouter} />,
    document.getElementById('app'));
//
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
