import React, {Component} from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

class FooterComponent extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            <Sidebar />
          </Col>
          <Col xs={12} md={9}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default FooterComponent;