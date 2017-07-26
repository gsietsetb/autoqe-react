import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import {addLocaleData, IntlProvider} from 'react-intl';
import es from 'react-intl/locale-data/es';

addLocaleData([...es]);

require('dotenv').config();

const App = () => {
    return (
        <div>
            <IntlProvider locale={'es'}>
                <Root history={BrowserRouter} />
            </IntlProvider>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('app'));
registerServiceWorker();