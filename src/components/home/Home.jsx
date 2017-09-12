import React from 'react';
import ServiceComp from '../services/Services';
import TalkAboutComp from "../about/TalkAboutUs";
import HowWorksComp from "../howTo/HowItWorks";
import SecurePayment from "../about/SecurePayment";
import Intro from "./Intro";
import Green from "../about/Green";
import CarouselComp from "./Header";
import Devices from "../about/Devices";
import SocialNetworkComp from "../about/SocialNetworks";
import Mockup from "../about/Mockup";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <CarouselComp/>
                {/*<MainMap location={this.props.history.location}/>*/}
                <Intro id={'intro'}/>
                <ServiceComp id={'services'}/>
                <Green id={'green'}/>
                <HowWorksComp/>
                <Devices/>
                <Mockup/>
                <SocialNetworkComp/>
                <SecurePayment/>
                <TalkAboutComp/>
            </div>
        );
    }
};
