import React from "react";
import {Button, Form, FormControl, FormGroup, Glyphicon, InputGroup} from "react-bootstrap";
import moment from "moment";
import Responsive from "react-responsive";
// import Autocomplete from 'react-google-autocomplete';
import locFrom from "../../img/icons/custom/from.svg";
import locTo from "../../img/icons/custom/dest.svg";

// Default (desktop, tablet) and mobile setup
const Huge = ({children}) => <Responsive minWidth={960} children={children}/>;
const NotHuge = ({children}) => <Responsive maxWidth={960} children={children}/>;
const Default = ({children}) => <Responsive minWidth={780} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={780} children={children}/>;


export default class SearchTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            address: 'Buenos Aires, Ar'
        };
        this.onChange = (address) => this.setState({ address });
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        };

        return (
            <Form inline style={{display: 'inline-block', marginRight: '1em'}}>

                {/*From*/}
                <Default>
                    <FormGroup controlId="formInlineFrom" style={{display: 'inline-block',  marginRight: '1em'}}>
                        {/*<ControlLabel> &nbsp;  &nbsp; De: &nbsp; </ControlLabel>*/}
                        <InputGroup>
                            <InputGroup.Addon style={{minWidth: 36}}>
                                <img alt="" src={locFrom} height={24}/>
                            </InputGroup.Addon>
                            <FormControl style={{height: 'unset'}} type="text" placeholder="Buenos Aires"/>
                            {/*<PlacesAutocomplete id="from" inputProps={inputProps} />*/}
                        </InputGroup>
                    </FormGroup>
                </Default>

                {/*To*/}
                <FormGroup controlId="formInlineFrom" style={{display: 'inline-block',  marginRight: '1em'}}>
                    {/*<ControlLabel> &nbsp; &nbsp; A: &nbsp; </ControlLabel>*/}
                    <InputGroup>
                        <InputGroup.Addon style={{minWidth: 36}}>
                            <img alt="" src={locTo} height={24}/>
                        </InputGroup.Addon>
                        <FormControl style={{height: 'unset'}} height={30} className="inputForm" type="text"
                                     placeholder="Córdoba"/>
                        {/*<PlacesAutocomplete id="to" inputProps={inputProps} />*/}
                        {/*<PlacesAutocomplete id="from" inputProps={inputProps} placeholder="Mar del Plata"/>*/}
                        {/*<FormControl className="inputForm" id="to" type="text" placeholder="Mar del Plata"/>*/}
                    </InputGroup>
                </FormGroup>

                {/*Date*/}
                <Default>
                    <FormGroup controlId="formInlineFrom" style={{display: 'inline-block',  marginRight: '1em'}}>
                        {/*<ControlLabel> &nbsp; &nbsp; Cuándo: &nbsp; </ControlLabel>*/}
                        <InputGroup>
                            <InputGroup.Addon style={{minWidth: 32, height: 40}}>
                                <Glyphicon glyph="calendar" height={36}/>
                            </InputGroup.Addon>
                            <FormControl style={{height: 40}} className="inputForm" type="date" placeholder="Hoy"/>
                            {/*<SingleDatePicker*/}
                            {/*date={this.state.date} // momentPropTypes.momentObj or null*/}
                            {/*onDateChange={date => this.setState({date})} // PropTypes.func.isRequired*/}
                            {/*focused={this.state.focused} // PropTypes.bool*/}
                            {/*onFocusChange={({focused}) => this.setState({focused})} // PropTypes.func.isRequired*/}
                            {/*/>*/}
                            {/*<FormControl className="inputForm" type="date" placeholder="Hoy"  />*/}
                        </InputGroup>
                    </FormGroup>
                </Default>

                {/*Search button*/}
               <Default>
                   <Button type="submit" className="btn-light_w btn-search">
                    <Glyphicon glyph="search"/> &nbsp;
                    {/*<img src={search} className="main-icon"/>*/}
                    Encontrá tu viaje
                </Button>
               </Default>
                <Mobile>
                    <Button type="submit" className="btn-light_w btn-search">
                        <Glyphicon glyph="search"/> &nbsp;
                        {/*<img src={search} className="main-icon"/>*/}
                        Buscá
                    </Button>
                </Mobile>
            </Form>
        );
    }
}