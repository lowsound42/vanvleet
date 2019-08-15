import React from 'react';
import MainPage from '../MainPage/MainPage';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

class LocationsId extends React.Component{
  state = {
    items: [],
  }
  
  componentDidUpdate(){
    const { match } = this.props;
    const itemId = match.params.id;
  
    if(itemId != undefined){
        let item = {};
  
    axios.get('http://localhost:8080/warehouse/'+itemId)
      .then(response => {
        item = response.data;
        this.setState({

        });
      })
    }
  }
  
  componentDidMount(){
    
  
    let items = [];
    let item = {};
  
    axios.get('http://localhost:8080/warehouse')
    .then(response => {
      items = response.data;
  
      axios.get('http://localhost:8080/warehouse/'+item["id"])
      .then(response => {
        item = response.data;
  
        this.setState({
            items: items,
        });
      })
    })
  
  }
  
  render(){

  const { items} = this.state  
    return(
      <>
        <NavBar />
      </>
    )
  }
}

export default LocationsId;

