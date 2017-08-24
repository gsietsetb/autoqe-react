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
        return this.props.hobbies.map(hobby => {
            return <CheckBox item={hobby} handleChange={this.props.onHobbyChange} key={hobby.id}/>
        })
    }

    render() {
        const boxes = this.makeCheckBoxes();
        return (
            <div>
                <form>
                    <TextInput
                        name="name"
                        label="name"
                        value={this.props.trip.name}
                        onChange={this.props.onChange}/>

                    {boxes}

                    <TextInput
                        name="breed"
                        label="Breed"
                        value={this.props.trip.breed}
                        onChange={this.props.onChange}/>

                    <TextInput
                        name="weight"
                        label="weight"
                        value={this.props.trip.weight}
                        onChange={this.props.onChange}/>

                    <TextInput
                        name="temperament"
                        label="temperament"
                        value={this.props.trip.temperament}
                        onChange={this.props.onChange}/>

                    <input
                        type="submit"
                        disabled={this.props.saving}
                        value={this.props.saving ? 'Saving...' : 'Save'}
                        className="btn btn-primary"
                        onClick={this.props.onSave}/>
                </form>
            </div>
        );
    }
}

TripForm = {
    trip: PropTypes.object.isRequired,
    hobbies: React.PropTypes.array.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onHobbyChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool
};

export default TripForm;