import React from 'react';
import {render} from 'react-dom';
import store from './stores';
import {Provider} from 'mobx-react';

import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {addLocaleData, IntlProvider} from 'react-intl';
import es from 'react-intl/locale-data/es';
import AppComponent from "./components/App";

addLocaleData([...es]);

require('dotenv').config();

// const history = createBrowserHistory();
// function onUpdate () {
//     anchorate()
// }

/**Todo deprecate:
const store=storeCfg();
store.dispatch(loadTrips());
store.dispatch(loadUsers());*/

render(
    <IntlProvider locale={'es-AR'}>
        <Provider {...store}>
            <Router>
                <AppComponent/>
            </Router>
        </Provider>
    </IntlProvider>,
    document.getElementById('app'));
registerServiceWorker();
