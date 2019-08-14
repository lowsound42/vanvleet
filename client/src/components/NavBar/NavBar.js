//hello world
import React from "react";
import "./NavBar.scss";
class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="navbar-container">
          <div className="navbar-container__img-wrapper">
            <img
              className="navbar-container__img-wrapper__img"
              alt="logo instock"
            />
          </div>
          <div className="navbar-container__text-wrapper">
            <div className="navbar-container__text-wrapper__text">
              Inventory
            </div>
            <div className="navbar-container__text-wrapper__text">
              Locations
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
