import React from 'react';
import InventoryHeader from './InventoryHeader.js';
import InventoryList from './InventoryList.js';
//import DummyData from './DummyData.json';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import AddInvenItem from '../AddInvenItem/AddInvenItem';

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
  deleteInventoryItem = (id) => {
    axios.delete(`http://localhost:8080/inventory/${id}`)
    .then(response => {
      this.setState({
        inventoryItems : response.data
      })
    })
    console.log(this.state.inventoryItems);
    console.log("Hellos this is delete function!");
  }

  render(){
    return(
      <>
        <NavBar />
        <InventoryHeader />
        <InventoryList 
          inventoryItems={this.state.inventoryItems}
          deleteInventoryItem={this.deleteInventoryItem} />
        <AddInvenItem />
      </>
    )}
}

export default Inventory;
