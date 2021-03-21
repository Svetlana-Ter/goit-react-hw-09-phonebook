import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

const PublicRoute = ({ redirectTo, children, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  return (
    <Route {...routeProps}>{isAuthenticated && routeProps.restricted ? <Redirect to={redirectTo} /> : children}</Route>
  );
};

export default PublicRoute;
