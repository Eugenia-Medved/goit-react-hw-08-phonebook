import React, { Component } from 'react';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelector } from '../../redux/contacts';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleChangeNumber = e => {
    this.setState({
      number: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (this.props.contacts.find(contact => contact.name === name)) {
      console.log(name);
      toast.error(`${name} is already in contacts!!!`);
      return;
    }

    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const nameId = shortid.generate();
    const telId = shortid.generate();

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label for={nameId}> Name </label>
        <input
          className={s.input}
          id={nameId}
          type="text"
          value={name}
          onChange={this.handleChangeName}
        />
        <label for={telId}> Number </label>
        <input
          className={s.input}
          id={telId}
          type="text"
          value={number}
          onChange={this.handleChangeNumber}
        />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelector.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (nam, tel) => dispatch(contactsOperations.addContact(nam, tel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
