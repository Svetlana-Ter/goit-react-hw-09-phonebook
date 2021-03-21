import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from '../redux/auth/auth-operations';
import { Button, TextField } from '@material-ui/core';
import styles from '../App.module.css';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} autoComplete='off' className={styles.form}>
        <TextField
          type='email'
          name='email'
          value={email}
          onChange={handleEmailChange}
          variant='outlined'
          label='Почта'
          className={styles.authInput}
        />

        <TextField
          type='password'
          name='password'
          value={password}
          onChange={handlePasswordChange}
          variant='outlined'
          label='Пароль'
          className={styles.authInput}
        />

        <Button type='submit' variant='contained' color='primary'>
          Войти
        </Button>
      </form>
    </div>
  );
}
