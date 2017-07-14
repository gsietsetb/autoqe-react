import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Index from './components/Index';
import ContactDetail from './components/ContactDetail';

import App from './App';
import SearchBarComp from "./components/SearchBar";
import ContactComp from "./components/Contact";

export default class Root extends Component {

    // We need to provide a list of routes
    // for our app, and in this case we are
    // doing so from a Root component
    render() {
        return (
            <BrowserRouter history={this.props.history}>
                <Switch>
                    <Route path='/' component={App}/>
                    <Route path='/find' component={SearchBarComp} />
                    <Route path='/contact/:id' component={ContactDetail} />
                    <Route path='/contact' component={ContactComp} />
                </Switch>
            </BrowserRouter>
        );
    }
}
