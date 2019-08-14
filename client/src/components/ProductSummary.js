import React from 'react';

//this is the product factory that pumps out products based on data passed through props

class ProductSummary extends React.Component {

  state={
    edit:''
  }

	render() {
		return (
      <>
      <Navbar/>
      <div className='flex'>
        <div>
          <h4>ITEM DESCRIPTION</h4>
          <p>{this.props.description}</p>
          <h4>ORDERED BY</h4>
          <p>{this.props.ordered}</p>
          <h4>REFERENCE NUMBER</h4>
          <p>{this.props.reference}</p>
          <h4>LAST ORDERED</h4>
          <p>{this.props.lastOrdered}</p>
          <h4>LOCATION</h4>
          <p>{this.props.location}</p>
          <h4>QUANTITY</h4>
          <p>{this.props.quantity}</p>
          <h4>CATEGORIES</h4>
          <p>{this.props.categories}</p>
        </div>
        <button>EDIT</button>
      </div>
      </>
    );
	}
}

export default ProductSummary;