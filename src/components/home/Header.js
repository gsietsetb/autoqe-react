import React from "react";
import {Carousel, Glyphicon, Label, Nav, NavItem, Row, Tab} from "react-bootstrap";
import TripsPage from "../Trips/TripsPage";
import {Link} from "react-router-dom";


import "./carousel.css"
//Icons
import carp from "../../img/icons/services/carp.svg";
import rent from "../../img/icons/services/rent.svg";
import park from "../../img/icons/services/park.svg";
import el from "../../img/icons/services/el.svg";
import SearchTrip from "../Trips/SearchTrip";

// let cx = classNames.bind(styles);

// const styles = {
//     whiteText: {
//         index:
//     },
//     item: {
//         complete: {
//             textDecoration: "line-through"
//         },
//
//         due: {
//             color: "red"
//         }
//     },
// }

export default class CarouselComp extends React.Component {
    // onLoadStart={(e) => this.setState({loading: true})}
    constructor(props) {
        super(props);
        this.state = {
            imageStatus: 'loading',
            index: 0,
            direction: 'next'
        };
        this._setArrowContent = this._setArrowContent.bind(this);
        this._setTabContent = this._setTabContent.bind(this)
    }

    _setTabContent(eventKey) {
        this.setState({
            direction: this.state.index >= eventKey ? 'prev' : 'next',
            index: eventKey,
        });
    }

    _setArrowContent(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    handleImageLoaded() {
        this.setState({imageStatus: 'loaded'});
    }

    handleImageErrored() {
        this.setState({imageStatus: 'failed to load'});
    }

    render() {
        // let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
        // let condTab = cx({
        //     light-text
        //     // base: true,
        //     // inProgress: this.props.store.submissionInProgress,
        //     // error: this.props.store.errorOccurred,
        //     // disabled: this.props.form.valid,
        // });

        return (
            <div>
                <Carousel className="carousel-container" indicators={false} interval={6000}
                          activeIndex={this.state.index}
                          direction={this.state.direction} onSelect={this._setArrowContent}>
                    {/*Carpooling*/}
                    <Carousel.Item active animateIn animateOut index={0} className="coverImg cover-carp">
                        <div className="deg-carp">
                            <Carousel.Caption>
                                <h1>Carpooling: trayectos compartidos</h1>
                                <SearchTrip/>
                                <h3>Ahorrá plata compartiendo los gastos del viaje</h3>

                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    {/*Car rental*/}
                    <Carousel.Item active animateIn animateOut index={1} className="coverImg cover-rent">
                        <div className="deg-rent">
                            <Carousel.Caption>
                                <h1>Alquiler de Auto entre particulares</h1>
                                <h3>Rentabilizá tu auto mientras no lo usás</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    {/*Parking*/}
                    <Carousel.Item animateIn animateOut index={2} className="coverImg cover-park">
                        <div className="deg-park">
                            <Carousel.Caption>
                                <h1>Alquiler de Cocheras entre particulares</h1>
                                <h3>Perdele el miedo a ir al centro en auto!</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    {/*Electric*/}
                    <Carousel.Item active animateIn animateOut index={3} className="coverImg cover-elec">
                        <div className="deg-elec">
                            <Carousel.Caption className="">
                                <h1> Alquiler de <b>AUTOS ELÉCTRICOS</b> por horas</h1>
                                <h3>
                                    Dónde y cuándo lo necesités
                                    <p/>
                                    <Link to="/green">
                                        <Label bsSize="lg" bsStyle="success">
                                            <Glyphicon glyph="leaf"/> &nbsp;
                                            Ayudá al medioambiente!
                                        </Label>
                                    </Link>
                                </h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>

                <Tab.Container id="header-tabs" activeKey={this.state.index} defaultActiveKey={0}
                               onSelect={this._setTabContent}>
                    <Row className="clearfix header-tabs">
                        {/*<Col sm={12}>*/}
                        <Nav bsStyle="tabs" id="header-tab">
                            <NavItem className="carp-transp " eventKey={0}>
                                <img alt="carpool" src={carp} className="header-icon"/>
                                <h4 className="white-text avoid-if-small service-carp-transp"> &nbsp;Carpooling</h4>
                            </NavItem>
                            <NavItem className=" rent-transp " eventKey={1}>
                                <img alt="Private car rental" src={rent} className="header-icon"/>
                                <h4 className="white-text avoid-if-small service-rent-transp">&nbsp;Autos</h4>
                            </NavItem>
                            <NavItem className=" park-transp " eventKey={2}>
                                <img alt="Private Parking spot rental" src={park} className="header-icon"/>
                                <h4 className="white-text avoid-if-small service-park-transp">&nbsp;Cocheras</h4>
                            </NavItem>
                            <NavItem className=" elec-transp" eventKey={3}>
                                <img alt="Electric car" src={el} className="header-icon"/>
                                <h4 className="white-text avoid-if-small service-elec-transp">&nbsp;Autos
                                    eléctricos</h4>
                                {/*&nbsp;</b><Label className="avoid-if-small" bsStyle="warning">Próx.</Label>*/}
                            </NavItem>
                        </Nav>
                        {/*</Col>*/}
                        {/*<Col sm={12} >*/}
                        <Tab.Content style={{left: 0}} animation>
                            <Tab.Pane eventKey={0}>
                                <Row>
                                    <TripsPage/>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey={1}>
                                <Row>
                                    <TripsPage/>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey={2}>
                                <Row>
                                    <TripsPage/>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey={3}>
                                <Row>
                                    <TripsPage/>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        {/*</Col>*/}
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}
