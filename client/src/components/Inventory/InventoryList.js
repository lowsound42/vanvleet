import React from 'react';
import InventoryCard from './InventoryCard.js';

class InventoryList extends React.Component {
  render(){
    let inventoryItems = this.props.inventoryItems;
    return(
      <>
        <p>this is the inventory list</p>
        <div className="InventoryList__Headers">
          <table>
            <tr>
              <td>ITEM</td>
              <td>LAST ORDERED</td>
              <td>LOCATION</td>
              <td>QUANTITY</td>
              <td>STATUS</td>
            </tr>
          </table>
        </div>
        {inventoryItems.map((inventoryItems) => 
          <InventoryCard name={inventoryItems.name}
            lastOrdered={inventoryItems.lastOrdered}
            location={inventoryItems.location}
            quantity={inventoryItems.quantity}
            isInstock={inventoryItems.isInstock} />  
        )}
        
      </>
    )}
}
export default InventoryList;
