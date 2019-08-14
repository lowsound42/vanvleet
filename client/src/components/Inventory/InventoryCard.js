import React from 'react';

class InventoryCard extends React.Component {
  render(){
    return(
      <>
        <p>Inventory Card</p>
        <table>
          <td>Name</td>
          <td>Date</td>
          <td>Location</td>
          <td>Quantity</td>
          <td>Status</td>
        </table>
      </>
    )}
}

export default InventoryCard;
