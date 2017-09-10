import React from 'react';
import PropTypes from "prop-types"

import Responsive from "react-responsive";
import {Button, Col, Glyphicon, Label, ListGroupItem, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FormattedDate, FormattedRelative, FormattedTime} from 'react-intl';
import locFrom from "../../img/icons/custom/from.svg";
import locThrough from "../../img/icons/custom/through.svg";
import locTo from "../../img/icons/custom/dest.svg";
import girl from "../../img/icons/material/female.svg";
import highw from "../../img/icons/material/highway.svg";
import highw_n from "../../img/icons/material/highway_n.svg";
import pet from "../../img/icons/material/pet.svg";
import time_flex from "../../img/icons/material/time-left.svg";
import time_hurry from "../../img/icons/material/fast.svg";
import smoke from "../../img/icons/material/smoke.svg";
import mate from "../../img/icons/material/mate-infusion.svg";
import whats from "../../img/icons/social_network/whatsapp.svg";
import fb from "../../img/icons/social_network/facebook.svg";
import seats_w from "../../img/icons/material/users_w.svg";
import tw from "../../img/icons/material/twitter.svg";
import driving from "../../img/icons/material/driving-license.svg";
import car from "../../img/old_logos/autoqe_gray.svg";

// Default (desktop, tablet) and mobile setup
const Huge = ({children}) => <Responsive minWidth={960} children={children}/>;
const NotHuge = ({children}) => <Responsive maxWidth={960} children={children}/>;
const Default = ({children}) => <Responsive minWidth={780} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={780} children={children}/>;

const TripListRow = ({trip}) => {
    function review_stars() {
        let reviews = <Glyphicon glyph="star"/>, i;
        for (i = 1; i <= 5; i++) reviews += (i <= trip.id) ? <Glyphicon glyph="star"/> : <Glyphicon glyph="star-empty"/>
        return <div>{reviews}</div>;
    }

    function setSeats() {
        if (trip.seats > 3)
            return <Label bsStyle="success">{trip.seats} <img alt="pasajeros" src={seats_w} className="icon-trip"/></Label>;
        else if (trip.seats < 2)
            return <Label bsStyle="danger">{trip.seats} <Glyphicon glyph="user" className="icon-trip"/></Label>;
        else
            return <Label className="btn-light_w">{trip.seats} <img alt="pasajeros" src={seats_w} className="icon-trip"/></Label>
    }

    function setPrice() {
        // if (trip.price < 300)
        //     return <span style={{color: '#5cb85c', display: 'inline-block'}}><b>$ {trip.price}&nbsp;</b><Glyphicon glyph="piggy-bank"/></span>;
        // else if (trip.price > 600)
        //     return  <span style={{color: '#d9534f', display: 'inline-block'}}><b>$ {trip.price}</b></span>;
        // else
        return  <span style={{ display: 'inline-block'}}><b>$ {trip.price}</b></span>
    }

    return (
        <ListGroupItem>
            <Link to={`/trips/${trip.id}`} className="dark-text" >
                <Default>
                    <Row>
                        {/*User*/}
                        <Col xs={1}>
                            {/*User image*/}
                            <Row>
                                <img alt="" className="user-icon" src={trip.image} height={80}/>
                            </Row>
                            {/*Social*/}
                            <Row className="small-icon-container">
                                <Glyphicon glyph="earphone" className="hide-small"/>
                                <img alt="twitter" src={tw} className="small-icon"/>
                                <img alt="facebook" src={fb} className="small-icon"/>
                                <img alt="whatsapp" src={whats} className="small-icon"/>
                            </Row>
                        </Col>
                        {/*User details*/}
                        <Col xs={2}>
                            <Row style={{fontSize: 'large', fontWeight: '500'}}>{trip.username}</Row>
                            {/*Verified*/}
                            <Row>
                                <Label bsStyle="info"><Glyphicon glyph="ok"/></Label>&nbsp;
                                <img alt="licencia" title="licencia" src={driving} className="icon-dest"/>
                                &nbsp; 24 años
                            </Row>
                            {/*{review_stars()}*/}
                            <Row className="gold-text">
                                <Huge >
                                    <Glyphicon glyph="star"/>
                                    <Glyphicon glyph="star"/>
                                    <Glyphicon glyph="star"/>
                                    <Glyphicon glyph="star"/>
                                    <Glyphicon glyph="star-empty"/>
                                    <span className="dark-text"> - 2 viajes</span>
                                </Huge>
                                <NotHuge>
                                    <Glyphicon glyph="star"/> 4.7
                                    <span className="dark-text"> - 2 viajes</span>
                                </NotHuge>
                            </Row>
                        </Col>
                        {/*Trip details*/}
                        <Col xs={5}>
                            <Row>
                                <Button className="btn-trip">
                                    {/*<h4 style={{display: 'inline'}}>*/}
                                    <img alt="from" src={locFrom} className="icon-dest"/> {trip.from}
                                    {trip.stops && <span className="hide-small" style={{color: '#999'}}>&nbsp;→&nbsp;
                                        <img alt="" src={locThrough} className="icon-dest"/> {trip.stops}
                            </span>}
                                    <span style={{display: 'inline-block', color: '#74acdf'}}>&nbsp;→&nbsp;
                                        <img alt="to" src={locTo} className="icon-dest"/> {trip.to}
                              </span>
                                </Button>
                            </Row>
                            {/*Driver's Car*/}
                            <Row> <Button className="btn-label"><img alt="" src={car} className="icon-trip"/> {trip.car}</Button> &nbsp;
                                {/*Toggleable Options*/}
                                <span style={{display: 'inline-block'}} className="">
                            {trip.highway ? (
                                <Button className="btn-trip-cont">
                                    <img alt="" title="Por Autopista!" src={highw} className="icon-trip"/></Button>
                            ) : (
                                <Button className="btn-trip-cont">
                                    <img alt="" title="Sin Autopista o peajes!" src={highw_n} className="icon-trip"/></Button>
                            )}
                                    {trip.pets &&
                                    <Button className="btn-trip-cont">
                                        <img alt="" title="Pueden subir mascotas!" src={pet} className="icon-trip"/></Button>}
                                    {!trip.smoke &&
                                    <Button className="btn-trip-cont">
                                        <img alt="" title="Se puede fumar!" src={smoke} className="icon-trip"/></Button>}
                                    {trip.withMate &&
                                    <Button className="btn-trip-cont">
                                        <img alt="" title="Lleva Mate!" src={mate} className="icon-trip"/></Button>}
                                    {trip.onlyGirls &&
                                    <Button className="btn-trip-cont">
                                        <img alt="" title="Sólo mujeres!" src={girl} className="icon-trip"/></Button>}
                        </span>
                            </Row>
                        </Col>
                        {/*Date*/}
                        <Col xs={3}>
                            {/*<Button className="show-small blank-line"/>*/}
                            <h4 style={{display: 'block', textAlign: 'right'}}><FormattedRelative value={trip.date}/></h4>
                            <Button style={{display: 'block', float: 'right'}}><h4 style={{margin: '0 0'}}><FormattedDate value={trip.date} month="short" day="numeric"/>
                                {/*</h4></Button>*/}
                                {/*<Button><h4 style={{margin: '0 0'}}>*/}</h4></Button>
                            <Button style={{display: 'inline-block', float: 'right'}}>
                                {!trip.hurry ? (
                                    <img alt="" src={time_hurry} className="icon-trip"/>
                                ) : (
                                    <img alt="" src={time_flex} className="icon-trip"/>)}&nbsp;
                                <FormattedTime value={trip.date}/>
                            </Button>
                        </Col>
                        {/*Price and seats*/}
                        <Col xs={1}>
                            <Row>
                                <Button className="btn-price">{setPrice()}</Button>
                            </Row>
                            <h4><Row style={{textAlign: 'center'}}>{setSeats()}</Row></h4>
                        </Col>
                    </Row>
                </Default>

                {/*------------------------------------------------------------------------------------------------*/}
                {/*THIS WOULD RENDER IF SMALL! :D*/}
                <Mobile>
                    <Row className="road-below">
                        {/*Trip*/}
                        <Col xs={5} style={{ fontFamily:  '"Lemon/Milk", serif'}}>
                            <Row>
                                <img alt="from" src={locFrom} className="icon-dest"/> {trip.from}</Row>
                            {trip.stops &&
                            <Row style={{color: '#999'}}>
                                <img alt="" src={locThrough} className="icon-dest"/> {trip.stops}
                            </Row>}
                            <Row style={{color: '#74acdf'}}>
                                <img alt="to" src={locTo} className="icon-dest"/> {trip.to}
                            </Row>
                        </Col>
                        <Col xs={4}>
                            {/*Rel. Date*/}
                            <Row>
                                <FormattedRelative value={trip.date}/>
                            </Row>
                            {/*Exact Date*/}
                            <Row style={{fontWeight: 'bolder'}}>
                                <FormattedDate value={trip.date} month="short" day="numeric"/>
                                {!trip.hurry ? (
                                    <img alt="" src={time_hurry} className="icon-trip"/>
                                ) : (
                                    <img alt="" src={time_flex} className="icon-trip"/>)}
                                <FormattedTime value={trip.date}/>
                            </Row>
                            {/*Toggleable Options*/}
                            <Row>
                                {trip.highway ? (
                                    <Button className="btn-trip-cont">
                                        <img alt="" title="Por Autopista!" src={highw} className="icon-trip"/></Button>
                                ) : (
                                    <Button className="btn-trip-cont">
                                        <img alt="" title="Sin Autopista o peajes!" src={highw_n} className="icon-trip"/></Button>
                                )}
                                {trip.pets &&
                                <Button className="btn-trip-cont">
                                    <img alt="" title="Pueden subir mascotas!" src={pet} className="icon-trip"/></Button>}
                                {!trip.smoke &&
                                <Button className="btn-trip-cont">
                                    <img alt="" title="Se puede fumar!" src={smoke} className="icon-trip"/></Button>}
                                {trip.withMate &&
                                <Button className="btn-trip-cont">
                                    <img alt="" title="Lleva Mate!" src={mate} className="icon-trip"/></Button>}
                                {trip.onlyGirls &&
                                <Button className="btn-trip-cont">
                                    <img alt="" title="Sólo mujeres!" src={girl} className="icon-trip"/></Button>}
                            </Row>
                        </Col>
                        <Col xs={3} style={{textAlign: 'right'}}>
                            <Row style={{fontSize: 'large'}}>{setPrice()}</Row>
                            <Row>{setSeats()}</Row>

                        </Col>
                    </Row>

                    {/*User*/}
                    <Row className="road-over">
                        {/*<Col xs={1}> </Col>*/}
                        <Col xs={2}>
                            {/*User image*/}
                            <img alt="" className="user-icon" src={trip.image} height={80}/>
                        </Col>
                        <Col xs={4}>
                            <Row style={{fontSize: 'large'}}> {trip.username}</Row>
                            {/*Social*/}
                            <Row>
                                <Glyphicon glyph="earphone" className="small-icon"/>
                                <img alt="twitter" src={tw} className="small-icon"/>
                                <img alt="facebook" src={fb} className="small-icon"/>
                                <img alt="whatsapp" src={whats} className="small-icon"/>
                            </Row>
                        </Col>
                        <Col xs={3} style={{textAlign: 'right'}}>
                            {/*Driver's Car*/}
                            <Row>Exp: <b>2 trayectos</b></Row>
                            <Row>
                                <img alt="" src={car} className="icon-trip"/> {trip.car}
                            </Row>
                        </Col>
                        <Col xs={3} style={{textAlign: 'right'}}>
                            <Row className="gold-text">
                                    <Glyphicon glyph="star"/>
                                    <Glyphicon glyph="star"/>
                                    <Glyphicon glyph="star"/>
                                    <Glyphicon glyph="star"/>
                                    <Glyphicon glyph="star-empty"/>
                            </Row>
                            <Row>
                                24 años <img alt="licencia" title="licencia" src={driving} className="icon-dest"/>
                                <Label bsStyle="info"><Glyphicon glyph="ok"/></Label>
                            </Row>
                        </Col>
                    </Row>
                </Mobile>
            </Link>

        </ListGroupItem>
    );
};

TripListRow.propTypes = {
    trip: PropTypes.object.isRequired
};

export default TripListRow;