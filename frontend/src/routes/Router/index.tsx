import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../../layouts/DefaultLayout';
import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';
import { routes } from '../Routes';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.notFound} element={<NotFound />} />
      </Route>
    </Routes>
  );
}