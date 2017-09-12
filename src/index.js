import React from 'react';
import 'babel-polyfill';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// import {BrowserRouter as Router} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import storeCfg from './store/StoreConfig';
import registerServiceWorker from './registerServiceWorker';
import {addLocaleData, IntlProvider} from 'react-intl';
import es from 'react-intl/locale-data/es';
import {loadTrips} from './actions/TripActions';
import {loadUsers} from './actions/UserActions';
import AppComponent from "./components/App";

addLocaleData([...es]);

require('dotenv').config();

// const history = createBrowserHistory();
// function onUpdate () {
//     anchorate()
// }

const store=storeCfg();
store.dispatch(loadTrips());
store.dispatch(loadUsers());

render(
    <IntlProvider locale={'es-AR'}>
        <Provider store={store}>
            <Router>
                <AppComponent/>
            </Router>
        </Provider>
    </IntlProvider>,
    document.getElementById('app'));
registerServiceWorker();