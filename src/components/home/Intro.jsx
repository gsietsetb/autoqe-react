import React from "react";
import {Button, Col, Glyphicon, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import lock from "../../img/icons/material/lock.svg";
import quest from "../../img/icons/material/quest_gold.svg";
import secure from "../../img/icons/material/secure_pay.svg";
import leaf from "../../img/icons/material/leaf_g.svg";
import money from "../../img/icons/material/money_gold.svg";

export default class Intro extends React.Component {
    render() {
        return (
            <section className="section section-dark" id="section-intro">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">
                            {/*<img alt="" src={autoqe_gray} className="main-icon"/>&bnsp;*/}
                            Ahora viajar es más barato, fácil y divetido</h1>
                        <div className="section-header-text">
                            <Row style={{marginBottom: 20}}> <p>Descubrí como la economía colaborativa te permite compartir lo que no usás &nbsp;</p></Row>
                            <Row className="highlight-icon">
                                <Col xs={4}>
                                    <img src={lock}/>
                                    <h3 className="service-carp">Fácil y Seguro</h3>
                                    <p>
                                        <Row style={{textAlign: 'left'}}> <Glyphicon glyph="ok"/> &nbsp; Sin Papeleos</Row>
                                        <Row style={{textAlign: 'left'}}> <Glyphicon glyph="ok"/> &nbsp; Perfiles verificados</Row>
                                        <Row style={{textAlign: 'left'}}> <Glyphicon glyph="star"/> &nbsp; Puntuación por trayectos</Row>
                                    </p><Link to="/green">
                                    <Button className="btn-white-light">
                                        <img style={{height: 20}} src={secure}/>&nbsp;
                                        Pago seguro</Button>
                                </Link>
                                </Col>
                                <Col xs={4}>
                                    <img src={leaf}/>
                                    {/*<h1><Glyphicon style={{color: 'green'}} glyph="leaf"/></h1>*/}
                                    <h3 className="service-park">Sostenible</h3>
                                    <p>Ayudás al Medioambiente evitando hasta el 60% de las emisiones nocivas de CO<sub>2</sub></p>
                                    <Link to="/green">
                                        <Button className="service-park">
                                            <img style={{height: 20}} src={leaf}/>&nbsp;
                                            Cálculo de CO<sub>2</sub> </Button>
                                    </Link>
                                </Col>
                                <Col xs={4}>
                                <img src={money}/>
                                {/*<h1><Glyphicon style={{color: 'var(--elec)'}} glyph="piggy-bank"/></h1>*/}
                                <h3 className="service-elec">Ahorrá</h3>
                                <p>Hasta un 30% más barato
                                    <Row style={{textAlign: 'left'}}> <Glyphicon glyph="ok"/> &nbsp; Sin intermediarios</Row>
                                    <Row style={{textAlign: 'left'}}> <Glyphicon glyph="ok"/> &nbsp; Sin gastos extra</Row>
                                </p><Link to="/green">
                                <Button className="btn-gold-light">
                                    <img style={{height: 20}} src={quest}/>&nbsp;
                                    ¿Cómo funciona? </Button>
                            </Link>
                            </Col>
                            </Row>
                            {/*<Image style={{marginBottom: '2em'}} responsive src={mockup}  className=""/>*/}
                            {/*<Image responsive src={s8} height="600"  className=""/>*/}
                            {/*<Image src={ios} className="brand-logo"/>*/}
                            {/*<Image src={android} className="brand-logo"/>*/}
                        </div>
                    </div>
                </header>
            </section>
        );
    }
}
