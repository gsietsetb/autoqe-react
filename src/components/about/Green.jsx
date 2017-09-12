import React, {Component} from 'react';
import {Col, Glyphicon, Row} from "react-bootstrap";

import recycle from "../../img/icons/material/recycle.svg";
import garage from "../../img/icons/material/garage_g.svg";
import smoke from "../../img/icons/material/smokeCar.svg";
import leaf from "../../img/icons/material/leaf_g.svg";
import gas from "../../img/icons/material/gas_g.svg";

export default class Green extends Component {
    render() {
        return (
            <section className="section section-dark">
                <header className="section-header">
                    <div className="container">
                        <h3 className="section-header-title text-green">
                            <img src={leaf} className="icon-row" alt="Secure payment"/>&nbsp;
                            Colaborá con el medioambiente
                            {/*<Label bsStyle="success">*/}
                                {/*<Glyphicon glyph="leaf"/>&nbsp;*/}
                                {/*medioambiente</Label>*/}
                        </h3>
                        <div className="section-header-text" height={500}>
                            <h3>Reducí la contaminación y la huella ecológica, todos ganamos </h3>
                        </div>
                        <div className="section-header-text">
                            <Row className="highlight-icon">
                                <Col xs={3}>
                                    <img src={smoke}/>
                                    <h3 className="service-park">4.2 millones de toneladas de CO<sub>2</sub></h3>
                                    <p>
                                        ...se podrían evitar usando todos los asientos de los autos o estacionando de una manera eficiente... </p>
                                </Col>
                                <Col xs={3}>
                                    <img src={garage}/>
                                    <h3 className="service-park">41 horas al año</h3>
                                    <p>perdidas al dar vueltas con el auto intentando estacionar</p>
                                </Col>
                                <Col xs={3}>
                                    <img src={recycle}/>
                                    <h3 className="service-park">Sostenible</h3>
                                    <p>El auto eléctrico evita todos los problemas del medioambiente</p>
                                </Col>
                                <Col xs={3}>
                                    <img src={gas}/>
                                    {/*<h1><Glyphicon style={{color: 'var(--elec)'}} glyph="piggy-bank"/></h1>*/}
                                    <h3 className="service-park">Ahorrá</h3>
                                    <p>Hasta un 30% más barato
                                        <Row style={{textAlign: 'left'}}> <Glyphicon glyph="ok"/> &nbsp; Sin intermediarios</Row>
                                        <Row style={{textAlign: 'left'}}> <Glyphicon glyph="ok"/> &nbsp; Sin gastos extra</Row>
                                    </p>
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
