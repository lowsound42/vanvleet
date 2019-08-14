import React from 'react';
import InventoryHeader from './InventoryHeader.js';
import InventoryList from './InventoryList.js';

class Inventory extends React.Component {
  render(){
    return(
      <>
        <InventoryHeader />
        <InventoryList />
      </>
    )}
}

export default Inventory;
