import { NavLink } from "react-router-dom";
import React from "react";
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import { useAuth0 } from "@auth0/auth0-react";

import {
  NavItem
} from "reactstrap";

const MainNav = () => {

  const {
    isAuthenticated
  } = useAuth0();


  return (
    <div className="navbar-nav mr-auto">
      <NavLink
        to="/dev.cloud-heroes"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Home
    </NavLink>
    <NavLink
        to="/quiz"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Quiz
    </NavLink>
    <NavLink
        to="/exam"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Exam
    </NavLink>
    <NavLink
        to="/about"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        About
    </NavLink>
    <NavLink
        to="/resources"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Resources
    </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/profile"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          Profile
        </NavLink>
      )}

      {isAuthenticated && (

        <NavItem>
          <LoginButton />
        </NavItem>

      )}
      {isAuthenticated && (
        <NavItem>
          <LogoutButton />
        </NavItem>
      )}
    </div>
  );
}
export default MainNav;
