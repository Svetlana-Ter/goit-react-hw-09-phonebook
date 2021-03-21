import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import { Component, Suspense, lazy } from 'react';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<h1>Загружаем...</h1>}>
          <Switch>
            <Route exact path='/' component={HomeView} />
            <PublicRoute path='/register' restricted component={RegisterView} redirectTo='/' />
            <PublicRoute path='/login' restricted component={LoginView} redirectTo='/' />
            <PrivateRoute path='/contacts' component={ContactsView} redirectTo='/login' />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
