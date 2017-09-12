import React from 'react';
import PropTypes from "prop-types"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tripActions from '../../actions/TripActions';
import UserList from '../Users/UserList';
import TripForm from './TripForm';
import {withRouter} from "react-router-dom";

class TripPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            trip: this.props.trip,
            tripPassengers: this.props.tripPassengers,
            checkBoxPassengers: props.checkBoxPassengers,
            saving: false,
            isEditing: false
        };
        this.saveTrip = this.saveTrip.bind(this);
        this.updateTripState = this.updateTripState.bind(this);
        this.updateTripPassengers = this.updateTripPassengers.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.deleteTrip = this.deleteTrip.bind(this);
        this.redirect = this.redirect.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        if (this.props.trip.id !== nextProps.trip.id) {
            this.setState({trip: nextProps.trip});
        }
        if (this.props.checkBoxPassengers.length < nextProps.checkBoxPassengers.length) {
            this.setState({tripPassengers: nextProps.tripPassengers, checkBoxPassengers: nextProps.checkBoxPassengers});
        }

        this.setState({saving: false, isEditing: false});
    }

    toggleEdit() {
        this.setState({isEditing: true});
    }

    updateTripPassengers(event) {
        const trip = this.state.trip;
        const passengerId = event.target.value;
        const passenger = this.state.checkBoxPassengers.filter(passenger => passenger.id === passengerId)[0];
        const checked = !passenger.checked;
        passenger['checked'] = !passenger.checked;
        if (checked) {
            trip.passenger_ids.push(passenger.id);
        } else {
            trip.passenger_ids.splice(trip.passenger_ids.indexOf(passenger.id));
        }
        this.setState({trip: trip});
    }

    updateTripState(event) {
        const field = event.target.name;
        const trip = this.state.trip;
        trip[field] = event.target.value;
        return this.setState({trip: trip});
    }

    saveTrip(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.updateTrip(this.state.trip);

    }

    deleteTrip(event) {
        this.props.actions.deleteTrip(this.state.trip)
    }

    redirect() {
        this.props.history.push('/trips');
    }

    render() {
        if (this.state.isEditing) {
            return (
                <div>
                    <h1>edit trip</h1>
                    <TripForm
                        trip={this.state.trip}
                        passengers={this.state.checkBoxPassengers}
                        onSave={this.saveTrip}
                        onChange={this.updateTripState}
                        onPassengerChange={this.updateTripPassengers}
                        saving={this.state.saving}/>
                </div>
            )
        }
        return (
            <div className="col-md-8 col-md-offset-2">
                <h1>{this.state.trip.to}</h1>
                <p>From: {this.state.trip.from}</p>
                <p>Price: {this.state.trip.price}</p>
                <p>seats: {this.state.trip.seats}</p>
                <UserList users={this.state.tripPassengers}/>
                <button onClick={this.toggleEdit} className="btn btn-default  ">Editar</button>
                <button onClick={this.deleteTrip} className="btn btn-default  ">Borrar</button>
            </div>
        );
    }
}


TripPage.propTypes = {
    trip: PropTypes.object.isRequired,
    tripPassengers: PropTypes.array.isRequired,
    checkBoxPassengers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function getTripById(trips, id) {
    let trip = trips.find(trip => trip.id === id);
    return Object.assign({}, trip)
}

function PassengersForCheckBoxes(passengers, trip = null) {
    return passengers.map(passenger => {
        passenger['checked'] = !!(trip && trip.passenger_ids.filter(passengerId => passengerId === passenger.id).length > 0);
        return passenger;
    });
}

function collectTripPassengers(passengers, trip) {
    let selected = passengers.map(passenger => {
        if (trip.passenger_ids.filter(passengerId => passengerId === passenger.id).length > 0) {
            return passenger;
        }
    });
    return selected.filter(el => el !== undefined)
}

function mapStateToProps(state, ownProps) {
    const statePassengers = Object.assign([], state.passengers);
    let checkBoxPassengers = [];
    let tripPassengers = [];
    let trip = {from: '', to: '', price: '', seats: '', passenger_ids: []};
    const tripId = ownProps.params.id;
    if (tripId && state.trips.length > 0 && state.passengers.length > 0) {
        trip = getTripById(state.trips, ownProps.params.id);
        if (trip.id && trip.passenger_ids.length > 0) {
            console.log("(NO passengers associated) never here....");
            checkBoxPassengers = PassengersForCheckBoxes(statePassengers, trip);
            tripPassengers = collectTripPassengers(statePassengers, trip);
        } else {
            checkBoxPassengers = PassengersForCheckBoxes(statePassengers)
        }
    }
    return {trip: trip, checkBoxPassengers: checkBoxPassengers, tripPassengers: tripPassengers};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(tripActions, dispatch)
    };
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps))(TripPage);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TripPage));
// export default connect(mapStateToProps, mapDispatchToProps)(TripPage);