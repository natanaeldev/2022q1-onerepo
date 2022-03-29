import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink
          to="/"
          className="header__nav-link"
          activeClassName="header__nav-link--active"
          exact
        >
          Home
        </NavLink>
        <NavLink
          to="/warehouses"
          className="header__nav-link"
          activeClassName="header__nav-link--active"
        >
          Warehouses
        </NavLink>
        <NavLink
          to="/inventory"
          className="header__nav-link"
          activeClassName="header__nav-link--active"
        >
          Inventory
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
