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
            trip: {name: '', breed: '', weight: '', temperament: '', hobby_ids: []},
            saving: false
        };
        this.saveTrip = this.saveTrip.bind(this);
        this.updateTripHobbies = this.updateTripHobbies.bind(this);
        this.updateTripState = this.updateTripState.bind(this);
    }

    updateTripHobbies(event) {
        const trip = this.state.trip;
        const hobbyId = event.target.value;
        const hobby = this.props.checkBoxHobbies.filter(hobby => hobby.id === hobbyId)[0];
        const checked = !hobby.checked;
        hobby['checked'] = !hobby.checked;
        if (checked) {
            trip.hobby_ids.push(hobby.id);
        } else {
            trip.hobby_ids.splice(trip.hobby_ids.indexOf(hobby.id));
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
                <h1>new trip</h1>
                <TripForm
                    trip={this.state.trip}
                    hobbies={this.props.checkBoxHobbies}
                    onSave={this.saveTrip}
                    onChange={this.updateTripState}
                    onHobbyChange={this.updateTripHobbies}/>
            </div>
        );
    }
}

function hobbiesForCheckBoxes(hobbies) {
    return hobbies.map(hobby => {
        hobby['checked'] = false;
        return hobby;
    });
}

NewTripPage.propTypes = {
    checkBoxHobbies: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};



function mapStateToProps(state, ownProps) {
    let checkBoxHobbies = [];
    if (state.hobbies.length > 0) {
        checkBoxHobbies = hobbiesForCheckBoxes(Object.assign([], state.hobbies));
    }

    return {
        checkBoxHobbies: checkBoxHobbies
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewTripPage);