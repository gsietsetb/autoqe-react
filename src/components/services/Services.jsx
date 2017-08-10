import React from "react";
import {Button, Glyphicon, Image, Label, Row} from "react-bootstrap";

import srvCarp from "../../img/banner/mockup-carPool.png";
import srvShare from "../../img/banner/mockup-carShare.png";
import srvPark from "../../img/banner/parking4.jpg";
import srvElec from "../../img/banner/mockup_elec.png";

import trip from "../../img/logo/carp_g.svg";
import car from "../../img/logo/car_g.svg";
import park from "../../img/logo/park_g.svg";
import elec from "../../img/logo/elec_g.svg";
import money from "../../img/icons/material/money.svg";

function SetCarRental() {
    return (
        <div>
            {/*Car rental*/}
            {/*<MediaQuery minDeviceWidth={640}>*/}
            {/*<div className="grid-item sub-section">*/}
            {/*<Image responsive src={srvShare}/>*/}
            {/*</div>*/}
            {/*</MediaQuery>*/}
            <div className="grid-item sub-section">
                <div className="sub-section-text">
                    <h2 className="sub-section-title">
                        <img src={car} className="main-icon"/>&nbsp;
                        <Label bsSize="lg" className="btn-service">Alquiler de
                            Autos</Label> entre particulares</h2>
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
                    <p> &nbsp;</p>
                    <Button className="btn-fine"><Glyphicon glyph="search"/>&nbsp; Alquilá</Button>
                    &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Publicá tu
                    Auto:</Button>
                </div>
            </div>
            {/*<MediaQuery maxDeviceWidth={640}>*/}
            <div className="grid-item sub-section">
                <Image responsive src={srvShare}/>
            </div>
            {/*</MediaQuery>*/}
        </div>)
}

function SetElectric() {
    return (
        <div>
            {/*Electric car*/}
            {/*<MediaQuery minDeviceWidth={640}>*/}
            {/*<div className="grid-item sub-section">*/}
            {/*<Image responsive src={srvElec} style={{maxWidth: '30vh'}}/>*/}
            {/*</div>*/}
            {/*</MediaQuery>*/}
            <div className="grid-item sub-section">
                <div className="sub-section-text">
                    <h2 className="sub-section-title">
                        <img src={elec} className="main-icon"/>
                        <Label bsSize="lg" className="btn-service">Alquilá Autos
                            eléctricos</Label> por horas <Label bsStyle="warning">Próximamente.</Label></h2>
                    <p>Por fin el auto eléctrico ha llegado a Buenos Aires!</p>
                    <p>Tan facil como el servicio público de bicicletas.</p>
                    <p>Ahorra hasta un tercio del coste del trayecto por cada pasajero!</p>
                    <Button className="btn-fine"><Glyphicon glyph="search"/>&nbsp; Encontrá auto
                        eléctrico</Button>
                </div>
            </div>
            {/*<MediaQuery maxDeviceWidth={640}>*/}
            <div className="grid-item sub-section">
                <Image responsive src={srvElec} style={{maxWidth: '30vh'}}/>
            </div>
            {/*</MediaQuery>*/}
        </div>)
}


export default class ServiceComp extends React.Component {
    render() {
        return (
            <section className="container">
                <div className="grid-row-two-up-skinny">
                    {/*Carpooling*/}
                    <div className="grid-item sub-section">
                        <div className="sub-section-text">
                            <h2 className="sub-section-title">
                                <img src={trip} className="main-icon"/>&nbsp;
                                {/*<Glyphicon glyph="triangle-down" className="bubble-speech"/>*/}
                                <Label bsSize="lg" className="btn-service">Carpooling</Label> Compartí trayectos
                            </h2>
                            <p>Dividí los gastos del viaje con otros pasajeros.</p>
                            <Row>
                                <img height={25} src={money}/>&nbsp;
                                <b> Ahorrá</b>
                                &nbsp; hasta un 30% por cada pasajero o trayecto
                            </Row>
                            <Row>
                                <img height={25} src={money}/>&nbsp;
                                <b>Compartí</b> rutas, viajes, escapadas de fin de semana, trayectos cortos...
                            </Row>
                            <p> &nbsp;</p>
                            <Button className="btn-fine"><Glyphicon glyph="search"/>&nbsp; Encontrá</Button>
                            &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Publicá
                            trayecto:</Button>
                        </div>
                    </div>
                    <div className="grid-item sub-section">
                        <Image responsive src={srvCarp}/>
                    </div>

                    <SetCarRental/>

                    {/*Garage*/}
                    <div className="grid-item sub-section">
                        <div className="sub-section-text">
                            <h2 className="sub-section-title">
                                <img src={park} className="main-icon"/>&nbsp;
                                <Label bsSize="lg" className="btn-service">Alquiler de
                                    Cocheras</Label> entre particulares</h2>
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
                            <Button className="btn-fine"><Glyphicon glyph="search"/>&nbsp; Encontrá</Button>
                            &nbsp;<Button bsStyle="primary"><Glyphicon glyph="plus-sign"/>&nbsp; Alquilá
                            cochera</Button>
                        </div>
                    </div>
                    <div className="grid-item sub-section">
                        <Image responsive src={srvPark} style={{maxWidth: '30vh', borderRadius: '50%'}}/>
                    </div>

                    <SetElectric/>
                </div>
            </section>
        );
    }
}
