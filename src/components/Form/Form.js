import React from 'react';
import shortid from 'shortid';
import styles from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { useState } from 'react';
import { useCallback } from 'react';

export default function Form({ messageSubmit }) {
  const nameId = shortid.generate();
  const numberId = shortid.generate();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      const namesArray = contacts.map(contact => contact.name);
      let message = '';
      if (namesArray.includes(name)) {
        message = `${name} is already in Phonebook.
      Add another contact.`;
      } else if (name === '' || number === '') {
        message = 'Add contact, please';
      }
      if (message) {
        messageSubmit(message);
        setTimeout(() => {
          messageSubmit('');
        }, 3000);
      } else {
        dispatch(contactsOperations.addContact({ name, number }));
        reset();
      }
    },
    [name, number, dispatch, contacts, messageSubmit]
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        className={styles.inputField}
        name='name'
        type='text'
        value={name}
        onChange={handleNameChange}
        id={nameId}
      />
      <label htmlFor={numberId}>Number</label>
      <input
        className={styles.inputField}
        name='number'
        type='text'
        value={number}
        onChange={handleNumberChange}
        id={numberId}
      />
      <button type='submit' className={styles.btn}>
        Add contact
      </button>
    </form>
  );
}
