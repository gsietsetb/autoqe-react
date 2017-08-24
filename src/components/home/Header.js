import React from "react";
import {Label, Row, Tab, Tabs} from "react-bootstrap";
import CarouselComp from "./Carousel";
//Icons
import carp from "../../img/icons/services/carp.svg";
import rent from "../../img/icons/services/rent.svg";
import park from "../../img/icons/services/park.svg";
import el from "../../img/icons/services/el.svg";

export default class HeaderComp extends React.Component {
    // onLoadStart={(e) => this.setState({loading: true})}
    constructor(props) {
        super(props);
        this.state = {imageStatus: 'loading'};
    }

    handleImageLoaded() {
        this.setState({imageStatus: 'loaded'});
    }

    handleImageErrored() {
        this.setState({imageStatus: 'failed to load'});
    }

    render() {
        return (
            <div>
                <Row>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title={<span className="service-carp">
                                            <img alt="" src={carp} className="main-icon"/>&nbsp;
                            <b>Carpooling</b></span>}>
                            {/*<HowCarpooling/>*/}
                        </Tab>
                        <Tab eventKey={2} title={<span className="service-rent">
                                            <img alt="" src={rent} className="main-icon"/>&nbsp;
                            Alquiler de Autos</span>}>
                            {/*<HowCar/>*/}
                        </Tab>
                        <Tab eventKey={3} title={<span className="service-park">
                                            <img alt="" src={park} className="main-icon"/>&nbsp;
                            Alquiler de Cocheras</span>}>
                        </Tab>
                        <Tab eventKey={4} disabled title={<span className="service-elec">
                                    <img alt="" src={el} className="main-icon"/>&nbsp;
                            Autos eléctricos &nbsp;<Label bsStyle="warning">Próx.</Label></span>
                        }>
                        </Tab>
                    </Tabs>
                </Row>
                <Row>
                    <CarouselComp/>
                </Row>
            </div>
        );
    }
}
