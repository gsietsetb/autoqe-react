import React from 'react';

import SearchBarComp from '../Trips/SearchBar';
import CarouselComp from './Carousel';
import ServiceComp from '../services/Services';
import TalkAboutComp from "../about/TalkAboutUs";
import HowWorksComp from "../howTo/HowItWorks";
import SecurePayment from "../about/SecurePayment";
import TripsPage from "../Trips/TripsPage";
import Intro from "./Intro";
import Green from "../about/Green";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <CarouselComp/>
                <SearchBarComp/>
                {/*<LastTrips/>*/}
                <TripsPage/>
                {/*<MapComp location={this.props.history.location}/>*/}
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
