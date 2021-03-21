import styles from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import defaultAvatar from './default-avatar.png';
import { Button } from '@material-ui/core';

export default function UserMenu() {
  const avatar = defaultAvatar;
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logout());

  return (
    <div className={styles.container}>
      <img src={avatar} alt='' width='32' className={styles.avatar} />
      <span className={styles.name}>Добро пожаловать, {email}</span>
      <Button type='button' onClick={onLogout} variant='contained' color='primary'>
        Выйти
      </Button>
    </div>
  );
}
