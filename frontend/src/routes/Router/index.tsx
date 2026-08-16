import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';
import { routes } from '../Routes';

export function Router() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.notFound} element={<NotFound />} />
    </Routes>
  );
}