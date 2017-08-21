import React, {Component} from 'react';
import {DirectionsRenderer, GoogleMap, withGoogleMap} from "react-google-maps";
import canUseDOM from "can-use-dom";
import raf from "raf";
import style from "./customMapStyle.json"

// const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry,directions&key=AIzaSyBkFYmBhY-Y-CVidYMy7vff5_wxfii3lhE";

const geolocation = (
    canUseDOM && navigator.geolocation ?
        navigator.geolocation :
        ({
            getCurrentPosition(success, failure) {
                failure(`Your browser doesn't support geolocation.`);
            },
        })
);

const GeolocationGMap = withGoogleMap(props => (
        <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={12}
            defaultOptions={{
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#122b40"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#746855"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#242f3e"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                // "color": "#d59563"
                                "color": "#74acdf"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#d59563"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#263c3f"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#6b9a76"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#38414e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#212a37"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9ca5b3"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#746855"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#1f2835"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#f3d19c"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#2f3948"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                // "color": "#d59563"
                                "color": "#74acdf"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#515c6d"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#74acdf"
                            }
                        ]
                    }
                ]
            }
            }
            center={props.center}
            // style={style}
            // googleMapURL={googleMapURL}
        >
            {/*{props.center && (*/}
            {/*<InfoWindow position={props.center}>*/}
            {/*<div>{props.content}</div>*/}
            {/*</InfoWindow>*/}
            {/*)}*/}
            {/*{props.center && (*/}
            {/*<Circle*/}
            {/*center={props.center}*/}
            {/*radius={props.radius}*/}
            {/*options={{*/}
            {/*fillColor: `red`,*/}
            {/*fillOpacity: 0.20,*/}
            {/*strokeColor: `red`,*/}
            {/*strokeOpacity: 1,*/}
            {/*strokeWeight: 1,*/}
            {/*}}*/}
            {/*/>*/}
            {/*)}*/}
            {/*Directions:*/}
            {props.directions && <DirectionsRenderer directions={props.directions} />}
        </GoogleMap>
    )
);

export default class mainMapComp extends Component {
    state = {
        //Directions:
        origin: { lat: -38.0055, lng: -57.5426},
        destination: {lat: -34.6037, lng: -58.3816},
        directions: null,
        style: style,
        //Geolocation:
        center: null,
        content: null,
        radius: 6000
    };

    isUnmounted = false;

    componentDidMount() {
        //  GoogleMap.DirectionsService()
        //  //Set directions from A to B  (to be merged with db)
        //  const DirectionsService = new GoogleMap.DirectionsService();
        // GoogleMap.DirectionsService().route({
        //      origin: this.state.origin,
        //      destination: this.state.destination,
        //      travelMode: GoogleMap.TravelMode.DRIVING,
        //  }, (result, status) => {
        //      if (status === DirectionsRenderer.OK) {
        //          this.setState({
        //              directions: result,
        //          });
        //      } else {
        //          console.error(`error fetching directions ${result}`);
        //      }
        //  });

        // const DirectionsService = new google.maps.DirectionsService();
        // DirectionsService.route({
        //     origin: this.state.origin,
        //     destination: this.state.destination,
        //     travelMode: google.maps.TravelMode.DRIVING,
        // }, (result, status) => {
        //     if (status === google.maps.DirectionsStatus.OK) {
        //         this.setState({
        //             directions: result,
        //         });
        //     } else {
        //         console.error(`error fetching directions ${result}`);
        //     }
        // });

        //Get current location
        const tick = () => {
            if (this.isUnmounted) {
                return;
            }
            this.setState({ radius: Math.max(this.state.radius - 20, 0) });

            if (this.state.radius > 200) {
                raf(tick);
            }
        };
        geolocation.getCurrentPosition((position) => {
            if (this.isUnmounted) {
                return;
            }
            this.setState({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                },
                content: `Encuentra a tu alrededor!`,
            });

            raf(tick);
        }, (reason) => {
            if (this.isUnmounted) {
                return;
            }
            this.setState({
                center: {
                    lat: 60,
                    lng: 105,
                },
                content: `Error: The Geolocation service failed (${reason}).`,
            });
        });
    }

    componentWillUnmount() {
        this.isUnmounted = true;
    }

    render() {
        return (
            <GeolocationGMap
                containerElement={
                    <div style={{ height: `40vh` }} />
                }
                mapElement={
                    <div style={{ height: `42vh` }} />
                }
                center={this.state.destination}
                directions={this.state.directions}

                // center={this.state.center}
                content={this.state.content}
                radius={this.state.radius}
            />
        );
    }
}