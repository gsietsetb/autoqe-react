import React from "react";
import {Label, Row, Tab, Tabs} from "react-bootstrap";
import HowCarpooling from "./HowCarpooling";
import Responsive from "react-responsive"
//Icons
import carp from "../../img/icons/services/carp.svg";
import rent from "../../img/icons/services/rent.svg";
import park from "../../img/icons/services/park.svg";
import el from "../../img/icons/services/el.svg";

// import MediaQuery from "react-responsive";

// const Default = ({children}) => <Responsive minWidth={768} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;
// var MediaQuery = require('react-responsive');


export default class HowWorksComp extends React.Component {
    render() {
        return (
            <section className="section">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">
                            {/*<img src={quest} className="icon-row" alt="Secure payment"/> &nbsp;*/}
                            ¿Cómo funciona?
                            {/*&nbsp; <Label className="btn-light_w">Sólo tres pasos!</Label>*/}
                        </h1>
                        <div className="sectio9n-header-text" height={500}>
                            <h3>Tu solución de transporte en tres pasos </h3>

                            <Row>
                                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                    <Tab eventKey={1} title={<span className="service-carp">
                                            <img alt="" src={carp} className="main-icon"/>&nbsp;
                                        <b className="avoid-if-small">Carpooling</b></span>}>
                                        <HowCarpooling/>
                                    </Tab>
                                    <Tab eventKey={2} title={<span className="service-rent">
                                            <img alt="" src={rent} className="main-icon"/>&nbsp;
                                        <b className="avoid-if-small">Alquiler de Autos</b></span>}>
                                        {/*<HowCar/>*/}
                                    </Tab>
                                    <Tab eventKey={3} title={<span className="service-park">
                                            <img alt="" src={park} className="main-icon"/>&nbsp;
                                        <b className="avoid-if-small">Alquiler de Cocheras</b></span>}>
                                    </Tab>
                                    <Responsive maxWidth={768}>
                                        <Tab eventKey={4} title={<span className="service-elec">
                                    <img alt="" src={el} className="main-icon"/>&nbsp;
                                            <b className="avoid-if-small"> Autos eléctricos &nbsp;</b><Label
                                            className="avoid-if-small" bsStyle="warning">Próx.</Label></span>
                                        }>
                                        </Tab>
                                    </Responsive>
                                </Tabs>
                            </Row>
                        </div>
                    </div>
                </header>
                {/*<div >*/}
            </section>
        );
    }
}
