import React from 'react';

import SearchBarComp from './SearchBar';
import CarouselComp from './Carousel';
import ServiceComp from '../services/Services';
import MapComp from "../Maps/Map";
import TalkAboutComp from "./TalkAboutUs";
import HowWorksComp from "../about/HowItWorks";
import SecurePayment from "./SecurePayment";
import TripsPage from "../Trips/TripsPage";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <CarouselComp/>
                <SearchBarComp/>
                {/*<LastTrips/>*/}
                <TripsPage/>
                <MapComp location={this.props.history.location}/>
                <ServiceComp/>
                <HowWorksComp/>
                <SecurePayment/>
                <TalkAboutComp/>
            </div>
        );
    }
};
