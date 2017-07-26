import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/App.css'
import Auth0Lock from 'auth0-lock';

import NavbarComponent from "./components/Navbar";
import SearchBarComp from './components/SearchBar';
import CarouselComp from './components/Carousel';
import ServiceComp from './components/Services';
import FooterComponent from './components/Footer';
import SocialNetworks from './components/SocialNetworks';
import MapComp from "./maps/Map";
import TripGrid from "./components/grids/TripGrid";
import TalkAboutComp from "./components/TalkAbout";
import HowWorksComp from "./components/HowWorks";
import MainMapLayout from "./maps/main_map_layout";
import SecurePayment from "./components/SecurePayment";

export default class AppComponent extends Component {

    componentWillMount() {
        this.lock = new Auth0Lock('06DohMivFjjWe43rAOM0Pi1sdr62TAs9', 'autoqe.auth0.com');
        // this.lock = new Auth0Lock(process.env.AUTH0_ID, process.env.DOMAIN);
    }
    componentDidMount() {
        // document.addEventListener('fb_init', e => FB.XFBML.parse());
    }

    render() {
        return (
            <div>
                <NavbarComponent lock={this.lock}/>
                <CarouselComp/>
                <SearchBarComp/>
                <TripGrid/>
                <MapComp/>
                <ServiceComp/>
                <HowWorksComp/>
                <SecurePayment/>
                <TalkAboutComp/>
                <SocialNetworks/>
                <FooterComponent/>
            </div>
        );
    }
};


