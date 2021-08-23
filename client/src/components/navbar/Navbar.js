import React from "react";
import "./navbar.scss";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducer/userReducer";

const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="container">
        {/* <img src={Logo} alt="" className="navbar__logo" /> */}
        <div className="navbar__header">YULLI CLOUD</div>
        {!isAuth && (
          <div className="navbar__login">
            <NavLink to="/login">Wejscie</NavLink>
          </div>
        )}
        {!isAuth && (
          <div className="navbar__registration">
            <NavLink to="/registration">Register</NavLink>
          </div>
        )}
        {isAuth && (
          <div className="navbar__login" onClick={() => dispatch(logout())}>
            Wyjscie
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
