import React from 'react';
import InventoryCard from './InventoryCard.js';
import './Inventory.scss';

class InventoryList extends React.Component {
  render(){
    let inventoryItems = this.props.inventoryItems;
    return(
      <>
        <div className="InventoryList__Headers">
              <div>ITEM</div>
              <div>LAST ORDERED</div>
              <div>LOCATION</div>
              <div>QUANTITY</div>
              <div>STATUS</div>
        </div>
        {inventoryItems.map((inventoryItems) => 
          <InventoryCard key={inventoryItems.id}
          description={inventoryItems.description}
          name={inventoryItems.name}
            lastOrdered={inventoryItems.lastOrdered}
            location={inventoryItems.location}
            quantity={inventoryItems.quantity}
            isInstock={inventoryItems.isInstock} />  
        )}
        
      </>
    )}
}
export default InventoryList;
