import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TripList from './TripList';
import {Button, Glyphicon} from 'react-bootstrap';

import * as actions from '../../actions/TripActions'

class TripsPage extends React.Component {
    componentWillMount() {
        if (this.props.trips[0].id === '') {
            this.props.actions.loadTrips();
        }
    }

    render() {
        const trips = this.props.trips;
        console.log('this is here: ' + JSON.stringify(trips));
        return (
            <div>
                <h2 style={{textAlign: 'center'}}>Últimos viajes públicados: &nbsp; &nbsp;
                    <Link to={'/trips/new'}><Button type="submit" className="btn-fine">
                        <Glyphicon glyph="plus-sign"/> &nbsp; Publicar viaje
                    </Button>
                    </Link>
                    {/*<Button className="btn-fine" >*/}
                    {/*<Link to={'/trips/new'} >+ Publicar viaje</Link></Button>*/}
                </h2>
                {/*<div className="col-md-4">*/}
                <TripList trips={trips}/>
                {/*</div>*/}
                {/*<div className="col-md-8">*/}
                {this.props.children}
                {/*</div>*/}
            </div>
        );
    }
}

TripsPage.propTypes = {
    trips: PropTypes.array.isRequired,
    children: PropTypes.object
};

// function mapStateToProps(state, ownProps) {
//     // let trip = {id: '', from: '', to: '', price: '', username: '', car: []};
//     // const tripId = ownProps.params.id;
//     // if (state.trips.length > 0) {
//     //     trip = Object.assign({}, state.trips.find(trip => trip.id  id)
//     // }
//     return {trip: state.trips};
// }

function mapStateToProps(state, ownProps) {
    if (state.trips.length > 0) {
        return {
            trips: state.trips
        };
    } else {
        return {
            trips: [{id: '', from: '', to: '', price: '', username: '', car: []}]
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsPage);