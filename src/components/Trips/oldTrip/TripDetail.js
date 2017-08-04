import React, {Component} from 'react';
import TripActions from '../../../actions/TripActions';
import TripStore from '../../../store/TripStore';

export default class TripDetailComponent extends Component {

  constructor() {
    super();
    this.state = {
      trip: {}
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    TripStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    TripActions.getTrip(this.props.params.id);
  }

  componentWillUnmount() {
    TripStore.removeChangeListener(this.onChange);
  }

  componentWillReceiveProps(nextProps) {
    TripActions.getTrip(nextProps.params.id);
  }

  onChange() {
    this.setState({
      trip: TripStore.getTrip(this.props.params.id)
    });
  }
  render() {
    let trip;
    if (Object.keys(this.state.trip).length !== 0) {
      trip = this.state.trip[0];
    }
    return (
      <div>
        { Object.keys(this.state.trip).length !== 0 &&
          <div>
            <img src={trip.image} width="150" />
            <h1>{trip.from}</h1>
            <h3>{trip.to}</h3>
          </div>
        }
      </div>
    );
  }
}