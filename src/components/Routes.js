import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ContactDetail from './Users/UserDetail';
import SearchBarComp from "./Trips/SearchBar";
import TripGrid from "./Trips/oldTrip/LastTrips";
import TripDetailComponent from "./Trips/oldTrip/TripDetail";
import HomePage from "./home/Home";
import ContactComp from "./about/SocialNetworks";
import TripsPage from "./Trips/TripsPage";
import NewTripPage from "./Trips/NewTripPage";
import TripPage from "./Trips/TripPage";
import Dev from "./about/Dev";
import Green from "./about/Green";

const Main = () => (
    <main>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                {/*Services*/}
                <Route path="/trips" component={TripsPage}/>
                <Route path="/carrent" component={ContactComp}/>
                <Route path="/contact" component={ContactComp}/>
                <Route path="/contact" component={ContactComp}/>

                {/*Trips*/}
                <Route path="/trips" component={TripsPage}>
                    <Route path="/trips/new" component={NewTripPage}/>
                    <Route path="/trips/:id" component={TripPage}/>
                </Route><Route path="/contact" component={ContactComp}/>

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


                <Route path='/trips/:id' component={TripDetailComponent} />
                <Route path='/trips' component={TripGrid} />
            </Switch>
        </BrowserRouter>
    </main>
);

export default Main