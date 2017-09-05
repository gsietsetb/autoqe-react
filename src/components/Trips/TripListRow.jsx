import React from 'react';
import PropTypes from "prop-types"

import Responsive from "react-responsive";
import {Button, Col, Glyphicon, Label, ListGroupItem, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FormattedDate, FormattedRelative, FormattedTime} from 'react-intl';
import locFrom from "../../img/icons/custom/from.svg";
import locThrough from "../../img/icons/custom/through.svg";
import locTo from "../../img/icons/custom/dest.svg";
import girl from "../../img/icons/material/girl.svg";
import highw from "../../img/icons/material/highway.svg";
import highw_n from "../../img/icons/material/highway_n.svg";
import pet from "../../img/icons/material/pet.svg";
import time_flex from "../../img/icons/material/time-left.svg";
import time_hurry from "../../img/icons/material/fast.svg";
import smoke from "../../img/icons/material/smoke.svg";
import mate from "../../img/icons/material/mate-infusion.svg";
import ig from "../../img/icons/social_network/instagram.svg";
import fb from "../../img/icons/social_network/facebook.svg";
import tw from "../../img/icons/material/twitter.svg";
import driving from "../../img/icons/material/driving-license.svg";
import car from "../../img/old_logos/autoqe_gray.svg";

// Default (desktop, tablet) and mobile setup
const Huge = ({children}) => <Responsive minWidth={1218} children={children}/>;
const NotHuge = ({children}) => <Responsive maxWidth={1218} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={780} children={children}/>;

const TripListRow = ({trip}) => {
    function review_stars() {
        let reviews = <Glyphicon glyph="star"/>, i;
        for (i = 1; i <= 5; i++) reviews += (i <= trip.id) ? <Glyphicon glyph="star"/> : <Glyphicon glyph="star-empty"/>
        return <div>{reviews}</div>;
    }

    function setSeats() {
        if (trip.seats > 3)
            return <Label bsStyle="success">{trip.seats} Asientos</Label>;
        else if (trip.seats < 2)
            return <Label bsStyle="danger">{trip.seats} Asiento!</Label>;
        else
            return <Label>{trip.seats} Asientos</Label>
    }

    return (
        <ListGroupItem>
            <Link to={`/trips/${trip.id}`} style={{color: '#122b40'}}>
                <Row>
                    {/*User*/}
                    <Col xs={1}>
                        {/*User image*/}
                        <img alt="" className="user-icon" src={trip.image} height={80}/>
                        {/*Social verified*/}
                        <div className="small-icon-container hide-small">
                            <Glyphicon glyph="earphone"/>
                            <img alt="instagram" src={ig} className="small-icon"/>
                            <img alt="facebook" src={fb} className="small-icon"/>
                            <img alt="twitter" src={tw} className="small-icon"/>
                        </div>
                    </Col>
                    {/*User details*/}
                    <Col xs={2}>
                        <h4>{trip.username}</h4>
                        {/*Social verified*/}
                        <div className="small-icon-container show-small">
                            <Glyphicon glyph="earphone"/>
                            <img alt="instagram" src={ig} className="small-icon"/>
                            <img alt="facebook" src={fb} className="small-icon"/>
                            <img alt="twitter" src={tw} className="small-icon"/>
                        </div>
                        {/*Verified*/}
                        <img alt="" src={driving} height={25}/> &nbsp;
                            <Label bsStyle="info"><Glyphicon glyph="ok"/></Label>
                        <div>
                            <span style={{display: 'block'}}><Glyphicon glyph="star"/>
                            <Glyphicon glyph="star"/>
                            <Glyphicon glyph="star"/>
                            <Glyphicon glyph="star"/>
                            <Glyphicon glyph="star-empty"/></span>
                        </div>
                        {/*{review_stars()}*/}
                    </Col>
                    {/*Trip details*/}
                    <Col xs={4}>
                        <h3 style={{display: 'inline'}}>
                            {/*<span style={{display: 'inline-block'}}>*/}
                            <Button className="btn-from"><img alt="from" src={locFrom} className="icon-trip"/>{trip.from}
                            </Button>
                            {/*</span>*/}
                            {trip.stops && <span style={{display: 'inline-block'}}>&nbsp;→&nbsp;
                                <Button className="btn-stop"><img alt="" src={locThrough} className="icon-trip"/> {trip.stops}
                            </Button></span>}
                            <span style={{display: 'inline-block', color: '#74acdf'}}>&nbsp;→&nbsp;
                                <Button className="btn-to">
                                <img alt="to" src={locTo} className="icon-trip"/> {trip.to}</Button></span>
                        </h3>
                        {/*Driver's Car*/}
                        <div> <Button className="btn-label"><img alt="" src={car} className="icon-trip"/> {trip.car}</Button> &nbsp;
                            {/*Toggleable Options*/}
                            <span className="show-small">
                            {trip.highway ? (
                                <Button className="trip-icon-container">
                                    <img alt="" title="Por Autopista!" src={highw} className="icon-trip"/></Button>
                            ) : (
                                <Button className="trip-icon-container">
                                    <img alt="" title="Sin Autopista o peajes!" src={highw_n} className="icon-trip"/></Button>
                            )}
                                {trip.pets &&
                                <Button className="trip-icon-container">
                                    <img alt="" title="Pueden subir mascotas!" src={pet} className="icon-trip"/></Button>}
                                {!trip.smoke &&
                                <Button className="trip-icon-container">
                                    <img alt="" title="Se puede fumar!" src={smoke} className="icon-trip"/></Button>}
                                {trip.withMate &&
                                <Button className="trip-icon-container">
                                    <img alt="" title="Lleva Mate!" src={mate} className="icon-trip"/></Button>}
                                {trip.onlyGirls &&
                                <Button className="trip-icon-container">
                                    <img alt="" title="Sólo mujeres!" src={girl} className="icon-trip"/></Button>}
                        </span>
                        </div>
                    </Col>
                    {/*Date*/}
                    <Col xs={3}>
                        <h4><FormattedRelative value={trip.date}/>,</h4>
                        <Button style={{display: 'inline-block'}}><h4 style={{margin: '0 0'}}><FormattedDate value={trip.date} month="short" day="numeric"/>
                            {/*</h4></Button>*/}
                            {/*<Button><h4 style={{margin: '0 0'}}>*/}
                            {!trip.hurry ? (
                                <img alt="" src={time_hurry} className="icon-trip"/>
                            ) : (
                                <img alt="" src={time_flex} className="icon-trip"/>)}&nbsp;
                            <FormattedTime value={trip.date}/></h4>
                        </Button>
                        {/*return (*/}
                        {/*<tr>*/}
                        {/*<td><Link to={'/trips/' + trip.id}>{trip.from}</Link></td>*/}
                        {/*</tr>*/}
                        {/*);*/}
                    </Col>
                    {/*Price and seats*/}
                    <Col xs={2} style={{display: 'flex'}}>
                        <h4>
                            <b>{trip.price}</b> $ ARS &nbsp;
                            <Glyphicon glyph="piggy-bank"/> &nbsp;
                            {setSeats()}

                            {/*Toggleable Options*/}
                            <div className="hide-small">
                                {trip.highway ? (
                                    <Button className="trip-icon-container">
                                        <img alt="" title="Por Autopista!" src={highw} className="icon-trip"/></Button>
                                ) : (
                                    <Button className="trip-icon-container">
                                        <img alt="" title="Sin Autopista o peajes!" src={highw_n} className="icon-trip"/></Button>
                                )}
                                {trip.pets &&
                                <Button className="trip-icon-container">
                                    <img alt="" title="Pueden subir mascotas!" src={pet} className="icon-trip"/></Button>}
                                {!trip.smoke &&
                                <Button className="trip-icon-container">
                                    <img alt="" title="Se puede fumar!" src={smoke} className="icon-trip"/></Button>}
                                {trip.withMate &&
                                <Button className="trip-icon-container">
                                    <img alt="" title="Lleva Mate!" src={mate} className="icon-trip"/></Button>}
                                {trip.onlyGirls &&
                                <Button className="trip-icon-container">
                                    <img alt="" title="Sólo mujeres!" src={girl} className="icon-trip"/></Button>}
                            </div>
                        </h4>
                    </Col>
                </Row>
            </Link>
        </ListGroupItem>
    );
};

TripListRow.propTypes = {
    trip: PropTypes.object.isRequired
};

export default TripListRow;