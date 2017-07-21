import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
// import { Link } from 'react-router';
import TripActions from '../../actions/TripActions';
import TripStore from '../../stores/TripStore';
import TripListItem from './TripListItem';

// We'll use this function to get a trip
// list item for each of the trips in our list
function getTripListItem(trip) {
  return (
    <TripListItem
      key={trip.id}
      trip={trip}
    />
  );
}
class TripsComponent extends Component {

  constructor() {
    super();
    // For our initial state, we just want
    // an empty array of trips
    this.state = {
      trips: []
    }
    // We need to bind this to onChange so we can have
    // the proper this reference inside the method
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    TripStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    TripActions.recieveTrips();
  }

  componentWillUnmount() {
    TripStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      trips: TripStore.getTrips()
    });
  }

  render() {
    let tripListItems;
    if (this.state.trips) {
      // Map over the trips and get an element for each of them
      tripListItems = this.state.trips.map(trip => getTripListItem(trip));
    }
    return (
      <div>
        <Table responsive>
          {tripListItems}
        </Table>
      </div>
    );
  }
}

export default TripsComponent;
