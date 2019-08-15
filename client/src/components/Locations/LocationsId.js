import React from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

class LocationId extends React.Component{

  state= {
    item: {}
  }

  componentDidMount(){

 
    // const { match } = this.props;
    // const itemId = match.params.id;
    console.log(this.props.match.params)

    // console.log(this.props.match.params);
    // console.log(itemId);

    // if(itemId !== undefined){
    //     let item = {};

    axios.get(`http://localhost:8080/warehouse/W0`)
      .then(response => {
        console.log(response.data)
        var product = response.data[0];
        this.setState({
          item: product
        });
      })
    // }
  }

  // componentDidMount(){}

  render(){
    // const {item} = this.props
    // console.log("this: "+item);
    return(
      <>
      <NavBar />
      <div>
      <div className='item'>
        <div className='item__details'>
          <h4 className='item__details--header'>{this.state.item.name}</h4>
          <h4 className='item__details--header'>ADDRESS</h4>
          {/* <p className='item__details--info'>{this.state.item.address.street}</p> */}
          <h4 className='item__details--header'>REFERENCE NUMBER</h4>
          {/* <p className='item__details--info'>{this.state.product.reference}</p>
          <h4 className='item__details--header'>LAST ORDERED</h4>
          <p className='item__details--info'>{this.props.product.lastOrdered}</p>
          <h4 className='item__details--header'>LOCATION</h4>
          <p className='item__details--info'>{this.props.product.location}</p>
          <h4 className='item__details--header'>QUANTITY</h4>
          <p className='item__details--info'>{this.props.product.quantity}</p>
          <h4 className='item__details--header'>CATEGORIES</h4>
          <p className='item__details--info'>{this.props.product.categories}</p> */}
        </div>
        <button className='item__button'>EDIT</button>
      </div>
    </div>
      </>
    )
  }
}

export default LocationId;