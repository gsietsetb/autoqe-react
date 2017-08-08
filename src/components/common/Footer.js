import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Col, Image, Label, Row} from "react-bootstrap";
import logo_side from "../../img/logo/autoqe_txt_w.svg"
import job from "../../img/icons/material/hand-shake.svg"
import design from "../../img/icons/material/design.svg"
import press from "../../img/icons/material/press.svg"
import world from "../../img/icons/material/world.svg"
import code from "../../img/icons/material/code.svg"
import Copyright from "./Copyright";

class Footer extends Component {
    render() {
        return (
            <footer className="footer" id="footer">
                <section className="section contactBanner">
                    <Row>
                        <Col xs={4} md={3}> <Image responsive src={logo_side}/>
                        </Col>
                        <Col xs={8} md={9}>
                            {/*<img src={} height={30} alt="Secure payment"/> &nbsp;*/}
                            <h4> Sobre nosotros</h4>
                            <p>Autoqe es una solución de transporte dentro de la economía colaborativa.
                                Te permite compartir trayectos, alquilar autos y cocheras entre particulares a tu
                                alrededor. </p>
                            <p> Es más barato, facil, y rápido ya que elimina los intermediarios y permite poner en
                                contacto a los particulares.
                                Además permite reducir el tráfico de vehículos en las grandes ciudades, ayudando al
                                medio ambiente y reducir así el impacto nocivo en la capa de ozono.
                            </p>
                        </Col>
                        {'\n'}
                        {'\n'}
                        {'\n'}
                        {'\n'}
                    </Row>
                    <Row>
                        <Col xs={5} md={3}>
                            <ul><h4>Servicios</h4>
                                <li><Link to="/carpooling">Carpooling</Link></li>
                                <li><Link to="/carrent">Alquiler de Autos</Link></li>
                                <li><Link to="/parkrent">Alquiler de Cocheras</Link></li>
                                <li><Link to="/elec">Autos Eléctricos</Link> <Label bsStyle="success">Próx.</Label></li>
                            </ul>
                        </Col>
                        <Col xs={5} md={3}>
                            <ul><h4>Aprendé mas</h4>
                                <li><Link to="/carpooling">¿Cómo funciona?</Link></li>
                                <li><Link to="/carpooling">Economía Colaborativa</Link></li>
                                <li><Link to="/carrent">Huella ecológica</Link></li>
                                <li><Link to="/parkrent">Alquiler Sostenible</Link></li>
                            </ul>
                        </Col>
                        <Col xs={5} md={3}>
                            <ul><h4>Contacto</h4>
                                <li><Link to="/carpooling">Preguntas frecuentes</Link></li>
                                <li><Link to="/carrent">Promociones</Link></li>
                                <li><Link to="/parkrent">Equipo</Link></li>
                                <li><Link to="/elec">Contacto</Link></li>
                            </ul>
                        </Col>
                        <Col xs={5} md={3}>
                            <ul><h4> Autoqe</h4>
                                <li><img height={25} src={world}/><Link to="/carpooling"> Próximos paises</Link></li>
                                <li><img height={25} src={job}/><Link to="/carpooling"> Trabaja con
                                    nosotros </Link><Label bsStyle="success">Hiring</Label></li>
                                <li><img height={25} src={design}/><Link to="/carrent"> Rincón de diseño</Link></li>
                                <li><img height={25} src={code}/><Link to="/carrent"> Rincón de Desarrollo</Link></li>
                                <li><img height={25} src={press}/><Link to="/carrent"> Rincón de Prensa</Link></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="social-container social-btns">
                        <h2 className="social-btns">
                            <Link to="https://www.youtube.com/rawshorts"><i
                                className="fa fa-youtube"/></Link> &nbsp; &nbsp;
                            <Link to="https://www.twitter.com/rawshorts"><i
                                className="fa fa-twitter"/></Link> &nbsp; &nbsp;
                            <Link to="https://www.facebook.com/rawshorts"><i
                                className="fa fa-facebook"/></Link> &nbsp; &nbsp;
                            <Link to="https://www.linkedin.com/groups/Explainer-Videos-2803489"><i
                                className="fa fa-linkedin"/></Link> &nbsp; &nbsp;
                            <Link to="https://google.com/+rawshorts"><i className="fa fa-google-plus"/></Link>
                        </h2>
                    </Row>
                    <Row>s
                        <Copyright/>
                    </Row>
                </section>
            </footer>
        );
    }
}

export default Footer;
