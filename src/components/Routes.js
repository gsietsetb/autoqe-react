import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ContactDetail from './Users/UserDetail';
import SearchBarComp from "./Trips/SearchBar";
import HomePage from "./home/Home";
import ContactComp from "./about/SocialNetworks";
import TripsPage from "./Trips/TripsPage";
import NewTripPage from "./Trips/NewTripPage";
import TripPage from "./Trips/TripPage";
import Dev from "./about/Dev";
import ServiceComp from "./services/Services";
import Green from "./about/Green";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/home' component={HomePage}/>
            {/*<Route path='/' component={HomePage}/>*/}
            {/*Services*/}
            <Route path="/trips" component={TripsPage}/>
            {/*<Route path="/car" component={ContactComp}/>*/}

            {/*Trips*/}
            <Route path="/trips" component={TripsPage}>
                <Route path="/trips/new" component={NewTripPage}/>
                <Route path="/trips/:id" component={TripPage}/>
            </Route>

            <Route path="/contact" component={ContactComp}/>

            {/*About*/}
            <Route path="/services" component={ServiceComp}/>
            <Route path="/green" component={Green}/>
            <Route path="/green" component={Green}/>
            <Route path="/green" component={Green}/>
            <Route path="/dev" component={Dev}/>
            <Route path="/contact" component={ContactComp}/>
            <Route path="/contact" component={ContactComp}/>
            <Route path="/contact" component={ContactComp}/>
            <Route path="/contact" component={ContactComp} />
            {/*<Route path="/about" component={AboutPage} />*/}
            <Route path='/find' component={SearchBarComp} />
            {/*Users*/}
            <Route path='/contact/:id' component={ContactDetail} />
            {/*Trips*/}

            {/*<Route path='/trips/:id' component={TripDetailComponent} />*/}
            {/*<Route path='/trips' component={TripGrid} />*/}
        </Switch>
    </main>
);

export default Main