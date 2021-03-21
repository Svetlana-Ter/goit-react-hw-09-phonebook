import authOperations from '../redux/auth/auth-operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import styles from '../App.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete='off'>
        <TextField
          type='text'
          name='name'
          value={name}
          onChange={handleNameChange}
          variant='outlined'
          label='Имя'
          className={styles.authInput}
        />

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
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}
