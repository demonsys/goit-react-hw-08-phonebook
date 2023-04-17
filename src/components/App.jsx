import React, { Component } from 'react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contact-list/ContactList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  updateContacts = newContact => {
    if (
      this.state.contacts.filter(contact =>
        newContact.name.includes(contact.name)
      ).length === 0
    ) {
      this.setState({
        contacts: [...this.state.contacts, { id: nanoid(5), ...newContact }],
      });
    } else alert(`${newContact.name} is already in contacts`);
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  updateFilter = filter => {
    this.setState({ ...this.state, filter: filter });
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onChange={this.updateContacts} />
        <h2>Contacts</h2>
        <Filter onChange={this.updateFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
export default App;
