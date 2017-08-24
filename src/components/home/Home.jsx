import React from 'react';

import SearchBarComp from '../Trips/SearchBar';
import ServiceComp from '../services/Services';
import TalkAboutComp from "../about/TalkAboutUs";
import HowWorksComp from "../howTo/HowItWorks";
import SecurePayment from "../about/SecurePayment";
import TripsPage from "../Trips/TripsPage";
import Intro from "./Intro";
import Green from "../about/Green";
import MainMap from "../maps/Map"
import HeaderComp from "./Header";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <HeaderComp/>
                <SearchBarComp/>
                {/*<LastTrips/>*/}
                <TripsPage/>
                <MainMap location={this.props.history.location}/>
                <Intro/>
                <ServiceComp/>
                <Green/>
                <HowWorksComp/>
                <SecurePayment/>
                <TalkAboutComp/>
            </div>
        );
    }
};
