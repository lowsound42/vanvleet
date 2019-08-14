import React from 'react';

class InventoryCard extends React.Component {
  
  render(){
    return(
      <>
      <div className="InventoryCard">
          <table>
            <td>{this.props.name}</td>
            <td>{this.props.lastOrdered}</td>
            <td>{this.props.location}</td>
            <td>{this.props.quantity}</td>
            <td>{this.props.isInstock}</td>
          </table>
        </div>
      </>
    )}
}

export default InventoryCard;
