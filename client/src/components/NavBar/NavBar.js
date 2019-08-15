import React from "react";
import "./NavBar.scss";
import logoInstock from "../../assets/Logo/Logo-instock.svg";
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="navbar-container">
          <div className="navbar-container__img-wrapper">
          <Link to='/'>
            <img
              className="navbar-container__img-wrapper__img"
              src={logoInstock}
              alt="logo instock"
            /></Link>
          </div>
          <div className="navbar-container__text-wrapper">
            <div className="navbar-container__text-wrapper__text">
              <Link to ='/inventory'>Inventory</Link>
            </div>
            <div className="navbar-container__text-wrapper__text">
              <Link to ='/'>Locations</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
