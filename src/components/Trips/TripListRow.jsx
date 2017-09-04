import React from 'react';
import PropTypes from "prop-types"

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
import fb from "../../img/icons/social_network/facebook.svg";
import tw from "../../img/icons/material/twitter.svg";
import driving from "../../img/icons/material/driving-license.svg";
import car from "../../img/old_logos/autoqe_gray.svg";


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
                    <Col xs={1} s={1} md={1}>
                        <img alt="" src={trip.image} height={80}/>
                    </Col>
                    <Col xs={2} s={1} md={2}>
                        <h4>{trip.username}</h4>
                        <div>
                            <img alt="" src={fb} height={15}/> &nbsp;
                            {/*<img alt="" src={ig} height={15}/>&nbsp;*/}
                            <img alt="" src={tw} height={15}/> &nbsp;
                            <Glyphicon glyph="star"/>
                            <Glyphicon glyph="star"/>
                            <Glyphicon glyph="star"/>
                            <Glyphicon glyph="star"/>
                            <Glyphicon glyph="star-empty"/>
                        </div>
                        <img alt="" src={driving} height={25}/> &nbsp;
                        <Label bsStyle="info"><Glyphicon glyph="ok"/>&nbsp;Verifcado</Label> &nbsp;
                        {/*{review_stars()}*/}
                    </Col>
                    <Col xs={3} s={5} md={5}>
                        <h3 style={{display: 'inline'}}>
                           <Button className="btn-from">
                            <img alt="from" src={locFrom} className="icon-trip"/>{trip.from}
                           </Button> →&nbsp;
                            {trip.stops &&
                            <span><Button className="btn-stop" style={{display: 'inline'}}><img alt="" src={locThrough} className="icon-trip"/> {trip.stops}
                            </Button> → </span>}
                           <Button className="btn-to"> <img alt="to" src={locTo} className="icon-trip"/> {trip.to}</Button>
                        </h3>
                        <div>
                            <Button className="btn-label"><img alt="" src={car} className="icon-trip"/> {trip.car}</Button> &nbsp;
                            {trip.highway ? (
                                <Button style={{display: 'inline'}}>
                                    <img alt="" title="Por Autopista!" src={highw} className="icon-trip"/></Button>
                            ) : (
                                <Button style={{display: 'inline'}}>
                                    <img alt="" title="Sin Autopista o peajes!" src={highw_n} className="icon-trip"/></Button>
                            )}

                            {trip.pets &&
                            <Button style={{display: 'inline'}}>
                                <img alt="" title="Pueden subir mascotas!" src={pet} className="icon-trip"/></Button>}
                            {!trip.smoke &&
                            <Button style={{display: 'inline'}}>
                                <img alt="" title="Se puede fumar!" src={smoke} className="icon-trip"/></Button>}
                            {trip.withMate &&
                            <Button style={{display: 'inline'}}>
                                <img alt="" title="Lleva Mate!" src={mate} className="icon-trip"/></Button>}
                            {trip.onlyGirls &&
                            <Button style={{display: 'inline'}}>
                                <img alt="" title="Sólo mujeres!" src={girl} className="icon-trip"/></Button>}
                        </div>
                    </Col>
                    <Col xs={3} s={2} md={2}>
                        <h4>
                            {!trip.hurry ? (
                                <img alt="" src={time_hurry} className="icon-trip"/>
                            ) : (
                                <img alt="" src={time_flex} className="icon-trip"/>
                            )} &nbsp;
                            <FormattedRelative value={trip.date}/>,
                        </h4>
                        <Button style={{padding: ''}}>
                            <h4 style={{margin: '0 0'}}><FormattedDate value={trip.date}/>&nbsp;  →
                                <FormattedTime value={trip.date}/></h4>
                        </Button>

                        {/*return (*/}
                        {/*<tr>*/}
                        {/*<td><Link to={'/trips/' + trip.id}>{trip.from}</Link></td>*/}
                        {/*</tr>*/}
                        {/*);*/}

                    </Col>
                    <Col xs={3} s={2} md={2} style={{display: 'flex'}}>
                        <h4>
                            <b>{trip.price}</b> $ ARS &nbsp;
                            <Glyphicon glyph="piggy-bank"/> &nbsp;
                            {setSeats()}
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