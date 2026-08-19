import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/Routes';

export function Menu() {
  return (
    <>
      <h1>MENU COMPONENT</h1>
      <NavLink to={routes.home}>home</NavLink>
    </>
  );
}