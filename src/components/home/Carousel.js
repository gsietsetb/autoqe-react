import React from "react";
import {Carousel, Glyphicon, Label} from "react-bootstrap";

import carpBanner from "../../img/header/carpool.jpg";
import carBanner from "../../img/header/rental.jpg";
import parkBanner from "../../img/header/parking.jpg";
import elecBanner from "../../img/header/elec.jpg";

import trip from "../../img/logo/carp_g.svg";
import car from "../../img/logo/car_g.svg";
import park from "../../img/logo/park_g.svg";
import elec from "../../img/logo/elec_g.svg";
import {Link} from "react-router-dom";

const styles = {
    coverImgCarp: {
        backgroundPosition: 'top',
        backgroundImage: 'url(' + carpBanner + ')',
    },
    coverImgCar: {
        backgroundImage: 'url(' + carBanner + ')',
    },
    coverImgPark: {
        backgroundPosition: 'top',
        backgroundImage: 'url(' + parkBanner + ')',
    },
    coverImgElec: {
        backgroundPosition: 'bottom',
        backgroundImage: 'url(' + elecBanner + ')',
    }
};

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
                        <img src={trip}/>
                        <h1>Carpooling: trayectos compartidos</h1>
                        <h3>Compartí los gastos del viaje, ahorrá plata</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*Car rental*/}
                <Carousel.Item style={styles.coverImgCar} className="coverImg">
                    <Carousel.Caption className="dark-color">
                        <img src={car}/>
                        <h1>Alquiler de Auto entre particulares</h1>
                        <h3>Rentabilizá tu auto mientras no lo usás</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*Parking*/}
                <Carousel.Item style={styles.coverImgPark} className="coverImg">
                    <Carousel.Caption>
                        <img src={park}/>
                        <h1>Alquiler de Cocheras entre particulares</h1>
                        <h3>Perdele el miedo a ir al centro en auto!</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*Electric*/}
                <Carousel.Item style={styles.coverImgElec} className="coverImg">
                    {/*<iframe src="https://player.vimeo.com/video/129498278?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="100%" height="800" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen/>*/}
                    <Carousel.Caption className="dark-color">
                        <img src={elec}/>
                        <h1> Alquiler de <b>AUTOS ELÉCTRICOS</b> por horas</h1>
                        <h3><Link to="/green">
                            <Label bsSize="lg" bsStyle="success">
                                <Glyphicon glyph="leaf"/> &nbsp;
                                Ayudá al medioambiente!
                            </Label>
                        </Link>
                            <p/>
                            Dónde y cuándo lo necesités
                        </h3>
                    </Carousel.Caption>x
                </Carousel.Item>
            </Carousel>
        );
    }
}
