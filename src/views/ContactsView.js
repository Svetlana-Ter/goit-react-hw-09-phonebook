import React, { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import styles from '../App.module.css';
import { CSSTransition } from 'react-transition-group';
import Logo from '../components/Logo/Logo';
import Error from '../components/Error/Error';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../redux/contacts/contacts-operations';
import contactsSelectors from '../redux/contacts/contacts-selectors';

export default function ContactsView() {
  const [message, setMessage] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const loading = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const handleSubmit = message => {
    setMessage(message);
  };

  return (
    <>
      <CSSTransition
        in={!!message}
        timeout={250}
        classNames={{
          enter: styles.errorEnter,
          enterActive: styles.errorEnterActive,
          exit: styles.errorExit,
          exitActive: styles.errorExitActive,
        }}
        unmountOnExit
      >
        <Error message={message} />
      </CSSTransition>
      <CSSTransition in={true} appear={true} timeout={500} classNames={styles} unmountOnExit>
        <Logo />
      </CSSTransition>
      <Form messageSubmit={handleSubmit} />
      <CSSTransition in={contacts.length > 0} timeout={250} classNames={styles} unmountOnExit>
        <h2 className={styles.subtitle}>Contacts</h2>
      </CSSTransition>
      <CSSTransition in={contacts.length > 1} timeout={250} classNames={styles} unmountOnExit>
        <Filter />
      </CSSTransition>
      {loading ? <h1>Загружаем...</h1> : <ContactsList />}
    </>
  );
}
