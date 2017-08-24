import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Col, Image, Label, Row} from "react-bootstrap";
import Copyright from "./Copyright";
import MediaQuery from "react-responsive";

import logo_side from "../../img/logo/autoqe_txt_w.svg"
import job from "../../img/icons/material/hand-shake.svg"
import design from "../../img/icons/material/design.svg"
import press from "../../img/icons/material/press.svg"
import world from "../../img/icons/material/world.svg"
import code from "../../img/icons/material/code.svg"
import hWorks from "../../img/icons/material/howWorks.svg"
import social from "../../img/icons/material/share.svg"
import quest from "../../img/icons/material/question-mark.svg"
import leaf from "../../img/icons/material/leaf.svg"
import team from "../../img/icons/material/team.svg"
import disc from "../../img/icons/material/disc.svg"
//Icons
import carp from "../../img/icons/services/carp.svg";
import rent from "../../img/icons/services/rent.svg";
import park from "../../img/icons/services/park.svg";
import el from "../../img/icons/services/el.svg";


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
                            <MediaQuery maxDeviceWidth={700}>
                                <p> Es más barato, facil, y rápido ya que elimina los intermediarios y permite poner en
                                    contacto a los particulares.
                                    Además permite reducir el tráfico de vehículos en las grandes ciudades, ayudando al
                                    medio ambiente y reducir así el impacto nocivo en la capa de ozono.
                                </p>
                            </MediaQuery>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5} md={3}>
                            <ul><h4>Servicios</h4>
                                <li><img alt="" height={25} src={carp}/><Link to="/trips"> Carpooling</Link></li>
                                <li><img alt="" height={25} src={rent}/><Link to="/carrent"> Alquiler de Autos</Link>
                                </li>
                                <li><img alt="" height={25} src={park}/><Link to="/parkrent"> Alquiler de
                                    Cocheras</Link></li>
                                <li><img alt="" height={25} src={el}/><Link to="/electric"> Autos Eléctricos</Link>
                                    <Label
                                    bsStyle="warning">Próx.</Label></li>
                            </ul>
                        </Col>
                        <Col xs={5} md={3}>
                            <ul><h4>Aprendé mas</h4>
                                <li><img alt="" height={25} src={hWorks}/><Link to="/howWorks"> ¿Cómo funciona?</Link>
                                </li>
                                <li><img alt="" height={25} src={quest}/><Link to="/faq"> Preguntas frecuentes</Link>
                                </li>
                                <li><img alt="" height={25} src={social}/><Link to="/collaborative"> Economía
                                    Colaborativa</Link></li>
                                <li><img alt="" height={25} src={leaf}/><Link to="/green"> Huella ecológica</Link></li>
                            </ul>
                        </Col>
                        <Col xs={5} md={3}>
                            <ul><h4> Autoqe</h4>
                                <li><img alt="" height={25} src={world}/><Link to="/next"> Próximos paises</Link></li>
                                <li><img alt="" height={25} src={design}/><Link to="/design"> Rincón de diseño</Link>
                                </li>
                                <li><img alt="" height={25} src={code}/><Link to="/dev"> Rincón de Desarrollo</Link>
                                </li>
                                <li><img alt="" height={25} src={press}/><Link to="/press"> Rincón de Prensa</Link></li>
                            </ul>
                        </Col>
                        <Col xs={5} md={3}>
                            <ul><h4>Contacto</h4>
                                <li><img alt="" height={25} src={disc}/><Link to="/promotion"> Promociones</Link></li>
                                <li><img alt="" height={25} src={job}/><Link to="/work"> Trabajos </Link><Label
                                    bsStyle="success">Contratando!</Label></li>
                                <li><img alt="" height={25} src={team}/><Link to="/team"> Equipo</Link></li>
                                <li><img alt="" height={25} src={world}/><Link to="/contact"> Contacto</Link></li>
                            </ul>
                        </Col>

                    </Row>
                    <Row className="social-container">
                        <h2>
                            <Link to="https://www.facebook.com/autoqe"><i
                                className="fa fa-facebook"/></Link> &nbsp; &nbsp;
                            <Link to="https://www.twitter.com/autoqe"><i
                                className="fa fa-twitter"/></Link> &nbsp; &nbsp;
                            <Link to="https://www.instagram.com/autoqe"><i
                                className="fa fa-instagram"/></Link> &nbsp; &nbsp;
                            <Link to="www.youtube.com/channel/UC7RUb3Ieez8Pl9uLIhZclyQ"><i
                                className="fa fa-youtube"/></Link> &nbsp; &nbsp;
                            <Link to="https://www.linkedin.com/groups/autoqe"><i
                                className="fa fa-linkedin"/></Link> &nbsp; &nbsp;
                            <Link to="https://google.com/+autoqe"><i className="fa fa-google-plus"/></Link>
                        </h2>
                    </Row>
                    <Row>
                        <Copyright/>
                    </Row>
                </section>
            </footer>
        );
    }
}

export default Footer;
