import React from "react";
import {Button, Col, Glyphicon, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import lock from "../../img/icons/material/lock.svg";
import quest from "../../img/icons/material/interrog.svg";
import secure from "../../img/icons/material/secure_pay.svg";
import leaf from "../../img/icons/material/leaf.svg";
import money from "../../img/icons/material/money.svg";

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
                                <Col xs="4">
                                    <img src={money}/>
                                    <h3>Ahorrá</h3>
                                    <p>Hasta un 30% más barato
                                    <Row style={{textAlign: 'left'}}> <Glyphicon glyph="ok"/> &nbsp; Sin intermediarios</Row>
                                    <Row style={{textAlign: 'left'}}> <Glyphicon glyph="ok"/> &nbsp; Sin Papeleos</Row>
                                    <Row style={{textAlign: 'left'}}> <Glyphicon glyph="ok"/> &nbsp; Sin gastos extra</Row>
                                </p><Link to="/green">
                                        <Button className="btn-white-light">
                                            <img style={{height: 20}} src={quest}/>&nbsp;
                                            ¿Cómo funciona? </Button>
                                    </Link>
                                </Col>
                                <Col xs="4">
                                    <img src={leaf}/>
                                    <h3>Ayudá al Medioambiente</h3>
                                    <p>Evita hasta el 60% de las emisiones nocivas a la atmósfera</p>
                                    <Link to="/green">
                                        <Button bsStyle="success">
                                            <Glyphicon glyph="leaf"/> &nbsp;
                                            Cálculo de Co2 </Button>
                                    </Link>
                                </Col>
                                <Col xs="4">
                                    <img src={lock}/>
                                    <h3>Fácil y Seguro</h3>
                                    <p>
                                        Comprobá fácilmente el perfil de los usuarios
                                        <Row style={{textAlign: 'left'}}> <Glyphicon glyph="ok"/> &nbsp; Perfiles verificados</Row>
                                        <Row style={{textAlign: 'left'}}> <Glyphicon glyph="star"/> &nbsp; Puntuación por trayectos</Row>
                                    </p><Link to="/green">
                                        <Button className="btn-white-light">
                                            <img style={{height: 20}} src={secure}/>&nbsp;
                                            Pago seguro</Button>
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
