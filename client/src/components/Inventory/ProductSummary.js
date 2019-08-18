import React from 'react';
import Navbar from '../NavBar/NavBar'
import axios from 'axios';
//this is the product factory that pumps out products based on data passed through props

class ProductSummary extends React.Component {

  state = {
    inventoryItem : {}
  }
  
  componentDidMount() {
    axios.get(`http://localhost:8080/inventory/${this.props.match.params.id}`)
    .then(response => {
      this.setState({
        inventoryItem : response.data[0]
      })
    })
  }

	render() {
    return (
      <>
      <Navbar/>
      <div className='product'>
        <div className='product__details'>
          <h4 className='product__details--header'>ITEM DESCRIPTION</h4>
          <p className='product__details--info'>{this.state.inventoryItem.description}</p>
          <h4 className='product__details--header'>ORDERED BY</h4>
          <p className='product__details--info'>{this.state.inventoryItem.lastOrdered}</p>
          <h4 className='product__details--header'>REFERENCE NUMBER</h4>
          <p className='product__details--info'>{this.state.inventoryItem.name}</p>
          <h4 className='product__details--header'>LAST ORDERED</h4>
          <p className='product__details--info'>{this.state.inventoryItem.lastOrdered}</p>
          <h4 className='product__details--header'>LOCATION</h4>
          <p className='product__details--info'>{this.state.inventoryItem.location}</p>
          <h4 className='product__details--header'>QUANTITY</h4>
          <p className='product__details--info'>{this.state.inventoryItem.quantity}</p>
          <h4 className='product__details--header'>CATEGORIES</h4>
          <p className='product__details--info'>{this.state.inventoryItem.categories}</p>
        </div>
        <button className='product__button'>EDIT</button>
      </div>
      </>
    );
	}
}

export default ProductSummary;