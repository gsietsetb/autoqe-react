import React from 'react';
import PropTypes from "prop-types"

import TripListRow from './TripListRow';

const TripList = ({trips}) => {
    return (
        <div>

            {trips.map(trip =>
                <TripListRow key={trip.id} trip={trip} />
            )}
             </div>
    );
};

TripList.propTypes = {
    trips: PropTypes.array.isRequired
};

export default TripList;