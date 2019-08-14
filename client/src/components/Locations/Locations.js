import React from "react";
import arrowIcon from "./Icons/SVG/Icon-arrow-right.svg";
import {Link} from "react-router-dom";

class Locations extends React.Component {
  render() {
    return this.props.warehouseList.map(item => (
      <div key={item.id} className="warehouseList">
        <div className="warehouseList__part--one">
          <div className="warehouseList__part--one__info">
            <h3>{item.name}</h3>
            <p>{item.address.street}{item.address.suiteNum}</p>
          </div>
          <div className="warehouseList__part--one__icon">
            <Link to="/:id">
              <img src={arrowIcon} alt="link"></img>
            </Link>
          </div>
        </div>
        <div className="warehouseList__part--two">
          <p>{item.contact.name}</p>
          <p>{item.contact.title}</p>
        </div>
        <div className="warehouseList__part--three">
          <p>{item.contact.phone}</p>
          <p>{item.contact.email}</p>
        </div>
        <div className="warehouseList__part--four">
          <p>{item.inventoryCategories}</p>
        </div>
      </div>
    ));
  }
}

export default Locations;
