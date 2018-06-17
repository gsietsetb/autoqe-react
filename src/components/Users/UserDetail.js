import React, {Component} from 'react';

/*import ContactActions from '../../actions/UserActions';
import ContactStore from '../../stores/ContactStore';*/

class ContactDetailComponent extends Component {

  constructor() {
    super();
    this.state = {
      contact: {}
    };
    this.onChange = this.onChange.bind(this);
  }

  /*componentWillMount() {
    ContactStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    ContactActions.getContact(this.props.params.id);
  }

  componentWillUnmount() {
    ContactStore.removeChangeListener(this.onChange);
  }

  componentWillReceiveProps(nextProps) {
    ContactActions.getContact(nextProps.params.id);
  }

  onChange() {
    this.setState({
      contact: ContactStore.getContact(this.props.params.id)
    });
  }*/
  render() {
    let contact;
      if (Object.keys(this.state.contact).length !== 0) {
      contact = this.state.contact[0];
    }
    return (
      <div>
          {Object.keys(this.state.contact).length !== 0 &&
          <div>
              <img alt="" src={contact.image} width="150"/>
            <h1>{contact.name}</h1>
            <h3>{contact.email}</h3>
          </div>
        }
      </div>
    );
  }
}

export default ContactDetailComponent;
