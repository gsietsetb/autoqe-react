import React from "react";
import park from "./../img/icons/material/garage.svg";
import "./../App.css";
import {Button, Col, Glyphicon, Image, Label, Row} from "react-bootstrap";

import srvCarp from "./../img/banner/mockup-carPool.png";
import srvShare from "./../img/banner/mockup-carShare.png";


export default class ServiceGrid extends React.Component {
    render() {
        return (
            <section className="section section-main" id="section-what-it-does">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">Economia Colaborativa</h1>
                        <div className="section-header-text">
                            <p>Comparte lo que no usas de forma fácil y segura.</p>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <div className="grid-row-two-up-skinny">
                        {/*Carpooling*/}
                        <div className="grid-item sub-section">
                            <img src="http://d12f605tss7gg2.cloudfront.net/uploads/icons/icon-eye.svg"
                                 alt="Increase Conversions" className="sub-section-icon"/>
                            <div className="sub-section-text">
                                <h2 className="sub-section-title">Carpooling: Comparte trayecto</h2>
                                <p>Diviertete conmpartiendo viajes con otros pasajeros y conductores mientras todos
                                    ahorrais.</p>
                                {/*<Grid>*/}
                                <Row className="show-grid">
                                    <Col xs={1} md={2}>
                                        <img src="http://d12f605tss7gg2.cloudfront.net/uploads/icons/icon-eye.svg"
                                             className="sub-section-mini-icon"/>
                                    </Col>
                                    <Col xs={9} md={10}>
                                        <p><Label bsStyle="success">Ahorra</Label> &nbsp;hasta un tercio del coste del
                                            trayecto por cada pasajero!</p>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={1} md={2}>
                                        <img src="http://d12f605tss7gg2.cloudfront.net/uploads/icons/icon-chart.svg"
                                             alt="Increase Conversions" className="sub-section-mini-icon"/>
                                    </Col>
                                    <Col xs={9} md={10}>
                                        <p><Label bsStyle="primary">Ahorra</Label> &nbsp;hasta un tercio del coste del
                                            trayecto por cada pasajero!</p>
                                    </Col>
                                </Row>
                                {/*</Grid>*/}

                                <p>Rutas, viajes, escapadas de fin de semana, trayectos cortos... cerca tuyo!</p>
                                <Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Publica
                                    trayecto:</Button>
                                &nbsp;<Button bsStyle="info"><Glyphicon glyph="search"/>&nbsp; Encuentra:</Button>
                            </div>
                        </div>
                        <div className="grid-item sub-section">
                            <Image responsive src={srvCarp}/>
                        </div>

                        {/*<Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>*/}
                        {/*Car rental*/}
                        <div className="grid-item sub-section">
                            <Image responsive src={srvShare}/>
                        </div>
                        <div className="grid-item sub-section">
                            <img src={park} alt="No More Embarrassing Results" className="sub-section-icon"/>
                            <div className="sub-section-text">
                                <h2 className="sub-section-title">Carpooling: Comparte trayecto</h2>
                                <p>Diviertete conmpartiendo viajes con otros pasajeros y conductores mientras todos
                                    ahorrais.</p>
                                <p>Rutas, viajes, escapadas de fin de semana, trayectos cortos... cerca tuyo!</p>
                                <p>Rutas, viajes, escapadas de fin de semana, trayectos cortos... cerca tuyo!</p>
                                <Button bsStyle="info"><Glyphicon glyph="search"/>&nbsp; Encuentra:</Button>
                                &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Publica
                                trayecto:</Button>
                            </div>
                        </div>

                        {/*Carpooling*/}
                        <div className="grid-item sub-section">
                            <img src="http://d12f605tss7gg2.cloudfront.net/uploads/icons/icon-chart.svg"
                                 alt="Increase Conversions" className="sub-section-icon"/>
                            <div className="sub-section-text">
                                <h2 className="sub-section-title">Carpooling: Comparte trayecto</h2>
                                <p>Diviertete conmpartiendo viajes con otros pasajeros y conductores mientras todos
                                    ahorrais.</p>
                                <p>Rutas, viajes, escapadas de fin de semana, trayectos cortos... cerca tuyo!</p>
                                <p>Rutas, viajes, escapadas de fin de semana, trayectos cortos... cerca tuyo!</p>
                                <Button bsStyle="info"><Glyphicon glyph="search"/>&nbsp; Encuentra:</Button>
                                &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Publica
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
                            <img src="http://d12f605tss7gg2.cloudfront.net/uploads/icons/icon-eye.svg"
                                 alt="No More Embarrassing Results" className="sub-section-icon"/>
                            <div className="sub-section-text">
                                <h2 className="sub-section-title">Carpooling: Comparte trayecto</h2>
                                <p>Diviertete compartiendo viajes con otros pasajeros y conductores mientras todos
                                    ahorrais.</p>
                                <p>Rutas, viajes, escapadas de fin de semana, trayectos cortos... cerca tuyo!</p>
                                <p>Ahorra hasta un tercio del coste del trayecto por cada pasajero!</p>
                                <Button bsStyle="info"><Glyphicon glyph="search"/>&nbsp; Encuentra:</Button>
                                &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Publica
                                trayecto:</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
