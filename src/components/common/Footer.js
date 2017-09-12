import React, {Component} from "react";
import {HashLink as Link} from 'react-router-hash-link';
import {Col, Image, Label, Row} from "react-bootstrap";
import Responsive from "react-responsive";

import logo_side from "../../img/logo/autoqe_txt_w.svg"
import job from "../../img/icons/material/job.svg"
import design from "../../img/icons/material/design.svg"
import press from "../../img/icons/material/press.svg"
import world from "../../img/icons/material/world.svg"
import code from "../../img/icons/material/code.svg"
import hWorks from "../../img/icons/material/howWorks.svg"
import social from "../../img/icons/material/share.svg"
import quest from "../../img/icons/material/quest.svg"
import leaf from "../../img/icons/material/leaf.svg"
import team from "../../img/icons/material/team.svg"
import disc from "../../img/icons/material/disc2.svg"
import contact from "../../img/icons/material/contact2.svg"
import "./footer.css"
//Icons
import carp from "../../img/icons/services/carp.svg";
import rent from "../../img/icons/services/rent.svg";
import park from "../../img/icons/services/park.svg";
import el from "../../img/icons/services/el.svg";

// Default (desktop, tablet) and mobile setup
const Huge = ({children}) => <Responsive minWidth={1218} children={children}/>;
const NotHuge = ({children}) => <Responsive maxWidth={1218} children={children}/>;

class Footer extends Component {
    render() {
        return (
            <footer className="footer" id="footer">
                <section className="section section-footer">
                    <Row>
                        <Col xs={4} md={3}> <Image responsive src={logo_side}/>
                        </Col>
                        <Col xs={8} md={9}>
                            {/*<img alt="" src={} height={30} alt="Secure payment"/> &nbsp;*/}
                            <h4> Sobre nosotros</h4>
                            <p>Autoqe es una solución de transporte dentro de la economía colaborativa.
                                Te permite compartir trayectos, alquilar autos y cocheras entre particulares a tu
                                alrededor. </p>
                            <Huge>
                                <p> Es más barato, facil, y rápido ya que elimina los intermediarios y permite poner en
                                    contacto a los particulares.
                                    Además permite reducir el tráfico de vehículos en las grandes ciudades, ayudando al
                                    medio ambiente y reducir así el impacto nocivo en la capa de ozono.
                                </p>
                            </Huge>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5} md={3}>
                            <ul><h4>Servicios</h4>
                                <li><img alt="" className="footer-icon" src={carp}/><Link to="/trips"> Carpooling</Link></li>
                                <li><img alt="" className="footer-icon" src={rent}/><Link to="/carrent"> Alquiler de Autos</Link>
                                </li>
                                <li><img alt="" className="footer-icon" src={park}/><Link to="/parkrent"> Alquiler de
                                    Cocheras</Link></li>
                                <li><img alt="" className="footer-icon" src={el}/><Link to="/electric"> Autos Eléctricos </Link>
                                    <Label bsStyle="warning">Próx.</Label></li>
                            </ul>
                        </Col>
                        <Col xs={5} md={3}>
                            <ul><h4>Aprendé mas</h4>
                                <li><img alt="" className="footer-icon" src={hWorks}/><Link to="/howWorks"> ¿Cómo funciona?</Link>
                                </li>
                                <li><img alt="" className="footer-icon" src={quest}/><Link to="/faq"> Preguntas frecuentes</Link>
                                </li>
                                <li><img alt="" className="footer-icon" src={social}/><Link to="/collaborative"> Economía
                                    Colaborativa</Link></li>
                                <li><img alt="" className="footer-icon" src={leaf}/><Link to="/green"> Huella ecológica</Link></li>
                            </ul>
                        </Col>
                        <Col xs={5} md={3}>
                            <ul><h4> Autoqe</h4>
                                <li><img alt="" className="footer-icon" src={world}/><Link to="/next"> Próximos paises</Link></li>
                                <li><img alt="" className="footer-icon" src={design}/><Link to="/design">Rincón de Diseño</Link></li>
                                <li><img alt="" className="footer-icon" src={code}/><Link to="/dev">Rincón de Desarrollo</Link></li>
                                <li><img alt="" className="footer-icon" src={press}/><Link to="/press"> Espacio de Prensa</Link></li>
                            </ul>
                        </Col>
                        <Col xs={5} md={3}>
                            <ul><h4>Contacto</h4>
                                <li><img alt="" className="footer-icon" src={disc}/><Link to="/promotion"> Promos</Link></li>
                                <li><img alt="" className="footer-icon" src={team}/><Link to="/team"> Equipo</Link></li>
                                <li><img alt="" className="footer-icon" src={job}/><Link to="/work"> Trabajos </Link><Label
                                    bsStyle="success">Contratando!</Label></li>
                                <li><img alt="" className="footer-icon" src={contact}/><Link to="/contact"> Contacto</Link></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="social-container">
                        <h2>
                            <Link to="https://www.facebook.com/autoqe">
                                <i className="social-icon fa fa-facebook"/></Link>
                            <Link to="https://www.twitter.com/autoqe">
                                <i className="social-icon fa fa-twitter"/></Link>
                            <Link to="https://www.instagram.com/autoqe">
                                <i className="social-icon fa fa-instagram"/></Link>
                            <Link to="https://www.youtube.com/channel/UC7RUb3Ieez8Pl9uLIhZclyQ">
                                <i className="social-icon fa fa-youtube"/></Link>
                            <Link to="https://www.linkedin.com/company/16232988/">
                                <i className="social-icon fa fa-linkedin"/></Link>
                            <Link to="https://google.com/+autoqe">
                                <i className="fa fa-google-plus"/></Link>
                        </h2>
                    </Row>
                    <Row>
                        <p style={{textAlign: 'center'}}>Autoqe.com © 2017 - Todos los derechos reservados. Creado entre
                            Buenos Aires y Barcelona </p>
                    </Row>
                </section>
            </footer>
        );
    }
}

export default Footer;
