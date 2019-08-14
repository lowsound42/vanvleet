import React from 'react';

class InventoryCard extends React.Component {
  render(){
    return(
      <>
      <div className="InventoryCard">
          <table>
            <td>Name</td>
            <td>Date</td>
            <td>Location</td>
            <td>Quantity</td>
            <td>Status</td>
          </table>
        </div>
      </>
    )}
}

export default InventoryCard;
