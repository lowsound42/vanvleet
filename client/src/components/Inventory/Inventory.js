import React from 'react';
import InventoryHeader from './InventoryHeader.js';
import InventoryList from './InventoryList.js';
//import DummyData from './DummyData.json';
import axios from 'axios';
import DummyData from './DummyData.json';
import NavBar from '../NavBar/NavBar';

class Inventory extends React.Component {
  state = {
    inventoryItems : [],
  }
  componentDidMount() {
    axios.get('http://localhost:8080/inventory/')
    .then(response => {
      console.log(response);
      this.setState({
        inventoryItems : response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  };
  render(){
    return(
      <>
        <NavBar />
        <p>{this.testVar}</p>
        <InventoryHeader />
        <InventoryList inventoryItems={this.state.inventoryItems} />
      </>
    )}
}

export default Inventory;
