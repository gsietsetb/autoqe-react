import AppDispatcher from '../dispatcher/AppDispatcher';
import ContactConstants from '../constants/ContactConstants';
import ContactsAPI from '../utils/ContactsAPI';


const api_url = 'http://localhost:3001/';

export default {

  recieveContacts: () => {
    ContactsAPI
      .getContacts(api_url+'api/contacts')
      .then(contacts => {
        AppDispatcher.dispatch({
          actionType: ContactConstants.RECIEVE_CONTACTS,
          contacts: contacts
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: ContactConstants.RECIEVE_CONTACTS_ERROR,
          message: message
        });
      });
  },

  getContact: (id) => {
    ContactsAPI
      .getContact(api_url+'api/contacts/' + id)
      .then(contact => {
        AppDispatcher.dispatch({
          actionType: ContactConstants.RECIEVE_CONTACT,
          contact: contact
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: ContactConstants.RECIEVE_CONTACT_ERROR,
          message: message
        });
      });
  }

}
