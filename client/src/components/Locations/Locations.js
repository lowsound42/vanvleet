import React from "react";
import NavBar from '../NavBar/NavBar';
import arrowIcon from "./Icons/SVG/Icon-arrow-right.svg";
import { Link } from "react-router-dom";
import "./Locations.scss";
class Locations extends React.Component {
  render() {

    return( 
      <>
      <div>{this.props.list.map(item => (
      <div key={item.id} className="warehouseList">

        <div id="partOne" className="warehouseList__part--one">
          <div className="warehouseList__part--one__info">
            <h4>{item.name}</h4>
            <p>
              {item.address.street}
              <span> </span>
              {item.address.suiteNum}
            </p>
          </div>
          <div className="warehouseList__part--one__icon">
            <Link to={`/warehouses/${item.id}`}>
              <img src={arrowIcon} alt="link" />
            </Link>
          </div>
        </div>
        <div className="warehouseList--align">

          <div id="partTwo" className="warehouseList__part--two">
            <h3>{item.contact.name}</h3>
            <p>{item.contact.title}</p>
          </div>

          <div id="partThree" className="warehouseList__part--three">
            <h3>{item.contact.phone}</h3>
            <p>{item.contact.email}</p>
          </div>
          <div id="partFour" className="warehouseList__part--four">
            <p>{item.inventoryCategories}</p>
            <div className="warehouseList__part--four__icon">
              <Link to={`/warehouses/${item.id}`}>
                <img src={arrowIcon} alt="link" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
    </>
    )
  }
}

export default Locations;


