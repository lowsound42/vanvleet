import React from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

class LocationId extends React.Component{

  state= {
    item: {}
    
  }
 
getDataById = () => {
  axios.get(`http://localhost:8080/warehouses/${this.props.match.params.id}`)
  .then(response => {
    console.log(response.data)
    var product = response.data;
    this.setState({
      item: product
    });
  })
}
  componentDidMount(){
 this.getDataById();}
 
    // const { match } = this.props;
    // const itemId = match.params.id;
    //console.log(this.props.match.params)

    // console.log(this.props.match.params);
    // console.log(itemId);

    // if(itemId !== undefined){
    //     let item = {};

   
    // }
  //}

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
          <p className='item__details--info'>{this.state.item.address}</p>
          <h4 className='item__details--header'>CONTACT</h4>
          <p className='item__details--info'>{this.state.item.contact}</p>
        </div>
        <button className='item__button'>EDIT</button>
      </div>
    </div>
      </>
    )
  }
}

export default LocationId;