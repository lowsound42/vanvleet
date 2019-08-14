import React from 'react';
import InventoryHeader from './InventoryHeader.js';
import InventoryList from './InventoryList.js';
import DummyData from './DummyData.json';

class Inventory extends React.Component {
  
  
  testVar = "test var";
  render(){
    return(
      <>
        {console.log(DummyData)}
        <p>{this.testVar}</p>
        <InventoryHeader />
        <InventoryList test={this.testVar} />
      </>
    )}
}

export default Inventory;
