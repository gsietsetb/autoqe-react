import React from 'react';
import PropTypes from "prop-types"

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TripList from './TripList';
import * as actions from '../../actions/TripActions'
import {Button, Glyphicon, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import carp from "../../img/icons/services/carp.svg";

class TripsPage extends React.Component {
    componentWillMount() {
        if (this.props.trips[0].id === '') {
            this.props.actions.loadTrips();
        }
    }

    render() {
        const trips = this.props.trips;
        // console.log('this is here: ' + JSON.stringify(trips));
        return (
            <div>
                <section className="section Container">
                    <Panel collapsible defaultExpanded header={<div>
                        <img alt="" src={carp} height={40}/> &nbsp;
                               <h3 style={{display: 'inline'}}> Últimos viajes publicados: &nbsp; &nbsp;
                                   <Glyphicon glyph="triangle-bottom"/>
                               </h3>
                               <Link to={'/trips/new'}><Button style={{float: 'right'}} type="submit" bsStyle="primary">
                                   <Glyphicon glyph="plus-sign"/> &nbsp; Publicar viaje
                               </Button>
                               </Link>
                           </div>}>
                        <ListGroup fill>
                            <ListGroupItem>
                                <TripList trips={trips}/>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>
                </section>
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