import React, {Component} from "react";
import PropTypes from "prop-types"
import {bindActionCreators} from 'redux';
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
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import Responsive from "react-responsive";
import ReactRotatingText from "react-rotating-text";
import * as sessionActions from '../../actions/SessionActions';
import AuthActions from "../../actions/AuthActions";
import AuthStore from "../../store/AuthStore";
import "./navbar.css"

import logo_txt from "../../img/logo/autoqe_txt.svg";
//Icons
import carp from "../../img/icons/services/carp.svg";
import rent from "../../img/icons/services/rent.svg";
import park from "../../img/icons/services/park.svg";
import el from "../../img/icons/services/el.svg";

import argFlag from "../../img/icons/flag/061-argentina.svg";
import spFlag from "../../img/icons/flag/012-spain.svg";
import chFlag from "../../img/icons/flag/051-chile.svg";
import usaFlag from "../../img/icons/flag/002-united-states.svg";
import bolFlag from "../../img/icons/flag/bolivia.svg";
import brFlag from "../../img/icons/flag/brazil.svg";

import locTo from "../../img/icons/custom/dest.svg";


const styles = {
    flagDropdown: {
        backgroundImage:  'url(' + argFlag + ')',
        backgroundColor: 'transparent',
        border: 'none',
        marginTop: -5
    }
};
// Default (desktop, tablet) and mobile setup
const Huge = ({children}) => <Responsive minWidth={1218} children={children}/>;
const NotHuge = ({children}) => <Responsive maxWidth={1218} children={children}/>;
const Tablet = ({children}) => <Responsive minWidth={860} children={children}/>;
const Default = ({children}) => <Responsive minWidth={768} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;

class NavbarComp extends Component {
    constructor(props) {
        super(props);
        //Auth side
        this.state = {
            authenticated: AuthStore.isAuthenticated()
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        //Toggle side
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    login() {
        // We can call the show method from Auth0Lock,
        // which is passed down as a prop, to allow
        // the user to log in
        this.props.lock.show((err, profile, token) => {
            if (err) {
                alert(err);
                return;
            }
            // If login is successful, we want to dispatch
            // the logUserIn action so we can have the profile
            // and token set in local storage
            AuthActions.logUserIn(profile, token);
            // We also want to set the authentication state
            // for the component to true
            this.setState({authenticated: true});
        });
    }

    logout() {
        AuthActions.logUserOut();
        this.setState({authenticated: false});
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect fixedTop fluid>
                    <Navbar.Header>
                        <Navbar.Brand pullLeft className="logo brand-text">
                            <Link to="/">
                                <img src={logo_txt} alt="autoqe"/>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav style={{marginTop: 8}} pullRight>
                            {/*Hideable Home*/}
                            {/*<Tablet>*/}
                            {/*<NavItem eventKey={1} href="/home" title="Inicio">*/}
                            {/*<Glyphicon glyph="home"/>*/}
                            {/*&nbsp; Inicio*/}
                            {/*</NavItem>*/}
                            {/*</Tablet>*/}
                            {/*Publicar*/}
                            <NavDropdown id="publicar" eventKey={2} title={<span>
                             <Glyphicon glyph="plus-sign" className="nav-icon"/>Publicar
                           </span>}>
                                <MenuItem eventKey={2.1}>
                                    <img src={carp} className="nav-icon" alt="logo"/>
                                    <span className="service-carp">Trayecto </span>
                                </MenuItem>
                                <MenuItem eventKey={2.2}>
                                    <img src={rent} className="nav-icon" alt="logo"/>
                                    <span className="service-rent">Auto</span>
                                </MenuItem>
                                <MenuItem eventKey={2.3}>
                                    <img src={park} className="nav-icon" alt="logo"/>
                                    <span className="service-park">Cochera</span>
                                </MenuItem>
                            </NavDropdown>

                            {/*Buscar*/}
                            <NotHuge>
                                <NavDropdown id="buscar" eventKey={3} title={<span className="service-rent">
                             <Glyphicon glyph="search" className="nav-icon"/>Buscar
                           </span>}>
                                    <MenuItem eventKey={3.1}>
                                        <img src={carp} className="nav-icon" alt="logo"/>
                                        <span className="service-carp">Trayecto </span>
                                    </MenuItem>
                                    <MenuItem eventKey={3.2}>
                                        <img src={rent} className="nav-icon" alt="logo"/>
                                        <span className="service-rent">Auto</span>
                                    </MenuItem>
                                    <MenuItem eventKey={3.3}>
                                        <img src={park} className="nav-icon" alt="logo"/>
                                        <span className="service-park">Cochera</span>
                                    </MenuItem>
                                    <MenuItem divider/>
                                    <MenuItem eventKey={3.4}>
                                        <img src={el} className="nav-icon" alt="logo"/>
                                        <span className="service-elec">Auto Eléctrico</span>
                                    </MenuItem>
                                </NavDropdown>
                            </NotHuge>

                            {/*Hideable Search & List form*/}
                            <Huge>
                                <NavItem eventKey={4} href="#" style={{marginTop: -5, marginBottom: -9}}>
                                    <FormGroup>
                                        <InputGroup className="inputForm">
                                            <InputGroup.Addon className="search-icon">
                                                <Glyphicon glyph="search" style={{float: 'left', color: '#74acdf'}}/>&nbsp;
                                                <ReactRotatingText className="light-text" items={['Trayecto', 'Auto', 'Cochera']}/>
                                            </InputGroup.Addon>
                                            <FormControl type="text" placeholder="Mar del Plata"/>
                                            <InputGroup.Addon style={{minWidth: 40}}>
                                                <img alt="destination" src={locTo} height={20} style={{float: 'right'}}/>
                                            </InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                </NavItem>
                            </Huge>

                            {/*Login Logic*/}
                            {!this.state.authenticated ? (
                                <NavItem onClick={this.login} style={{marginTop: -8}} eventKey={5} href="#">
                                    <Button className="btn-light_w" type="submit">
                                        <Glyphicon glyph="user" className="nav-icon"/>
                                        Registro</Button>
                                </NavItem>
                            ) : (
                                <NavItem onClick={this.logout} eventKey={5} href="#">
                                    <Button bsStyle={'danger'} type="submit">LogOut</Button>
                                </NavItem>
                            )}

                            {/*Contact*/}
                            <NavItem eventKey={6} href="#" style={{marginTop: 0}}>
                                <Glyphicon glyph="envelope" className="nav-icon"/>Contacto</NavItem>
                            {/*Language selector*/}
                            <NavItem>
                                <DropdownButton id="lang" style={styles.flagDropdown} bsStyle={'info'} title={''}>
                                    <MenuItem eventKey="1" active>
                                        <img alt="arg" src={argFlag} className="nav-icon"/>Argentina</MenuItem>
                                    <MenuItem eventKey="2">
                                        <img alt="sp" src={spFlag} className="nav-icon"/>España</MenuItem>
                                    <MenuItem eventKey="3">
                                        <img alt="br" src={brFlag} className="nav-icon"/>Brasil</MenuItem>
                                    <MenuItem eventKey="4">
                                        <img alt="Ch" src={chFlag} className="nav-icon"/>Chile</MenuItem>
                                    <MenuItem eventKey="5">
                                        <img alt="Bol" src={bolFlag} className="nav-icon"/>Bolivia</MenuItem><MenuItem divider/>
                                    <MenuItem eventKey="6">
                                        <img alt="Eng" src={usaFlag} className="nav-icon"/>English</MenuItem>
                                </DropdownButton>
                            </NavItem> </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

Navbar.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {logged_in: state.session};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComp);
