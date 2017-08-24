import React from "react";
import {Col, Nav, NavItem, Row, Tab} from "react-bootstrap";

import carpBanner from "../../img/banner/banner11.jpg";
import carBanner from "../../img/banner/banner2.jpg";
import parkBanner from "../../img/banner/parking2.jpg";
import elecBanner from "../../img/banner/elec.jpg";
import CarouselComp from "./Carousel";

const styles = {
    coverImgCarp: {
        backgroundImage: 'url(' + carpBanner + ')',
    },
    coverImgCar: {
        backgroundImage: 'url(' + carBanner + ')',
    },
    coverImgPark: {
        backgroundImage: 'url(' + parkBanner + ')',
    },
    coverImgElec: {
        backgroundImage: 'url(' + elecBanner + ')',
        backgroundPosition: 'bottom'
    },
    darkText: {
        color: '#122b40'
    },
    labeledButton: {
        backgroundColor: 'rgba(224, 253, 255, 0.4)'
    },
    subButton: {
        color: 'white',
        backgroundColor: 'rgba(116, 172, 223,0.2)'
    }
};

// bootstrapUtils.addStyle(Label, 'white');

export default class HeaderComp extends React.Component {
    // onLoadStart={(e) => this.setState({loading: true})}
    constructor(props) {
        super(props);
        this.state = {imageStatus: 'loading'};
    }

    handleImageLoaded() {
        this.setState({imageStatus: 'loaded'});
    }

    handleImageErrored() {
        this.setState({imageStatus: 'failed to load'});
    }

    render() {
        return (
            <div>
                <CarouselComp/>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="clearfix">


                        <Col sm={4}>
                            <Nav bsStyle="pills" stacked>
                                <NavItem eventKey="first">
                                    Tab 1
                                </NavItem>
                                <NavItem eventKey="second">
                                    Tab 2
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="first">
                                    Tab 1 content
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Tab 2 content
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}
