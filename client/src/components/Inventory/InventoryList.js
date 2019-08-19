import React from "react";
import InventoryCard from "./InventoryCard.js";
import "./Inventory.scss";

class InventoryList extends React.Component {
  render() {
    let inventoryItems = this.props.inventoryItems;
    return (
      <>
        <div className="InventoryList__Headers">
          <div className="InventoryList__Headers__labelOne">ITEM</div>
          <div className="InventoryList__Headers__labelTwo__container">
            <div className="InventoryList__Headers__labelTwo__container--one">LAST ORDERED</div>
            <div className="InventoryList__Headers__labelTwo__container--two">LOCATION</div>
            <div className="InventoryList__Headers__labelTwo__container--three">QUANTITY</div>
          </div>

          <div className="InventoryList__Headers__labelThree">STATUS</div>
        </div>
        {inventoryItems.map(inventoryItems => (
          <InventoryCard
            deleteInventoryItem={this.props.deleteInventoryItem}
            key={inventoryItems.id}
            id={inventoryItems.id}
            description={inventoryItems.description}
            name={inventoryItems.name}
            lastOrdered={inventoryItems.lastOrdered}
            location={inventoryItems.location}
            quantity={inventoryItems.quantity}
            isInstock={inventoryItems.isInstock}
          />
        ))}
      </>
    );
  }
}
export default InventoryList;
