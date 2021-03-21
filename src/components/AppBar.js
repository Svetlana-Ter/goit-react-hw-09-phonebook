import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  return (
    <header style={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
