import React from "react";
import {Button, Col, Glyphicon, Image, Label, Row} from "react-bootstrap";

import srvCarp from "./../img/banner/mockup-carPool.png";
import srvShare from "./../img/banner/mockup-carShare.png";
import srvPark from "./../img/banner/cochera.jpg";
import srvElec from "./../img/banner/mockup_elec.png";
import trip from "./../img/logo/car_g.svg";
import car from "./../img/logo/carp_g.svg";
import park from "./../img/logo/park_g.svg";
import elec from "./../img/logo/elec_g.svg";
import mate from "../img/icons/material/mate.svg";
import money from "../img/icons/material/money.svg";
import android from "../img/icons/google-play-badge.svg";
import ios from "../img/icons/app-store-badge.svg";
import autoqe_gray from "../img/logo/autoqe_gray.svg";

export default class ServiceComp extends React.Component {
    render() {
        return (
            <section className="section section-main section-regular" id="section-what-it-does">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">
                            <img src={autoqe_gray} height={60}/>
                            Ahora viajar es más divertido, fácil y seguro</h1>
                        <div className="section-header-text">
                            <p>Compartí lo que no usas de forma fácil y segura.</p>
                            <p>Todas las soluciones de transporte alrededor tuyo en una única aplicación:</p>
                            <Image src={android} height="60"/>
                            <Image src={ios} height="60"/>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <div className="grid-row-two-up-skinny">

                        {/*Carpooling*/}
                        <div className="grid-item sub-section">
                            <img src={trip} className="sub-section-icon"/>
                            <div className="sub-section-text">
                                <h2 className="sub-section-title"><Label>Carpooling</Label> Compartí trayectos    </h2>
                                <p>Dividí los gastos de tu viaje con otros pasajeros.</p>
                                <Row className="show-grid">
                                    <Col xs={1} md={2}>
                                        <img src={money}
                                             className="sub-section-mini-icon"/>
                                    </Col>
                                    <Col xs={9} md={10}>
                                        <p><b> Ahorrá</b>
                                            &nbsp;hasta un 30% por cada pasajero o trayecto</p>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={1} md={2}>
                                        <img src={mate}
                                             alt="Increase Conversions" className="sub-section-mini-icon"/>
                                    </Col>
                                    <Col xs={9} md={10}>
                                        <p><b>Compartí</b> rutas, viajes, escapadas de fin de semana, trayectos cortos...</p>
                                    </Col>
                                </Row>
                                <p> &nbsp;</p>
                                <Button bsStyle="custom"><Glyphicon glyph="search"/>&nbsp; Encontrá</Button>
                                &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Publicá
                                trayecto:</Button>
                            </div>
                        </div>
                        <div className="grid-item sub-section">
                            <Image responsive src={srvCarp}/>
                        </div>

                        {/*Car rental*/}
                        <div className="grid-item sub-section">
                            <Image responsive src={srvShare}/>
                        </div>
                        <div className="grid-item sub-section">
                            <img src={car} className="sub-section-icon"/>
                            <div className="sub-section-text">
                                <h2 className="sub-section-title"><Label>Alquiler de Autos</Label> entre particulares</h2>
                                <p>Un vehículo a tu disposición cuando lo necesités.</p>
                                <Row className="show-grid">
                                    <Col xs={1} md={2}>
                                        <img src={money} className="sub-section-mini-icon"/>
                                    </Col>
                                    <Col xs={9} md={10}>
                                        <p><b>Ahorrá</b> plata en el mantenimiento del auto</p>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={1} md={2}>
                                        <img src={mate} className="sub-section-mini-icon"/>
                                    </Col>
                                    <Col xs={9} md={10}>
                                        <p><b>Simplificá</b> trámites con nuestra app</p>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={1} md={2}>
                                        <img src={money} className="sub-section-mini-icon"/>
                                    </Col>
                                    <Col xs={9} md={10}>
                                        <p><b>Seguro</b> contra todo riesgo durante el periódo del alquiler</p>
                                    </Col>
                                </Row>
                                <p> &nbsp;</p>
                                <Button bsStyle="custom"><Glyphicon glyph="search"/>&nbsp; Alquilá</Button>
                                &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Publicá tu
                                Auto:</Button>
                            </div>
                        </div>

                        {/*Garage*/}
                        <div className="grid-item sub-section">
                            <img src={park} className="sub-section-icon"/>
                            <div className="sub-section-text">
                                <h2 className="sub-section-title"><Label>Alquiler de Cocheras</Label> entre particulares</h2>
                                <p>Un vehículo a tu disposición cuando lo necesites. Olvidate del mantenimiento del auto.</p>
                                <Row className="show-grid">
                                    <Col xs={1} md={2}>
                                        <img src={money}
                                             className="sub-section-mini-icon"/>
                                    </Col>
                                    <Col xs={9} md={10}>
                                        <p><b>Tiempo</b> No creeras lo fácil que es</p>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={1} md={2}>
                                        <img src={money} className="sub-section-mini-icon"/>
                                    </Col>
                                    <Col xs={9} md={10}>
                                        <p><b>Dinero</b> Mucho más barato que cualquier agencia de alquiler</p>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={1} md={2}>
                                        <img src={money}
                                             alt="Increase Conversions" className="sub-section-mini-icon"/>
                                    </Col>
                                    <Col xs={9} md={10}>
                                        <p><b>Seguro</b> de hogar durante el periodo del alquiler</p>
                                    </Col>
                                </Row>
                                <Button bsStyle="custom"><Glyphicon glyph="search"/>&nbsp; Encontrá</Button>
                                &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Alquilá cochera</Button>
                            </div>
                        </div>
                        <div className="grid-item sub-section">
                            <Image responsive src={srvPark} style={{borderRadius: '50%'}}/>
                        </div>

                        {/*Electric car*/}
                        <div className="grid-item sub-section">
                            <Image responsive src={srvElec}/>
                        </div>
                        <div className="grid-item sub-section">
                            <img src={elec} className="sub-section-icon"/>
                            <div className="sub-section-text">
                                <h2 className="sub-section-title"><Label>Alquilá Autos eléctricos</Label> por horas</h2>
                                <p>Por fin el auto eléctrico ha llegado a Buenos Aires!</p>
                                <p>Tan facil como el servicio público de bicicletas.</p>
                                <p>Ahorra hasta un tercio del coste del trayecto por cada pasajero!</p>
                                <Button bsStyle="custom"><Glyphicon glyph="search"/>&nbsp; Encontrá auto eléctrico</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
