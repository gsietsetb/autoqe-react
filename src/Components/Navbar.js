import React from "react";

import logo_side from "./../img/logo/autoqe_imagotipe_side.png";
import trip from "./../img/icons/material/carpool.png";
import car from "./../img/icons/material/car-key.png";
import park from "./../img/icons/material/garage.svg";
import elec from "./../img/icons/material/electric-car.png";
import argFlag from "./../img/icons/flag/061-argentina.svg";
import spFlag from "./../img/icons/flag/012-spain.svg";
import chFlag from "./../img/icons/flag/051-chile.svg";
import usaFlag from "./../img/icons/flag/002-united-states.svg";
import bolFlag from "./../img/icons/flag/bolivia.svg";
import brFlag from "./../img/icons/flag/brazil.svg";
import "./../App.css";
import MediaQuery from "react-responsive";
import {
    Button,
    DropdownButton,
    FormControl,
    FormGroup,
    Glyphicon,
    InputGroup,
    MenuItem,
    Nav,
    Navbar,
    NavDropdown,
    NavItem
} from "react-bootstrap";
import ReactRotatingText from  'react-rotating-text';


const styles = {
    flagDropdown: {
        backgroundImage: 'url(' + argFlag + ')',
        backgroundColor: 'transparent',
        border: 'none',
        marginTop: -5
    },
    displayInline: {
        display: 'inline',
    },
    icon: {
        height: 24
    },
    navStyle: {
        background: 'white',
        border: 'none',
        margin: 0

    }

};

export default class NavbarComp extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect fixedTop fluid style={styles.navStyle}>
                    <Navbar.Header>
                        <Navbar.Brand pullLeft>
                            <img href="#" style={{padding: '0 6vw 0 10px', height: 70}} src={logo_side}
                                 className="App-logo" alt="logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav style={{marginTop: 8}}>
                            <NavItem eventKey={1} href="/home" title="Inicio">
                                <Glyphicon glyph="home"/>
                                &nbsp; Inicio
                            </NavItem>

                            {/*Publicar*/}
                            <NavDropdown bsStyle={'info'}
                                         title={<span>
                                                    <Glyphicon glyph="plus-sign"/>&nbsp; Publicar
                                                </span>}>
                                <MenuItem eventKey={3.1}>
                                    <img style={styles.icon} src={trip} className="App-logo" alt="logo"/>
                                    &nbsp; Trayecto
                                </MenuItem>
                                <MenuItem eventKey={3.2}>
                                    <img style={styles.icon} src={car} className="App-logo" alt="logo"/>
                                    &nbsp; Auto</MenuItem>
                                <MenuItem eventKey={3.3}>
                                    <img style={styles.icon} src={park} className="App-logo" alt="logo"/>
                                    &nbsp; Cochera</MenuItem>
                            </NavDropdown>

                            {/*Buscar*/}
                            <NavDropdown bsStyle={'info'}
                                         title={<span>
                                                    <Glyphicon glyph="search"/>&nbsp; Buscar
                                                </span>}>
                                <MenuItem eventKey={3.1}>
                                    <img style={styles.icon} src={trip} className="" alt="logo"/>
                                    &nbsp; Trayecto
                                </MenuItem>
                                <MenuItem eventKey={3.2}>
                                    <img style={styles.icon} src={car} className="App-logo" alt="logo"/>
                                    &nbsp; Auto</MenuItem>
                                <MenuItem eventKey={3.3}>
                                    <img style={styles.icon} src={park} className="App-logo" alt="logo"/>
                                    &nbsp; Cochera</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>
                                    <img style={styles.icon} src={elec} className="App-logo" alt="logo"/>
                                    &nbsp; Auto Eléctrico</MenuItem>
                            </NavDropdown>

                            {/*Hideable Search & List form*/}
                            <MediaQuery query='(min-width: 1218px)'>
                                <NavItem eventKey={2} href="#" style={{marginTop: -8, marginBottom: -9}}>
                                    <FormGroup>
                                        <InputGroup className="inputForm">
                                            <InputGroup.Addon className="inputForm">
                                                <Glyphicon  timeout={300} glyph="search" style={{float: 'left'}}/> &nbsp;
                                                <ReactRotatingText
                                                    items={['Trayecto', 'Auto', 'Cochera']} />
                                            </InputGroup.Addon>
                                            <FormControl className="inputForm" type="text" placeholder="Mar del Plata"/>
                                            <InputGroup.Addon>
                                                <Glyphicon glyph="map-marker"/>
                                            </InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                </NavItem>
                            </MediaQuery>

                            {/*Language selector*/}
                            <NavItem>
                                <DropdownButton style={styles.flagDropdown} bsStyle={'info'} title={''}>
                                    <MenuItem eventKey="1" active>
                                        <img src={argFlag} height={24}/>
                                        &nbsp;  Argentina</MenuItem>
                                    <MenuItem eventKey="2">
                                        <img src={spFlag} height={24}/>
                                        &nbsp;  España</MenuItem>
                                    <MenuItem eventKey="3">
                                        <img src={brFlag} height={24}/>
                                        &nbsp;  Brasil</MenuItem>
                                    <MenuItem eventKey="4">
                                        <img src={bolFlag} height={24}/>
                                        &nbsp;  Bolivia</MenuItem>
                                    <MenuItem eventKey="5">
                                        <img src={chFlag} height={24}/>
                                        &nbsp;  Chile</MenuItem>
                                    <MenuItem divider/>
                                    <MenuItem eventKey="6">
                                        <img src={usaFlag} height={24}/>
                                        &nbsp;  English</MenuItem>
                                </DropdownButton>
                            </NavItem>

                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                <Button bsStyle={'info'} type="submit">Registro</Button>
                            </NavItem>
                            <NavItem eventKey={2} href="#" style={{marginTop: 6}}>
                                <Glyphicon glyph="envelope"/> &nbsp; Contacto</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
