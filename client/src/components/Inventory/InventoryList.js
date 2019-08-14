import React from 'react';
import InventoryCard from './InventoryCard.js';

class InventoryList extends React.Component {
  render(){
    return(
      <>
        <p>this is the inventory list</p>
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
      </>
    )}
}
export default InventoryList;
