import React from "react";
import {Label, Row, Tab, Tabs} from "react-bootstrap";
import quest from "../../img/icons/material/interrog.svg";

import trip from "../../img/logo/carp_g.svg";
import car from "../../img/logo/car_g.svg";
import park from "../../img/logo/park_g.svg";
import HowCarpooling from "./HowCarpooling";
// import MediaQuery from "react-responsive";

// const Default = ({children}) => <Responsive minWidth={768} children={children}/>;
// const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;
// var MediaQuery = require('react-responsive');


export default class HowWorksComp extends React.Component {
    render() {
        return (
            <section className="section">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">
                            <img src={quest} className="icon-row" alt="Secure payment"/> &nbsp;
                            ¿Cómo funciona? &nbsp; <Label className="btn-light_w">Sólo tres pasos!</Label>
                        </h1>
                        <div className="sectio9n-header-text" height={500}>
                            <h3>Tu solución de transporte en tres pasos </h3>

                            <Row>
                                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                    <Tab eventKey={1} title={<span>
                                            <img src={trip} className="main-icon"/>&nbsp;
                                        Carpooling</span>}>
                                        <HowCarpooling/>
                                    </Tab>
                                    <Tab eventKey={2} title={
                                        <span>
                                            <img src={car} className="main-icon"/>&nbsp;
                                            Alquiler de Autos</span>
                                    }>
                                        {/*<HowCar/>*/}
                                    </Tab>
                                    <Tab eventKey={3} title={
                                        <span>
                                            <img src={park} className="main-icon"/>&nbsp;
                                            Alquiler de Cocheras</span>
                                    }>
                                    </Tab>
                                    {/*<Tab eventKey={4} disabled title={*/}
                                    {/*<span>*/}
                                    {/*<img src={elec} className="main-icon"/>&nbsp;*/}
                                    {/*Autos eléctricos &nbsp;<Label bsStyle="warning">Próx.</Label></span>*/}
                                    {/*}>*/}
                                    {/*</Tab>*/}
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
