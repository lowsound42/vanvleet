import React from 'react';

//this is the product factory that pumps out products based on data passed through props

class ProductSummary extends React.Component {

  state = {
    product: []
  }
  if(productId != undefined){
    let product = {};
  }
	render() {
    let {product} = this.state;
		return (
      <>
      <Navbar/>
      <div className='product'>
        <div className='product__details'>
          <h4 className='product__details--header'>ITEM DESCRIPTION</h4>
          <p className='product__details--info'>{this.props.product.description}</p>
          <h4 className='product__details--header'>ORDERED BY</h4>
          <p className='product__details--info'>{this.props.product.ordered}</p>
          <h4 className='product__details--header'>REFERENCE NUMBER</h4>
          <p className='product__details--info'>{this.props.product.reference}</p>
          <h4 className='product__details--header'>LAST ORDERED</h4>
          <p className='product__details--info'>{this.props.product.lastOrdered}</p>
          <h4 className='product__details--header'>LOCATION</h4>
          <p className='product__details--info'>{this.props.product.location}</p>
          <h4 className='product__details--header'>QUANTITY</h4>
          <p className='product__details--info'>{this.props.product.quantity}</p>
          <h4 className='product__details--header'>CATEGORIES</h4>
          <p className='product__details--info'>{this.props.product.categories}</p>
        </div>
        <button className='product__button'>EDIT</button>
      </div>
      </>
    );
	}
}

export default ProductSummary;