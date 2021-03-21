import authOperations from '../redux/auth/auth-operations';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import styles from '../App.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Страница регистрации</h1>

        <form onSubmit={this.handleSubmit} className={styles.form} autoComplete='off'>
          <TextField
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
            variant='outlined'
            label='Имя'
            className={styles.authInput}
          />

          <TextField
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            variant='outlined'
            label='Почта'
            className={styles.authInput}
          />

          <TextField
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
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
}
const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
