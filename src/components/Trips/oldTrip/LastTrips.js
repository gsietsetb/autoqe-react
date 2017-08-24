import React, {Component} from 'react';

import {Glyphicon, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import carp from "../../../img/icons/services/carp.svg";

export default class TripGrid extends Component {
    render() {
        return (
           <section className="section section-regular">
               <Panel bsStyle="primary" collapsible defaultExpanded
                      header={<div>
                          <img alt="" src={carp} height={40}/> &nbsp;
                          <h4 style={{display: 'inline'}}> Últimos viajes publicados: &nbsp; &nbsp; <Glyphicon
                              glyph="triangle-bottom"/>
                          </h4>
                      </div>}>
                    <ListGroup fill>
                        <ListGroupItem>
                            {/*<Row>*/}
                                {/*<Col xs={12} md={11}>*/}
                                    {/*<TripsComponent />*/}
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