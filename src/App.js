import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import { Suspense, lazy, useEffect } from 'react';
import authOperations from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <PublicRoute exact path='/'>
            <HomeView />
          </PublicRoute>
          <PublicRoute path='/register' restricted redirectTo='/'>
            <RegisterView />
          </PublicRoute>
          <PublicRoute path='/login' restricted redirectTo='/'>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path='/contacts' redirectTo='/login'>
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}
