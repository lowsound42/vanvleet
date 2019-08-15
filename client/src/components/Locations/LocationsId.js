import React from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

class LocationId extends React.Component{

  state= {
    items: {},
    address: {},
    contact: {}
  }

// getData = () => {
//   axios.get(`http://localhost:8080/warehouses/`)
//   .then(response => {
//     console.log(response.data)
//     var product = response.data;
//     this.setState({
//       items: product
//     });
//   })
// }
  componentDidMount(){
  axios.get(`http://localhost:8080/warehouse/${this.props.match.params.id}`)
  .then(response => {
    console.log(this.props.match.params)
    console.log(response.data[0])
    var product = response.data[0];
    console.log(product.address.street)
    this.setState({
      items: product,
      address: product.address,
      contact: product.contact
    });
  })
 } 


  render(){
    console.log(this.state)
    return(
      <>
      <NavBar />
      <div>
      <div className='item'>
        <div className='item__details'>
          <h4 className='item__details--header'>{this.state.items.name}</h4>
          <h4 className='item__details--header'>ADDRESS</h4>
          <p className='item__details--info'>{this.state.address.street} {this.state.address.suiteNum}</p>
          <p>{this.state.address.city},{this.state.address.province}</p>
          <p>{this.state.address.postal}  CA</p>
          <h4 className='item__details--header'>CONTACT</h4>
          <p className='item__details--info'>{this.state.contact.name}  {this.state.contact.title}</p>
          <p>{this.state.contact.phone}  {this.state.contact.email}</p>
        </div>
        <button className='item__button'>EDIT</button>
      </div>
    </div>
      </>
    )
  }
}

export default LocationId;