import React from "react";
import {Button, Collapse, Glyphicon, Grid, Label, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import "./timeline.css";
import volante from "../../img/icons/material/steering-wheel.svg";
import users from "../../img/icons/material/users.svg";
import pay from "../../img/icons/material/secure_pay_w.svg";

import locDriver from "../../img/icons/material/loc2.svg";
import locUser from "../../img/icons/material/loc4.svg";
import SearchBarComp from "../Trips/SearchBar";

export default class HowCarpooling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //By default, both selected
            value: [1, 2], addTrip: 0
        };
    }

    onKindChange = (value) => {
        this.setState({value});
    };

    render() {
        return (<Grid>
                <Row>
                    <ToggleButtonGroup type="checkbox" value={this.state.value} onChange={this.onKindChange}>
                        <ToggleButton value={1}><h4 style={{color: "#122b40"}}>
                            <img src={volante} className="icon-row"/>
                            Conductor</h4></ToggleButton>
                        <ToggleButton value={2}><h4 style={{color: "#74acdf"}}>
                            <img src={users} className="icon-row"/>
                            Pasajeros</h4></ToggleButton>
                    </ToggleButtonGroup>
                    <div className=" timeline-background col-lg-12">
                        <ul className=" timeline">
                            <Collapse in={-1 !== this.state.value.indexOf(1)}>
                                <li>
                                    <img className="timeline-image img-circle img-responsive" src={locDriver}
                                         alt="autoqe" onClick={() => this.setState({addTrip: !this.state.addTrip})}/>
                                    <h1 className="timeline-image timeline-number-driver">+</h1>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading ">
                                            <h2 className="subheading"
                                                onClick={() => this.setState({addTrip: !this.state.addTrip})}
                                                style={{color: '#122b40'}}>
                                                1. Publicá tu viaje
                                            </h2>
                                            <Collapse in={this.state.addTrip}>
                                                <div><SearchBarComp style={{float: 'left'}}/>
                                                </div>
                                            </Collapse>
                                            <h4 className="driver">
                                                Añadí facilmente los detalles de tu viaje &nbsp;
                                            </h4>
                                            <p>Puedes configurar diversas opciones</p>
                                            <Button bsStyle="primary"
                                                    onClick={() => this.setState({addTrip: !this.state.addTrip})}>
                                                <Glyphicon glyph="plus-sign"/>&nbsp; Publicá viaje</Button>
                                        </div>
                                    </div>
                                </li>
                            </Collapse>

                            <Collapse in={-1 !== this.state.value.indexOf(2)}>
                                <li className="timeline-inverted">
                                    <img className="timeline-image img-circle img-responsive" src={locUser} alt=""/>
                                    <h3 className="timeline-image timeline-number-user"><Glyphicon glyph="search"/></h3>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h2 className="subheading">1. Encuentra y Reserva</h2>
                                            <h4>Busca y reserva con un método de <Label>
                                                <img src={pay} height={25}/>&nbsp;
                                                Pago seguro</Label></h4>
                                            <p> Filtra las opciones deseadas</p>
                                            <Button className="btn-fine"><Glyphicon glyph="search"
                                                                                    className="icon-glyph"/> Encontrá
                                                viaje</Button>
                                        </div>
                                    </div>
                                </li>
                            </Collapse>

                            <Collapse in={-1 !== this.state.value.indexOf(1)}>
                                <li>
                                    <img className="timeline-image img-circle img-responsive" src={locDriver}
                                         alt="autoqe"/>
                                    <h3 className="timeline-image timeline-number-user"><Glyphicon glyph="ok"/></h3>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading ">
                                            <h2 className="subheading" style={{color: '#122b40'}}>
                                                2. Recibís la reserva
                                            </h2>
                                            <h4 className="driver">
                                                Cuando un pasajero reserva una plaza obtienes su teléfono
                                            </h4>
                                            <p>Contactas con el para acordar lugar y hora exacta de reunión</p>
                                        </div>
                                    </div>
                                </li>
                            </Collapse>

                            <Collapse in={-1 !== this.state.value.indexOf(2)}>
                                <li className="timeline-inverted">
                                    <img className="timeline-image img-circle img-responsive" src={locUser} alt=""/>
                                    <h3 className="timeline-image timeline-number-user"><Glyphicon glyph="road"/></h3>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h2 className="subheading">2. Comparten el trayecto</h2>
                                            <h4>Se encuentran y comparten juntos la experiencia</h4>
                                            <p> Al llegar a destino solo deben confirmar el trayecto y puntuar al
                                                conductor</p>
                                        </div>
                                    </div>
                                </li>
                            </Collapse>

                            <Collapse in={-1 !== this.state.value.indexOf(1)}>
                                <li>
                                    <img className="timeline-image img-circle img-responsive" src={locDriver}
                                         alt="autoqe"/>
                                    <h3 className="timeline-image timeline-number-user"><Glyphicon glyph="star"/></h3>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading ">
                                            <h2 className="subheading" style={{color: '#122b40'}}>
                                                3. Valorás y recibís el dinero
                                            </h2>
                                            <h4 className="driver">
                                                Una vez confirmado el fin del trayecto por los pasajeros, recibes el
                                                dinero.
                                            </h4>
                                            <p>Acordate de poner una valoración de cada pasajero, es la mejor manera de
                                                saber en quien confiar!</p>
                                        </div>
                                    </div>
                                </li>
                            </Collapse>
                        </ul>
                    </div>
                </Row>
            </Grid>
        );
    }
}
