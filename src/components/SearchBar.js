import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup, Glyphicon, InputGroup} from 'react-bootstrap';
// import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

export default class SearchBarComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div className="Container">
                <Form inline className="inline-fit">
                    <FormGroup controlId="formInlineFrom">
                        <ControlLabel>De: &nbsp; </ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="screenshot"/>
                            </InputGroup.Addon>
                            <FormControl className="inputForm" type="text" placeholder="Buenos Aires"/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup controlId="formInlineFrom">
                        <ControlLabel> &nbsp; &nbsp; A: &nbsp; </ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="map-marker"/>
                            </InputGroup.Addon>
                            <FormControl className="inputForm" type="text" placeholder="Mar del Plata"/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup controlId="formInlineFrom">
                        <ControlLabel> &nbsp; &nbsp; Cuándo: &nbsp; </ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="calendar"/>
                            </InputGroup.Addon>
                            <FormControl className="inputForm" type="text" placeholder="Hoy">
                                {/*<SingleDatePicker*/}
                                {/*date={this.state.date} // momentPropTypes.momentObj or null*/}
                                {/*onDateChange={date => this.setState({date})} // PropTypes.func.isRequired*/}
                                {/*focused={this.state.focused} // PropTypes.bool*/}
                                {/*onFocusChange={({focused}) => this.setState({focused})} // PropTypes.func.isRequired*/}
                                {/*/>*/}
                            </FormControl>
                            {/*<FormControl className="inputForm" type="date" placeholder="Hoy"  />*/}
                        </InputGroup>
                        &nbsp;
                        <Button type="submit" bsStyle="info">
                            <Glyphicon glyph="search"/> &nbsp; Encontrar tu viaje
                        </Button>
                    </FormGroup>
                    &nbsp; &nbsp;
                </Form>
            </div>
        );
    }
}
