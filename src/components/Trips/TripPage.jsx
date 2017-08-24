import React from 'react';
import PropTypes from "prop-types"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tripActions from '../../actions/TripActions';
// import {withRouter} from "react-router-dom";
import UserList from '../Users/UserList';
import TripForm from './TripForm';

class TripPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            trip: this.props.trip,
            tripUsers: this.props.tripUsers,
            checkBoxUsers: props.checkBoxUsers,
            saving: false,
            isEditing: false
        };
        this.saveTrip = this.saveTrip.bind(this);
        this.updateTripState = this.updateTripState.bind(this);
        this.updateTripUsers = this.updateTripUsers.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.deleteTrip = this.deleteTrip.bind(this);
        this.redirect = this.redirect.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        if (this.props.trip.id !== nextProps.trip.id) {
            this.setState({trip: nextProps.trip});
        }
        if (this.props.checkBoxUsers.length < nextProps.checkBoxUsers.length) {
            this.setState({tripUsers: nextProps.tripUsers, checkBoxUsers: nextProps.checkBoxUsers});
        }

        this.setState({saving: false, isEditing: false});
    }

    toggleEdit() {
        this.setState({isEditing: true});
    }

    updateTripUsers(event) {
        const trip = this.state.trip;
        const userId = event.target.value;
        const user = this.state.checkBoxUsers.filter(user => user.id === userId)[0];
        const checked = !user.checked;
        user['checked'] = !user.checked;
        if (checked) {
            trip.user_ids.push(user.id);
        } else {
            trip.user_ids.splice(trip.user_ids.indexOf(user.id));
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
                        users={this.state.checkBoxUsers}
                        onSave={this.saveTrip}
                        onChange={this.updateTripState}
                        onUserChange={this.updateTripUsers}
                        saving={this.state.saving}/>
                </div>
            )
        }
        return (
            <div className="col-md-8 col-md-offset-2">
                <h1>{this.state.trip.from}</h1>
                <p>To: {this.state.trip.to}</p>
                <p>place: {this.state.trip.weight}</p>
                <p>temperament: {this.state.trip.temperament}</p>
                <UserList users={this.state.tripUsers}/>
                <button onClick={this.toggleEdit} className="btn btn-default  ">edit</button>
                <button onClick={this.deleteTrip} className="btn btn-default  ">delete</button>
            </div>
        );
    }
}


TripPage.propTypes = {
    trip: PropTypes.object.isRequired,
    tripUsers: PropTypes.array.isRequired,
    checkBoxUsers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function getTripById(trips, id) {
    let trip = trips.find(trip => trip.id === id);
    return Object.assign({}, trip)
}

function usersForCheckBoxes(users, trip = null) {
    return users.map(user => {
        user['checked'] = !!(trip && trip.user_ids.filter(userId => userId === user.id).length > 0);
        return user;
    });
}

function collectTripUsers(users, trip) {
    let selected = users.map(user => {
        if (trip.user_ids.filter(userId => userId === user.id).length > 0) {
            return user;
        }
    });
    return selected.filter(el => el !== undefined)
}

function mapStateToProps(state, ownProps) {
    const stateUsers = Object.assign([], state.users);
    let checkBoxUsers = [];
    let tripUsers = [];
    let trip = {name: '', breed: '', weight: '', temperament: '', user_ids: []};
    const tripId = ownProps.params.id;
    if (tripId && state.trips.length > 0 && state.users.length > 0) {
        trip = getTripById(state.trips, ownProps.params.id);
        if (trip.id && trip.user_ids.length > 0) {
            checkBoxUsers = usersForCheckBoxes(stateUsers, trip);
            tripUsers = collectTripUsers(stateUsers, trip);
        } else {
            checkBoxUsers = usersForCheckBoxes(stateUsers)
        }
    }
    return {trip: trip, checkBoxUsers: checkBoxUsers, tripUsers: tripUsers};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(tripActions, dispatch)
    };
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps))(TripPage);
export default connect(mapStateToProps, mapDispatchToProps)(TripPage);