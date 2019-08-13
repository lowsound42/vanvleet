import React from 'react';
import InventoryCard from './InventoryCard.js';
import InventoryHeader from './InventoryHeader.js';

class Inventory extends React.Component {
  render(){
    return(
      <>
        <InventoryHeader />
        <InventoryCard />
      </>
    )}
}

export default Inventory;
