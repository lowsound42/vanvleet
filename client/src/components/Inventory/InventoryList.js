import React from 'react';
import InventoryCard from './InventoryCard.js';

class InventoryList extends React.Component {
  render(){
    return(
      <>
        <p>this is the inventory list</p>
        <p>hello {this.props.test}</p>
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
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
      </>
    )}
}
export default InventoryList;
