import React from 'react';
import PropTypes from 'prop-types'
import TextInput from '../common/TextInput';
import CheckBox from '../common/CheckBox';

class TripForm extends React.Component {
    constructor(props) {
        super(props);
        this.makeCheckBoxes = this.makeCheckBoxes.bind(this);
    }

    makeCheckBoxes() {
        return this.props.users.map(user => {
            return <CheckBox item={user}
                             handleChange={this.props.onUserChange}
                             key={user.id}/>
        })
    }

    render() {
        const boxes = this.makeCheckBoxes();
        return (
            <div>
                <form>
                    <TextInput
                        name="from"
                        label="from"
                        value={this.props.trip.from}
                        onChange={this.props.onChange}/>

                    {boxes}

                    <TextInput
                        name="to"
                        label="To"
                        value={this.props.trip.to}
                        onChange={this.props.onChange}/>

                    <TextInput
                        name="price"
                        label="price"
                        value={this.props.trip.price}
                        onChange={this.props.onChange}/>

                    <TextInput
                        name="seats"
                        label="seats"
                        value={this.props.trip.seats}
                        onChange={this.props.onChange}/>

                    <input
                        type="submit"
                        disabled={this.props.saving}
                        value={this.props.saving ? 'Guardando...' : 'Hecho!'}
                        className="btn btn-primary"
                        onClick={this.props.onSave}/>
                </form>
            </div>
        );
    }
}

TripForm = {
    trip: PropTypes.object.isRequired,
    users: React.PropTypes.array.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onUserChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool
};

export default TripForm;