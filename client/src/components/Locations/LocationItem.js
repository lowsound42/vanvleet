import React from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

class LocationsId extends React.Component{
  render(){
    return(
      <>
        <NavBar />
      </>
    )
  }
}

class LocationItem extends React.Component{
  handleClick = () => {
    axios.get('http://localhost:8080/warehouses', {
      //name: document.getElementById('name_text').value;
      //address: document.ge
    })
  }
}