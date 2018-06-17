import React from "react";
import {Button, Collapse, Glyphicon, Grid, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import "./timeline.css";
import volante from "../../img/icons/material/steering-wheel.svg";
import users from "../../img/icons/material/users.svg";
import pay from "../../img/icons/material/lock.svg";
import locDriver from "../../img/icons/custom/driver.svg";
import locUser from "../../img/icons/custom/passenger.svg";
import SearchBarComp from "../Trips/SearchBar";

export default class HowCarpooling extends React.Component {
    constructor() {
        super();
        this.state = {
            //By default, both selected
            kind: ['d', 'u'],
            driver: true,
            user: true,
            addTrip: 0
        };
        this._setRole = this._setRole.bind(this)
    }

    _setRole(kind) {
      this.setState(kind.indexOf('d') !== -1 ?
          {driver: !this.state.driver} :
          {user: !this.state.user});
     };

    render() {
        return (<Grid>
                <Row>
                    <ToggleButtonGroup type="checkbox" value={!this.state.kind} onChange={this._setRole}>
                        <ToggleButton value={'d'}><h4 style={{color: "#122b40"}}>
                            <img alt="driver" src={volante} className="icon-row"/>
                            Conductor</h4></ToggleButton>
                        <ToggleButton value={'u'}><h4 style={{color: "#74acdf"}}>
                            <img alt="passenger" src={users} className="icon-row"/>
                            Pasajeros</h4></ToggleButton>
                    </ToggleButtonGroup>
                    <div className=" timeline-background col-lg-12">
                        {/*<img className="timeline-image-fix" src={carp}/>*/}
                        <ul className=" timeline">
                            <Collapse in={this.state.driver}>
                                <li>
                                    <img className="timeline-image img-circle img-responsive isDriver" src={locDriver}
                                         alt="autoqe" onClick={() => this.setState({addTrip: !this.state.addTrip})}/>
                                    <h1 className="timeline-image timeline-number-driver">1</h1>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading ">
                                            <h2 className="subheading"
                                                onClick={() => this.setState({addTrip: !this.state.addTrip})}
                                                style={{color: '#122b40'}}>
                                                + Publicá tu viaje
                                            </h2>
                                            <Collapse in={this.state.addTrip}>
                                                <div><SearchBarComp style={{float: 'left'}}/>
                                                </div>
                                            </Collapse>
                                            <h4 className="driver">
                                                Añadí facilmente los detalles de tu viaje &nbsp;
                                            </h4>
                                            <p>Puedes configurar diversas opciones</p>
                                            <Button className="btn-mix"
                                                    onClick={() => this.setState({addTrip: !this.state.addTrip})}>
                                                <Glyphicon glyph="plus-sign"/>&nbsp; Publicá viaje</Button>
                                        </div>
                                    </div>
                                </li>
                            </Collapse>

                            <Collapse in={this.state.user}>
                                <li className="timeline-inverted">
                                    <img className="timeline-image img-circle img-responsive" src={locUser} alt=""/>
                                    <h1 className="timeline-image timeline-number-user">1</h1>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h2 className="subheading"><Glyphicon glyph="search"/> Encontrá y Reservá</h2>
                                            <h4>Busca y reserva con un método de &nbsp;
                                                <Button className="btn-green" bsStyle="success">
                                                    <img alt="" src={pay} height={25}/>&nbsp;
                                                    Pago seguro
                                                </Button>
                                            </h4>
                                            <p> Filtra las opciones deseadas</p>
                                            <Button className="btn-light_w">
                                                <Glyphicon glyph="search" className="icon-glyph"/> Encontrá viaje</Button>
                                        </div>
                                    </div>
                                </li>
                            </Collapse>

                            <Collapse in={this.state.driver}>
                                <li>
                                    <img className="timeline-image img-circle img-responsive isDriver" src={locDriver}
                                         alt="autoqe"/>
                                    <h1 className="timeline-image timeline-number-driver">2</h1>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading ">
                                            <h2 className="subheading" style={{color: '#122b40'}}>
                                                <Glyphicon glyph="ok"/> Recibís la reserva
                                            </h2>
                                            <h4 className="driver">
                                                Cuando un pasajero reserva una plaza obtienes su teléfono
                                            </h4>
                                            <p>Contactas con el para acordar lugar y hora exacta de reunión</p>
                                        </div>
                                    </div>
                                </li>
                            </Collapse>

                            <Collapse in={this.state.user}>
                                <li className="timeline-inverted">
                                    <img className="timeline-image img-circle img-responsive" src={locUser} alt=""/>
                                    <h1 className="timeline-image timeline-number-user"> 2</h1>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h2 className="subheading"><Glyphicon glyph="road"/> Comparten el trayecto</h2>
                                            <h4>Se encuentran y comparten juntos la experiencia</h4>
                                            <p> Al llegar a destino solo deben confirmar el trayecto y puntuar al
                                                conductor</p>
                                        </div>
                                    </div>
                                </li>
                            </Collapse>

                            <Collapse in={this.state.driver}>
                                <li>
                                    <img className="timeline-image img-circle img-responsive isDriver" src={locDriver}
                                         alt="autoqe"/>
                                    <h1 className="timeline-image timeline-number-driver">3</h1>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading ">
                                            <h2 className="subheading" style={{color: '#122b40'}}>
                                                <Glyphicon glyph="star"/> Valorás y recibís el dinero
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
