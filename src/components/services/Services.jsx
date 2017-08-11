import React from "react";
import {Button, Glyphicon, Image, Label, Row} from "react-bootstrap";
import Responsive from 'react-responsive';

import srvCarp from "../../img/banner/mockup-carPool.png";
import srvShare from "../../img/banner/mockup-carShare.png";
import srvPark from "../../img/banner/parking4.jpg";
import srvElec from "../../img/banner/mockup_elec.png";

import trip from "../../img/logo/carp_g.svg";
import car from "../../img/logo/car_g.svg";
import park from "../../img/logo/park_g.svg";
import elec from "../../img/logo/elec_g.svg";
import money from "../../img/icons/material/money.svg";
import share from "../../img/icons/material/hand-shake.svg";
import time from "../../img/icons/material/fast.svg";

// Default (desktop, tablet) and mobile setup
const Default = ({children}) => <Responsive minWidth={640} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={640} children={children}/>;

export default class ServiceComp extends React.Component {
    render() {
        return (
            <section className="container">
                <div className="grid-row-two-up-skinny">
                    {/*Carpooling*/}
                    <div className="grid-item sub-section" style={{marginTop: '3vh'}}>
                        <Row className="sub-section-title">
                            <h3>
                                <img src={trip} className="main-icon"/>&nbsp;
                                <Label bsSize="lg" className="btn-fine">Carpooling</Label> Compartí trayectos
                            </h3>
                        </Row>
                        <div className="sub-section-text">
                            <p>Dividí los gastos del viaje con otros pasajeros.</p>
                            <Row>
                                <img height={25} src={money}/>&nbsp;
                                <b> Ahorrá</b>
                                &nbsp; hasta un 30% por cada pasajero o trayecto
                            </Row>
                            <Row>
                                <img height={25} src={share}/>&nbsp;
                                <b>Compartí</b> rutas, viajes, escapadas de fin de semana, trayectos cortos...
                            </Row>
                            <p/>
                            <Button className="btn-fine"><Glyphicon glyph="search"/>&nbsp; Encontrá</Button>
                            &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Publicá
                            trayecto:</Button>
                        </div>
                    </div>
                    <div className="grid-item sub-section">
                        <Image responsive src={srvCarp}/>
                    </div>

                    {/*Car rental*/}
                    <Default>
                        <div className="grid-item sub-section">
                            <Image responsive src={srvShare}/>
                        </div>
                    </Default>
                    <div className="grid-item sub-section" style={{marginTop: '3vh'}}>
                        <Row className="sub-section-title">
                            <h3>
                                <img src={car} className="main-icon"/>&nbsp;
                                <Label bsSize="lg" className="btn-fine">Alquiler de
                                    Autos</Label> entre particulares
                            </h3>
                        </Row>
                        <div className="sub-section-text">
                            <p>Un vehículo a tu disposición cuando lo necesités.</p>
                            <Row>
                                <img height={25} src={money}/>&nbsp;
                                <b>Ahorrá</b> plata en el mantenimiento del auto
                            </Row>
                            <Row>
                                <img height={25} src={money}/>&nbsp;
                                <b>Simplificá</b> trámites con nuestra app
                            </Row>
                            <Row>
                                <img height={25} src={money}/>&nbsp;
                                <b>Seguro</b> contra todo riesgo durante el periódo del alquiler
                            </Row>
                            <p/>
                            <Button className="btn-fine"><Glyphicon glyph="search"/>&nbsp; Alquilá</Button>
                            &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Publicá tu
                            Auto:</Button>
                        </div>
                    </div>
                    <Mobile>
                        <div className="grid-item sub-section">
                            <Image responsive src={srvShare}/>
                        </div>
                    </Mobile>

                    {/*Garage*/}
                    <div className="grid-item sub-section" style={{marginTop: '1vh'}}>
                        <Row className="sub-section-title">
                            <h3 sty>
                                <img src={park} className="main-icon"/>&nbsp;
                                <Label bsSize="lg" className="btn-fine">Alquiler de
                                    Cocheras</Label> entre particulares
                            </h3>
                        </Row>
                        <div className="sub-section-text">
                            <p>Un vehículo a tu disposición cuando lo necesites. Olvidate del mantenimiento del
                                auto.</p>
                            <Row>
                                <img height={25} src={money}/>&nbsp;
                                <b>Tiempo</b> No creeras lo fácil que es
                            </Row>
                            <Row>
                                <img height={25} src={money}/>&nbsp;
                                <b>Dinero</b> Mucho más barato que cualquier agencia de alquiler
                            </Row>
                            <Row>
                                <img height={25} src={money}/>&nbsp;
                                <b>Seguro</b> de hogar durante el periodo del alquiler
                            </Row>
                            <p/>
                            <Button className="btn-fine"><Glyphicon glyph="search"/>&nbsp; Encontrá</Button>
                            &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Alquilá
                            cochera</Button>
                        </div>
                    </div>
                    <div className="grid-item sub-section">
                        <Image responsive src={srvPark} className="img-service" style={{borderRadius: '50%'}}/>
                    </div>

                    {/*Electric*/}
                    <Default>
                        <div className="grid-item sub-section">
                            <Image responsive src={srvElec} className="img-service"/>
                        </div>
                    </Default>
                    <div className="grid-item sub-section" style={{marginTop: '1vh'}}>
                        <Row className="sub-section-title">
                            <h3 style={{display: 'inline'}}>
                                <img src={elec} className="main-icon"/>
                                <Label bsSize="lg" className="btn-fine">Autos
                                    eléctricos</Label> por horas &nbsp;
                            </h3>
                            <Label bsStyle="warning">Próxim.</Label>
                        </Row>
                        <div className="sub-section-text">
                            <p>El auto eléctrico por fin llegó a Buenos Aires!</p>
                            <Row>
                                <img height={25} src={time}/>&nbsp;
                                <b>Por horas</b> Cúando quieras y dónde lo necesitás.
                            </Row>
                            <Button className="btn-fine"><Glyphicon glyph="search"/>&nbsp; Encontrá auto
                                eléctrico</Button>
                        </div>
                    </div>
                    <Mobile>
                        <div className="grid-item sub-section">
                            <Image responsive src={srvElec} className="img-service"/>
                        </div>
                    </Mobile>
                </div>
            </section>
        );
    }
}
