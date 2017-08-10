import React from 'react';

import SearchBarComp from '../Trips/SearchBar';
import CarouselComp from './Carousel';
import ServiceComp from '../services/Services';
import MapComp from "../Maps/Map";
import TalkAboutComp from "../about/TalkAboutUs";
import HowWorksComp from "../about/HowItWorks";
import SecurePayment from "../about/SecurePayment";
import TripsPage from "../Trips/TripsPage";
import Intro from "../common/Intro";
import Green from "../about/Green";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <CarouselComp/>
                <SearchBarComp/>
                {/*<LastTrips/>*/}
                <TripsPage/>
                <MapComp location={this.props.history.location}/>
                <Intro/>
                <ServiceComp/>
                <HowWorksComp/>
                <Green/>
                <SecurePayment/>
                <TalkAboutComp/>
            </div>
        );
    }
};
