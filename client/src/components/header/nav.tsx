import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "linkActive" : "linkInActive"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/misdemeanour"
            className={({ isActive }) =>
              isActive ? "linkActive" : "linkInActive"
            }
          >
            Misdemeanour
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/confession"
            className={({ isActive }) =>
              isActive ? "linkActive" : "linkInActive"
            }
          >
            Confession
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
