import React, {Component} from 'react';
import {Col, Glyphicon, Label, ListGroupItem, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FormattedDate, FormattedRelative} from 'react-intl';

import locFrom from "../../img/icons/material/location2.svg";
import locTo from "../../img/icons/material/location.svg";

export default class TripListItem extends Component {
    render() {
        const { trip } = this.props;
        function review_stars() {
            let reviews = <Glyphicon glyph="star"/>, i;
            for (i=1;i<=5;i++) reviews += (i <= trip.id) ? <Glyphicon glyph="star"/> : <Glyphicon glyph="star-empty"/>
            return <div>{reviews}</div>;
        }
        function setSeats(){
            if (trip.seats > 3)
                return <Label bsStyle="success">{trip.seats} Asientos</Label>;
            else if(trip.seats < 2)
                return <Label bsStyle="danger">{trip.seats} Asiento!</Label>;
            else
                return <Label>{trip.seats} Asientos</Label>
        }
        return (
            <ListGroupItem>
                <Link to={`/trips/${trip.id}`} style={{color: '#122b40'}}>
                    <Row>
                        <Col xs={1} s={1} md={1} >
                            <img src={trip.image} height={60} />
                        </Col>
                        <Col xs={2} s={1} md={2} >
                            {trip.username}
                            <div >
                                <Glyphicon glyph="star"/>
                                <Glyphicon glyph="star"/>
                                <Glyphicon glyph="star"/>
                                <Glyphicon glyph="star"/>
                                <Glyphicon glyph="star-empty"/>
                            </div>
                            <Label bsStyle="info"><Glyphicon glyph="ok"/>&nbsp;Verifcado</Label>

                            {/*{review_stars()}*/}
                        </Col>
                        <Col xs={3} s={5} md={5}>
                            <h4>
                                <img src={locFrom} height={30}/>{trip.from}→
                                <img src={locTo} height={30}/>{trip.to}
                            </h4>
                        </Col>
                        <Col xs={3} s={2} md={2}>
                            <h4>
                                <FormattedRelative value={trip.date}/>,
                                <FormattedDate value={trip.date} /></h4>
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
    }
}