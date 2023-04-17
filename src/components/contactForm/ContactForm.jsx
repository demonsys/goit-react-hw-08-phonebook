import React, { Component } from 'react';
import './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };
  updateState = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onChange(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.updateState}
            />
          </label>
          <label htmlFor="number">
            Number{' '}
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.updateState}
            />
          </label>
          <button>Add contact</button>
        </form>
      </>
    );
  }
}
export default ContactForm;
