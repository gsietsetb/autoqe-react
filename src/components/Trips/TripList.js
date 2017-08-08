import React, {PropTypes} from 'react';
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