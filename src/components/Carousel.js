import React from "react";
import carpBanner from "./../img/banner/banner1.jpg";
import carBanner from "./../img/banner/banner2.jpg";
import parkBanner from "./../img/banner/parking2.jpg";
import elecBanner from "./../img/banner/electric2.jpg";

import trip from "./../img/logo/carp_g.svg";
import car from "./../img/logo/car_g.svg";
import park from "./../img/logo/park_g.svg";
import elec from "./../img/logo/elec_g.svg";
import {Button, Carousel, Glyphicon, Label} from "react-bootstrap";
// import TypeWriter from 'react-typewriter';
// ReactRotatingText Typist from 'react-typist';
import ReactRotatingText from "react-rotating-text";

const styles = {
    coverImgCarp: {
        height: '80vh',
        background: '',
        backgroundImage: 'url(' + carpBanner + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    coverImgCar: {
        height: '80vh',
        backgroundImage: 'url(' + carBanner + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    coverImgPark: {
        height: '80vh',
        backgroundImage: 'url(' + parkBanner + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    coverImgElec: {
        height: '80vh',
        backgroundImage: 'url(' + elecBanner + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right'
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
            <Carousel style={{height: '80vh'}} interval={6000} onSelect={this.slide=false}>

                {/*Carpooling*/}
                <Carousel.Item style={styles.coverImgCarp} className="filter">
                    <Carousel.Caption >
                        <h2 style={{fontFamily: 'AllertaStencil'}}>
                            <Label bsSize="lg" className="btn-white">
                                <Glyphicon glyph="search"/> &nbsp; &nbsp;
                                <ReactRotatingText items={['Encontrá', 'Publicá', 'Compartí']}/> &nbsp; &nbsp;
                                <img src={trip} height={60}/>
                                &nbsp; TRAYECTO
                            </Label>
                        </h2>
                        <h2>
                            <Button bsSize="lg"
                                    style={styles.subButton}>
                                <p>Compartí los gastos del viaje, ahorrá plata</p>
                            </Button>
                        </h2>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*Car rental*/}
                <Carousel.Item style={styles.coverImgCar}>
                    <Carousel.Caption >
                        <h2 style={{fontFamily: 'AllertaStencil'}}>
                            <Label bsSize="lg" className="btn-white">
                                <Glyphicon glyph="search"/>
                                <ReactRotatingText items={['Alquilá tu', 'Encontrá']}/> &nbsp; &nbsp;
                                <img src={car} height={60}/>
                                &nbsp; AUTO
                            </Label>
                        </h2>
                        <h2>
                            <Button bsSize="lg"
                                    style={styles.labeledButton}>
                                <p>Alquiler de Auto entre particulares</p>
                            </Button>
                        </h2>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*Parking*/}
                <Carousel.Item style={styles.coverImgPark}>
                    <Carousel.Caption>
                        <h2 style={{fontFamily: 'AllertaStencil'}}>
                            <Label bsSize="lg" className="btn-white">
                                <Glyphicon glyph="search"/>
                                <ReactRotatingText items={['Alquilá tu', 'Encontrá']}/> &nbsp; &nbsp;
                                <img src={park} height={60}/>
                                &nbsp; COCHERA
                            </Label>
                        </h2>
                        <h2>
                            <Button bsSize="lg" style={styles.subButton}>
                                <p>Alquiler de Cocheras entre particulares</p>
                            </Button>
                        </h2>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*Electric*/}
                <Carousel.Item style={styles.coverImgElec}>
                    <Carousel.Caption >
                        <h2 style={{fontFamily: 'AllertaStencil'}}>
                            <Label bsSize="lg" className="btn-white">
                                <Glyphicon glyph="search"/>
                                <ReactRotatingText items={['Alquilá por horas un', 'Encontrá un']}/> &nbsp; &nbsp;
                                <img src={elec} height={60}/>
                                &nbsp; AUTO ELÉCTRICO
                            </Label>
                        </h2>
                        <h2>
                            <Button bsSize="lg"
                                    style={styles.labeledButton}>
                                <p>Ayudá al medioambiente con un sistema de transporte sostenible en Buenos Aires.</p>
                            </Button>
                        </h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
