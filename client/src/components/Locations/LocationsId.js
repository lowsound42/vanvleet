import React from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import arrowback from './Icons/SVG/Icon-back-arrow.svg';
import {Link} from 'react-router-dom';
import './LocationsId.scss';
import InventoryKebabMenu from '../Inventory/InventoryKebabMenu';
class LocationId extends React.Component{

  state= {
    items: {},
    address: {},
    contact: {},
    filtered: [{}]
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
  }).then (
    axios.get(`http://localhost:8080/inventory/`)
    .then(response => {
      console.log(response.data);
      var filtered = response.data.filter(items => items.warehouseId == this.props.match.params.id);
      console.log(filtered);
      this.setState({
        filtered:filtered

      })
    } 
    )

  )
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
          <div className='location__details--rows'>
          <div className='location__details--columns'>
            <h4 className='location__details--header'>ADDRESS</h4>
            <div className='location__details--div'>
              <p className='location__details--info'>{this.state.address.street}</p>
              <p className='location__details--info'>{this.state.address.suiteNum}</p>
            </div>
          <div className='location__details--div'>
            <p className='location__details--info'>{this.state.address.city},{this.state.address.province}</p>
            <p className='location__details--info'>{this.state.address.postal}  CA</p>
          </div>
          </div>
          <div className='location__details--columns1'>
          <h4 className='location__details--header'>CONTACT</h4>
          <div className='location__details--div'>
            <p className='location__details--info'>{this.state.contact.name} </p>
            <p className='location__details--info'>{this.state.contact.title}</p>
          </div>
          <div className='location__details--div'>
            <p className='location__details--info'>+ {this.state.contact.phone}</p> 
            <p className='location__details--info'> {this.state.contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className='inventory'>
    { this.state.filtered.map(item => {
      
      return (<div key={item.id}>
      <div className="kebab"><InventoryKebabMenu /></div>
      <h4 className='inventory__header'>ITEM</h4>
      <div className='inventory__div'>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      </div>
      <div>
      <h4 className='inventory__header'>LAST ORDERED</h4>
      <p className='inventory__container'>{item.lastOrdered}</p>
      </div>
      <div>
      <h4 className='inventory__header'>LOCATION</h4>
      <p className='inventory__container'>{item.location}</p>
      </div>
      <div>
      <h4 className='inventory__header'>QUANTITY</h4>
      <p className='inventory__container'>{item.quantity}</p>
      </div>
      <div>
      <h4 className='inventory__header'>STATUS</h4>
      <p className='inventory__container'>{item.isInstock ? 'In Stock' : 'Out of Stock'}</p>
      </div>
    </div>
      )}
    )} 
  </div>
  <div className='inventory1'>
    
      <div className='inventory1__row1'>
      <h4 className='inventory1__row1__header1'>ITEM</h4>
      <h4 className='inventory1__row1__header2'>LAST ORDERED</h4>
      <h4 className='inventory1__row1__header3'>LOCATION</h4>
      <h4 className='inventory1__row1__header4'>QUANTITY</h4>
      <h4 className='inventory1__row1__header5'>STATUS</h4>
      </div>
      { this.state.filtered.map(item => {
      return (<div key={item.id}>
      <div className='inventory1__row1__div'>
      <div className='inventory1__row1__div2'>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      </div>
      <div className='inventory1__row1__div'><p className='inventory1__container'>{item.lastOrdered}</p></div>
      <div className='inventory1__row1__div'><p className='inventory1__container'>{item.location}</p></div>
      <div className='inventory1__row1__div'><p className='inventory1__container'>{item.quantity}</p></div>
      <div className='inventory1__row1__div'><p className='inventory1__container'>{item.isInstock ? 'In Stock' : 'Out of Stock'}</p></div>
     <div className='inventory1__row1__div4'> <InventoryKebabMenu /> </div>
      </div>

      </div>
 
      )}
    )} 
  </div>
</>
    )
  }
}

export default LocationId;