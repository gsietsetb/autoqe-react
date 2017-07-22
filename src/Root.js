import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import Index from './components/Index';

import App from './App';
import ContactDetail from './items/contacts/ContactDetail';
import SearchBarComp from "./components/SearchBar";
import TripGrid from "./components/grids/TripGrid";
import TripDetailComponent from "./items/trips/TripDetail";

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
                    {/*Users*/}
                    <Route path='/contact/:id' component={ContactDetail} />
                    {/*Trips*/}
                    <Route path='/trips/:id' component={TripDetailComponent} />
                    <Route path='/trips' component={TripGrid} />
                </Switch>
            </BrowserRouter>
        );
    }
}
