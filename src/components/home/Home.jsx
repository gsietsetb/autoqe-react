import React from 'react';
import ServiceComp from '../services/Services';
import TalkAboutComp from "../about/TalkAboutUs";
import HowWorksComp from "../howTo/HowItWorks";
import SecurePayment from "../about/SecurePayment";
import Intro from "./Intro";
import Green from "../about/Green";
import CarouselComp from "./Header";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <CarouselComp/>
                {/*<MainMap location={this.props.history.location}/>*/}
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
