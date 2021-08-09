import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className={s.header}>
       <nav>
        <NavLink
        exact
        to="/"
        className={s.link}
        activeClassName={s.activeLink}
        >
        HOME
        </NavLink>

        <NavLink
        to="/movies"
        className={s.link}
        activeClassName={s.activeLink}
        >
        MOVIES
        </NavLink>
      </nav>
    </header>
  );
}
