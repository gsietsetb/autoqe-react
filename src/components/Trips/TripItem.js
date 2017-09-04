import PropTypes from 'prop-types'
import React from 'react';
import {Link} from 'react-router-dom';

const TripListItem = ({trip}) => {
    return (
        <li className="list-group-item"><Link to={'/trips/' + trip.id}>{trip.name}</Link></li>
    );
};

TripListItem.propTypes = {
    trip: PropTypes.object.isRequired
};

export default TripListItem;