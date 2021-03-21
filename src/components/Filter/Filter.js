import styles from './Filter.module.css';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  const filterId = shortid.generate();
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <div className={styles.inputBlock}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input className={styles.inputField} value={value} onChange={onChange} id={filterId} />
    </div>
  );
}
