/* 
  Header and Navigation bar
*/

import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  // Main navigations header
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <div className={classes.logo}>Superhero Database</div>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/search" className={classes["header-link"]}>
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
