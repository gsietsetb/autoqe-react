import React, {Component} from 'react';

import { Panel, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import TripsComponent from "../../items/trips/Trips";

export default class TripGrid extends Component {
    render() {
        return (
           <section className="section section-regular">
                <Panel bsStyle="primary" collapsible defaultExpanded header="Últimos viajes publicados:">
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