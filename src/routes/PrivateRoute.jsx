import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user, role, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpinner />;

  if (!user) {
    // Not logged in → redirect to login
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    // Logged in but role not allowed → redirect to unauthorized page
    return <Navigate to="/unauthorized" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
