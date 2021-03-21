import { connect } from 'react-redux';
import { Component } from 'react';
import authOperations from '../redux/auth/auth-operations';
import { Button, TextField } from '@material-ui/core';
import styles from '../App.module.css';

class LoginView extends Component {
  state = {
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
    this.props.onLogin(this.state);
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Страница логина</h1>

        <form onSubmit={this.handleSubmit} autoComplete='off' className={styles.form}>
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
            Войти
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
