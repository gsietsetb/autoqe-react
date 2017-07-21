import React, {Component} from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import ContactComp from "../Contact";

export default class UserGrid extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            <ContactComp />
          </Col>
          <Col xs={12} md={9}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
