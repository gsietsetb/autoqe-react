import React, {Component} from 'react';

import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import TripsComponent from "../../items/trips/Trips";
import trip from "./../../img/logo/carp_g.svg";

export default class TripGrid extends Component {
    render() {
        return (
           <section className="section section-regular">
               <Panel className="btn-custom" collapsible defaultExpanded
                      header={<div><img src={trip} height={40}/> &nbsp; Últimos viajes publicados:</div>}>
                    <ListGroup fill>
                        <ListGroupItem>
                            {/*<Row>*/}
                                {/*<Col xs={12} md={11}>*/}
                                    <TripsComponent />
                                {/*</Col>*/}
                                {/*<Col xs={12} md={1}>*/}
                                    {/*{this.props.children}*/}
                                {/*</Col>*/}
                            {/*</Row>*/}
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
           </section>
        );
    }
}