import React from "react";
import {Button, Col, Glyphicon, Image, Label, Row} from "react-bootstrap";

import srvCarp from "./../img/banner/mockup-carPool.png";
import srvShare from "./../img/banner/mockup-carShare.png";
import srvPark from "./../img/banner/cochera.jpg";
import srvElec from "./../img/banner/mockup_elec.png";
import trip from "../img/icons/material/carp.png";
import car from "../img/icons/material/carRent.png";
import park from "../img/icons/material/garage.png";
import elec from "../img/icons/material/electric-car.png";
import mate from "../img/icons/material/mate.svg";
import money from "../img/icons/material/money.svg";
import android from "../img/icons/google-play-badge.svg";
import ios from "../img/icons/app-store-badge.svg";

export default class ServiceComp extends React.Component {
    render() {
        return (
            <section className="section section-main" id="section-what-it-does">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">Economia Colaborativa</h1>
                        <div className="section-header-text">
                            <p>Comparte lo que no usas de forma fácil y segura.</p>
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
                                <h2 className="sub-section-title">Carpooling: Comparte trayecto</h2>
                                <p>Diviertete compartiendo viajes con otros pasajeros haciendo que todos ahorremos.</p>
                                <Row className="show-grid">
                                    <Col xs={1} md={2}>
                                        <img src={money}
                                             className="sub-section-mini-icon"/>
                                    </Col>
                                    <Col xs={9} md={10}>
                                        <p><Label bsStyle="success">Ahorra</Label> &nbsp;hasta un tercio del coste del
                                            trayecto por cada pasajero!</p>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={1} md={2}>
                                        <img src={mate}
                                             alt="Increase Conversions" className="sub-section-mini-icon"/>
                                    </Col>
                                    <Col xs={9} md={10}>
                                        <p><Label bsStyle="primary">Comparte</Label> &nbsp; Rutas, viajes, escapadas de fin de semana, trayectos cortos... cerca tuyo!</p>
                                    </Col>
                                </Row>

                                <p>Rutas, viajes, escapadas de fin de semana, trayectos cortos... cerca tuyo!</p>
                                <Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Publica
                                    trayecto:</Button>
                                &nbsp;<Button bsStyle="custom"><Glyphicon glyph="search"/>&nbsp; Encuentra</Button>
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
                                <h2 className="sub-section-title">Alquiler de Auto entre particulares</h2>
                              <p>Ahorra:</p>
                              <Row className="show-grid">
                                <Col xs={1} md={2}>
                                    <img src={money}
                                         className="sub-section-mini-icon"/>
                                </Col>
                                <Col xs={9} md={10}>
                                    <p><Label bsStyle="danger">Tiempo</Label> &nbsp;No creeras lo fácil que es</p>
                                </Col>
                              </Row>
                              <Row className="show-grid">
                                <Col xs={1} md={2}>
                                    <img src={mate}
                                         alt="Increase Conversions" className="sub-section-mini-icon"/>
                                </Col>
                                <Col xs={9} md={10}>
                                  <p><Label bsStyle="primary">Dinero</Label> &nbsp; Mucho más barato que cualquier agencia de alquiler</p>
                                </Col>
                              </Row>
                              <Row className="show-grid">
                                <Col xs={1} md={2}>
                                    <img src={money}
                                         alt="Increase Conversions" className="sub-section-mini-icon"/>
                                </Col>
                                <Col xs={9} md={10}>
                                  <p><Label bsStyle="success">Seugro</Label> &nbsp; Asegurado a todo riesgo durante el periodo del alquiler</p>
                                </Col>
                              </Row> <Button bsStyle="custom"><Glyphicon glyph="search"/>&nbsp; Encuentra</Button>
                                &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Publica
                                trayecto:</Button>
                            </div>
                        </div>

                        {/*Garage*/}
                        <div className="grid-item sub-section">
                          <img src={park} className="sub-section-icon"/>
                            <div className="sub-section-text">
                                <h2 className="sub-section-title">Alquiler de Cocheras entre particulares</h2>
                                <p>Ahorra:</p>
                              <Row className="show-grid">
                                <Col xs={1} md={2}>
                                    <img src={money}
                                         className="sub-section-mini-icon"/>
                                </Col>
                                <Col xs={9} md={10}>
                                    <p><Label bsStyle="custom">Tiempo</Label> &nbsp;No creeras lo fácil que es</p>
                                </Col>
                              </Row>
                              <Row className="show-grid">
                                <Col xs={1} md={2}>
                                    <img src={money}
                                         alt="Increase Conversions" className="sub-section-mini-icon"/>
                                </Col>
                                <Col xs={9} md={10}>
                                  <p><Label bsStyle="primary">Dinero</Label> &nbsp; Mucho más barato que cualquier agencia de alquiler</p>
                                </Col>
                              </Row>
                              <Row className="show-grid">
                                <Col xs={1} md={2}>
                                    <img src={money}
                                         alt="Increase Conversions" className="sub-section-mini-icon"/>
                                </Col>
                                <Col xs={9} md={10}>
                                    <p><Label bsStyle="success">Seguro</Label> &nbsp; Asegurado a todo riesgo durante el
                                        periodo del alquiler</p>
                                </Col>
                              </Row>
                                <Button bsStyle="custom"><Glyphicon glyph="search"/>&nbsp; Encuentra</Button>
                                &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Alquila
                                cochera</Button>
                            </div>
                        </div>
                        <div className="grid-item sub-section">
                            <Image responsive src={srvPark}/>
                        </div>

                        {/*Electric car*/}
                        <div className="grid-item sub-section">
                            <Image responsive src={srvElec}/>
                        </div>
                        <div className="grid-item sub-section">
                            <img src={elec} className="sub-section-icon"/>
                            <div className="sub-section-text">
                                <h2 className="sub-section-title">Alquila Autos eléctricos por horas</h2>
                                <p>Por fin el auto eléctrico ha llegado a Buenos Aires!</p>
                                <p>Tan facil como el servicio público de bicicletas.</p>
                                <p>Ahorra hasta un tercio del coste del trayecto por cada pasajero!</p>
                                <Button bsStyle="custom"><Glyphicon glyph="search"/>&nbsp; Encuentra</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
