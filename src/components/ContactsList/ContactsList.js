import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Contact from '../Contact/Contact';
import styles from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <TransitionGroup className={styles.contactsList} component='ul'>
      {contacts.map(contact => (
        <CSSTransition key={contact.id} timeout={250} classNames={styles}>
          <Contact contact={contact} onDeleteContact={onDeleteContact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
