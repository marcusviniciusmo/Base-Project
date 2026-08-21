import type { ProtectedRouteProps } from '../../interfaces/ProtectedRoute';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { routes } from '../../routes/Routes';

export function ProtectedRoute({ redirectTo = routes.notFound }: ProtectedRouteProps) {
  const location = useLocation();

  const token = localStorage.getItem('token');

  if (!token) {
    return (
      // TODO: Redirect to login when authentication is implemented.
      <Navigate to={redirectTo} replace state={{ from: location }} />
    );
  }

  return <Outlet />;
}