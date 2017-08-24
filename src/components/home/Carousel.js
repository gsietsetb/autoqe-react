import React from "react";
import {Carousel, Glyphicon, Label} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./carousel.css"
// //Banners
// import carpBanner from "../../img/header/carpool.jpg";
// import carBanner from "../../img/header/rent.jpg";
// import parkBanner from "../../img/header/parking.jpg";
// import elecBanner from "../../img/header/elec.jpg";
//Icons
import carp from "../../img/icons/services/carp.svg";
import rent from "../../img/icons/services/rent.svg";
import park from "../../img/icons/services/park.svg";
import el from "../../img/icons/services/el.svg";

// const styles = {
//     coverImgCarp: {
//         backgroundPosition: 'top',
//         backgroundImage: 'url(' + carpBanner + ')',
//     },
//     coverImgCar: {
//         backgroundImage: 'url(' + carBanner + ')',
//     },
//     coverImgPark: {
//         backgroundPosition: 'top',
//         backgroundImage: 'url(' + parkBanner + ')',
//     },
//     coverImgElec: {
//         backgroundPosition: 'bottom',
//         backgroundImage: 'url(' + elecBanner + ')',
//     }
// };

export default class CarouselComp extends React.Component {
    // onLoadStart={(e) => this.setState({loading: true})}
    constructor(props) {
        super(props);
        this.state = {
            imageStatus: 'loading',
            index: 0,
            direction: 'next'
        };
        this._handleSelect = this._handleSelect.bind(this)
    }

    _handleSelect(selectedIndex) {
        this.setState({index: selectedIndex});
    }

    handleImageLoaded() {
        this.setState({imageStatus: 'loaded'});
    }

    handleImageErrored() {
        this.setState({imageStatus: 'failed to load'});
    }

    render() {
        return (
            <Carousel className="carousel-container" interval={1000} activeIndex={this.state.index}
                      direction={this.state.direction} onSelect={this._handleSelect}>
                {/*Carpooling*/}
                <Carousel.Item animateIn animateOut index={0} className="coverImg cover-carp">
                    <div className="deg-carp">
                        <Carousel.Caption>
                            <img alt="carpooling" src={carp}/>
                            <h1>Carpooling: trayectos compartidos</h1>
                            <h3>Ahorrá plata compartiendo los gastos del viaje</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                {/*Car rental*/}
                <Carousel.Item index={1} className="coverImg cover-rent">
                    <div className="deg-rent">
                        <Carousel.Caption>
                            <img alt="car rental" src={rent}/>
                            <h1>Alquiler de Auto entre particulares</h1>
                            <h3>Rentabilizá tu auto mientras no lo usás</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                {/*Parking*/}
                <Carousel.Item index={2} className="coverImg cover-park">
                    <div className="deg-park">
                        <Carousel.Caption>
                            <img alt="parking rental" src={park}/>
                            <h1>Alquiler de Cocheras entre particulares</h1>
                            <h3>Perdele el miedo a ir al centro en auto!</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                {/*Electric*/}
                <Carousel.Item index={3} className="coverImg cover-elec">
                    {/*<iframe src="https://player.vimeo.com/video/129498278?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="100%" height="800" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen/>*/}
                    <div className="deg-elec">
                        <Carousel.Caption className="">
                            <img alt="electric car" src={el}/>
                            <h1> Alquiler de <b>AUTOS ELÉCTRICOS</b> por horas</h1>
                            <h3>
                                Dónde y cuándo lo necesités
                                <p/>
                                <Link to="/green">
                                    <Label bsSize="lg" bsStyle="success">
                                        <Glyphicon glyph="leaf"/> &nbsp;
                                        Ayudá al medioambiente!
                                    </Label>
                                </Link>
                            </h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        );
    }
}
