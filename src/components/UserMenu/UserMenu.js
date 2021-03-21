import styles from './UserMenu.module.css';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import defaultAvatar from './default-avatar.png';
import { Button } from '@material-ui/core';

const UserMenu = ({ email, logout }) => {
  const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img src={avatar} alt='' width='32' className={styles.avatar} />
      <span className={styles.name}>Добро пожаловать, {email}</span>
      <Button type='button' onClick={logout} variant='contained' color='primary'>
        Выйти
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  logout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
