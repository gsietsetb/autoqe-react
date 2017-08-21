import React from "react";
import {Carousel, Glyphicon, Label} from "react-bootstrap";

import carpBanner from "../../img/banner/banner11.jpg";
import carBanner from "../../img/banner/banner2.jpg";
import parkBanner from "../../img/banner/parking2.jpg";
import elecBanner from "../../img/banner/elec.jpg";

import trip from "../../img/logo/carp_g.svg";
import car from "../../img/logo/car_g.svg";
import park from "../../img/logo/park_g.svg";
import elec from "../../img/logo/elec_g.svg";

import ReactRotatingText from "react-rotating-text";
import {Link} from "react-router-dom";

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

export default class CarouselComp extends React.Component {
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
            <Carousel className="carousel-container" interval={6000} onSelect={() => this.slide = false}>
                {/*Carpooling*/}
                <Carousel.Item style={styles.coverImgCarp} className="coverImg">
                    <Carousel.Caption >
                        <h2 style={{fontFamily: 'AllertaStencil'}}>
                            <Label bsSize="lg" className="btn-white">
                                <Glyphicon glyph="search"/> &nbsp; &nbsp;
                                <ReactRotatingText items={[' Encontrá ', ' Publicá ', ' Compartí ']}/> &nbsp; &nbsp;
                                <img height={60} src={trip}/>
                                &nbsp; TRAYECTO
                            </Label>
                        </h2>
                        <h3>
                            <Label bsSize="lg" className="btn-fine">
                                Compartí los gastos del viaje, ahorrá plata
                            </Label>
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*Car rental*/}
                <Carousel.Item style={styles.coverImgCar} className="coverImg">
                    <Carousel.Caption >
                        <h2 style={{fontFamily: 'AllertaStencil'}}>
                            <Label bsSize="lg" className="btn-white">
                                <Glyphicon glyph="search"/>
                                <ReactRotatingText items={[' Alquilá tu ', ' Encontrá ']}/> &nbsp; &nbsp;
                                <img src={car} height={60}/>
                                &nbsp; AUTO
                            </Label>
                        </h2>
                        <h3>
                            <Label bsSize="lg" className="btn-fine">
                                Alquiler de Auto entre particulares
                            </Label>
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*Parking*/}
                <Carousel.Item style={styles.coverImgPark} className="coverImg">
                    <Carousel.Caption>
                        <h2 style={{fontFamily: 'AllertaStencil'}}>
                            <Label bsSize="lg" className="btn-white">
                                <Glyphicon glyph="search"/>
                                <ReactRotatingText items={[' Alquilá tu ', ' Encontrá ']}/> &nbsp; &nbsp;
                                <img src={park} height={60}/>
                                &nbsp; COCHERA
                            </Label>
                        </h2>
                        <h3>
                            <Label bsSize="lg" className="btn-fine">
                                Alquiler de Cocheras entre particulares
                            </Label>
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*Electric*/}
                <Carousel.Item style={styles.coverImgElec} className="coverImg">
                    {/*<iframe src="https://player.vimeo.com/video/129498278?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="100%" height="800" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen/>*/}
                    <Carousel.Caption className="position-top">
                        <h2 style={{fontFamily: 'AllertaStencil'}}>
                            <Label bsSize="lg" className="btn-white">
                                <Glyphicon glyph="search"/>
                                <ReactRotatingText items={[' Alquilá un', ' Encontrá un ']}/> &nbsp; &nbsp;
                                <img src={elec} height={60}/>
                                &nbsp; AUTO ELÉCTRICO
                            </Label>
                        </h2>
                        <h3>
                            <Link to="/green">
                                <Label bsSize="lg" bsStyle="success">
                                    <Glyphicon glyph="leaf"/> &nbsp;
                                    Ayudá al medioambiente!
                                </Label>
                            </Link>
                            <p/>
                            <Label bsSize="lg" bsStyle="warning">
                                Dónde y cuándo lo necesités
                            </Label>
                        </h3>
                    </Carousel.Caption>x
                </Carousel.Item>
            </Carousel>
        );
    }
}
