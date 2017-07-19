import React from "react";
import carpBanner from "./../img/banner/happy_carpool.jpg";
import carBanner from "./../img/banner/banner2.jpg";
import parkBanner from "./../img/banner/banner3.jpg";
import elecBanner from "./../img/banner/banner1.jpg";

import trip from "./../img/icons/material/carp.png";
import car from "./../img/icons/material/carRent.png";
import park from "./../img/icons/material/garage.png";
import elec from "./../img/icons/material/electric-car.png";
import {Button, Carousel, Glyphicon, Label} from "react-bootstrap";
// import TypeWriter from 'react-typewriter';
// ReactRotatingText Typist from 'react-typist';
import ReactRotatingText from "react-rotating-text";

const styles = {
    coverImgCarp: {
        height: '80vh',
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
                <Carousel.Item style={styles.coverImgCarp} className="autoqe_filter">
                    <Carousel.Caption >
                        <Button style={styles.labeledButton}>
                            <h2 style={{fontFamily: 'AllertaStencil'}}>
                                <Glyphicon style={{float: 'left'}} glyph="search"/>
                                <ReactRotatingText style={{float: 'left',textAlign: 'left'}}
                                                   items={['Encontrá', 'Publicá', 'Compartí']} />
                                &nbsp;
                                <Label bsSize="lg" bsStyle="custom">
                                    <img src={trip} height={40}/>
                                    TRAYECTO</Label>
                            </h2>
                        </Button>
                        <h2>
                            <Button bsSize="lg"
                                    style={styles.subButton}>
                                <p>Comaprtí los gastos del viaje, ahorrá plata</p>
                            </Button>
                        </h2>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*Car rental*/}
                <Carousel.Item style={styles.coverImgCar}>
                    <Carousel.Caption >
                        <Button style={styles.labeledButton}>
                            <h2 style={{fontFamily: 'AllertaStencil'}}>
                                <Glyphicon style={{float: 'left'}} glyph="search"/>
                                <ReactRotatingText style={{float: 'left',textAlign: 'left'}}
                                                   items={['Alquilá tu', 'Encontrá']} />
                                &nbsp;
                                <Label bsSize="lg" bsStyle="custom">
                                    <img src={car} height={40}/>
                                    AUTO</Label>
                            </h2>
                        </Button>
                        <h2>
                            <Button bsSize="lg"
                                    style={styles.labeledButton}>
                                <p>Usá el auto que no usa el vecino</p>
                            </Button>
                        </h2>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*Parking*/}
                <Carousel.Item style={styles.coverImgPark}>
                    <Carousel.Caption style={{top: 46}}>
                        <Button style={styles.labeledButton}>
                            <h2 style={{fontFamily: 'AllertaStencil'}}>
                                <Glyphicon style={{float: 'left'}} glyph="search"/>
                                <ReactRotatingText style={{float: 'left',textAlign: 'left'}}
                                                   items={['Alquilá tu', 'Encontrá']} />
                                &nbsp;
                                <Label bsSize="lg" bsStyle="custom">
                                    <img src={park} height={40}/>
                                    COCHERA</Label>
                            </h2>
                        </Button>
                        <h2>
                            <Button bsSize="lg" style={styles.subButton}>
                                <p>Aprovechá el estacionamiento de un vecino allá donde estés</p>
                            </Button>
                        </h2>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*Electric*/}
                <Carousel.Item style={styles.coverImgElec}>
                    <Carousel.Caption >
                        <Button style={styles.labeledButton}>
                            <h2 style={{fontFamily: 'AllertaStencil'}}>
                                <Glyphicon style={{float: 'left'}} glyph="search"/>
                                <ReactRotatingText style={{float: 'left',textAlign: 'left'}}
                                                   items={['Alquilá por horas un', 'Encontrá al tiro un']} />
                                &nbsp;
                                <Label bsSize="lg" bsStyle="custom">
                                    <img src={elec} height={40}/>
                                    AUTO ElÉCTRICO</Label>
                            </h2>
                        </Button>
                        <h2>
                            <Button bsSize="lg"
                                    style={styles.labeledButton}>
                                <p>Alquileres por horas. Ayuda al medioambiente con un sistema de transporte sostenible.</p>
                            </Button>
                        </h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
