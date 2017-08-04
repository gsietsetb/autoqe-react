import React, {PropTypes} from 'react';
import TripListRow from './TripListRow';

const TripList = ({trips}) => {
    return (
        <div>{/*<table className="table">*/}
            {/*<thead>*/}
            {/*<tr>*/}
                {/*<th>Name</th>*/}
            {/*</tr>*/}
            {/*</thead>*/}
            {/*<tbody>*/}

            {trips.map(trip =>
                <TripListRow key={trip.id} trip={trip} />
            )}
             </div>
        // </table>
    );
};

TripList.propTypes = {
    trips: PropTypes.array.isRequired
};

export default TripList;