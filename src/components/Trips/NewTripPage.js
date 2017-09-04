import React from 'react';
import PropTypes from "prop-types"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router-dom';
import * as courseActions from '../../actions/TripActions';
import TripForm from './TripForm';


class NewTripPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trip: {from: '', to: '', price: '', seats: '', passenger_ids: []},
            saving: false
        };
        // this.redirect = this.redirect.bind(this);
        this.saveTrip = this.saveTrip.bind(this);
        this.updateTripPassengers = this.updateTripPassengers.bind(this);
        this.updateTripState = this.updateTripState.bind(this);
    }

    updateTripPassengers(event) {
        const trip = this.state.trip;
        const passengerId = event.target.value;
        const passenger = this.props.checkBoxPassengers.filter(passenger => passenger.id === passengerId)[0];
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
        this.props.actions.createTrip(this.state.trip)
    }

    render() {
        return (
            <div>
                <h1>Añadir viaje</h1>
                <TripForm
                    trip={this.state.trip}
                    passengers={this.props.checkBoxPassengers}
                    onSave={this.saveTrip}
                    onChange={this.updateTripState}
                    // onPassengerChange={this.updateTripPassengers}
                />
            </div>
        );
    }
}

function passengersForCheckBoxes(passengers) {
    return passengers.map(passenger => {
        passenger['checked'] = false;
        return passenger;
    });
}

NewTripPage.propTypes = {
    checkBoxPassengers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    // let checkBoxPassengers = [];
    // if (state.user.length > 0) {
    //     checkBoxPassengers = passengersForCheckBoxes(Object.assign([], state.passengers));
    // }
    //
    // return {
    //     checkBoxPassengers: checkBoxPassengers
    // };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewTripPage);
// export default connect(mapStateToProps)(NewTripPage);