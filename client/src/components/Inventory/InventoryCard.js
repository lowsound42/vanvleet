import React from 'react';
import InventoryKebabMenu from './InventoryKebabMenu';
import { Link } from "react-router-dom";

import './Inventory.scss';
class InventoryCard extends React.Component {
  render(){
    return(
      <>
      <div className="InventoryCard">
         
          <div className="InventoryCard__container">
            
            <label className="InventoryCard__container__labelOne">ITEM</label>
            <div className="InventoryCard__container--one">
            <h2><Link to={`/inventory/${this.props.id}`}> {this.props.name} </Link> </h2>
              <p>{this.props.description}</p>
              </div>
            <label className="InventoryCard__container__labelTwo">LAST ORDERED</label>
            <div className="InventoryCard__container--two">{this.props.lastOrdered}</div>
            <label className="InventoryCard__container__labelThree">LOCATION</label>
            <div className="InventoryCard__container--three">{this.props.location}</div>
            <label className="InventoryCard__container__labelFour">QUANTITY</label>
            <div className="InventoryCard__container--four">{this.props.quantity}</div>
            <label className="InventoryCard__container__labelFive">STATUS</label>
            <div className="InventoryCard__container--five">{this.props.isInstock ? 'In Stock' : 'Out of Stock'}</div>
            <div className="InventoryCard__container__button">
              <InventoryKebabMenu />
            </div>
          </div>
          
      </div>
      </>
    )}
}

export default InventoryCard;
