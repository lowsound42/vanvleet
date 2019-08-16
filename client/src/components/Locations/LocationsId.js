import React from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import arrowback from './Icons/SVG/Icon-back-arrow.svg';
import {Link} from 'react-router-dom';
import './LocationsId.scss';

class LocationId extends React.Component{

  state= {
    items: {},
    address: {},
    contact: {}
  }

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
      <div className='location'>
        <div className='location__details'>
          <h1 className='location__details--header1'>
          <Link to="/warehouses"><img src={arrowback}/></Link> {this.state.items.name}</h1>
          <h4 className='location__details--header'>ADDRESS</h4>
          <p className='location__details--info'>{this.state.address.street}</p>
          <p className='location__details--info'>{this.state.address.suiteNum}</p>
          <p className='location__details--info'>{this.state.address.city},{this.state.address.province}</p>
          <p className='location__details--info'>{this.state.address.postal}  CA</p>
          <h4 className='location__details--header'>CONTACT</h4>
          <div>
            <p className='location__details--info'>{this.state.contact.name} </p>
            <p className='location__details--info'>{this.state.contact.title}</p>
          </div>
          <p className='location__details--info'>+ {this.state.contact.phone}</p> 
          <p className='location__details--info'> {this.state.contact.email}</p>
        </div>
    </div>
      </>
    )
  }
}

export default LocationId;