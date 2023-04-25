import { useState } from 'react';
import ContactForm from './contact-form/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contact-list/ContactList';
import { nanoid } from 'nanoid';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  // check is contact is alreadry in list
  const isUnique = name => {
    return (
      contacts.filter(
        contact => contact.name.toLocaleLowerCase() === name.toLowerCase()
      ).length === 0
    );
  };
  const updateContacts = newContact => {
    if (isUnique(newContact.name)) {
      setContacts(state => [...state, { id: nanoid(5), ...newContact }]);
    } else alert(`${newContact.name} is already in contacts`);
  };
  const deleteContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };
  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  const updateFilter = filter => {
    setFilter(filter);
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onChange={updateContacts} />
      <h2>Contacts</h2>
      <Filter currentValue={filter} onChange={updateFilter} />
      <ContactList
        contacts={filterContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}

// old
// class oldApp extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   // check is contact is alreadry in list
//   isUnique = name => {
//     return (
//       this.state.contacts.filter(
//         contact => contact.name.toLocaleLowerCase() === name.toLowerCase()
//       ).length === 0
//     );
//   };
//   updateContacts = newContact => {
//     if (this.isUnique(newContact.name)) {
//       this.setState({
//         contacts: [...this.state.contacts, { id: nanoid(5), ...newContact }],
//       });
//     } else alert(`${newContact.name} is already in contacts`);
//   };
//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };
//   filterContacts = () => {
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter)
//     );
//   };
//   updateFilter = filter => {
//     this.setState({ ...this.state, filter: filter });
//   };
//   render() {
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <ContactForm onChange={this.updateContacts} />
//         <h2>Contacts</h2>
//         <Filter currentValue={this.state.filter} onChange={this.updateFilter} />
//         <ContactList
//           contacts={this.filterContacts()}
//           onDeleteContact={this.deleteContact}
//         />
//       </>
//     );
//   }
// }
