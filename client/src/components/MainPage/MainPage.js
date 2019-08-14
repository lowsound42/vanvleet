import React from "react";
import axios from "axios";
import Locations from "../Locations/Locations.js";
import './MainPage.scss';

class MainPage extends React.Component {
  state = {
    warehouseList: []
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios.get("http://localhost:8080/warehouse/").then(response => {
      console.log(response.data);
      this.setState({
        warehouseList: response.data
      });
    });
  };

  render() {
    console.log(this.state.warehouseList);

    return (
      <div className="mainPage">
        <div className="mainPage__header">
          <h1>Locations</h1>
          <input type="text" name="search" placeholder="Search" />
        </div>
        <div className="mainPage__labels">
          <label htmlFor="partOne">WAREHOUSE</label>
          <label htmlFor="partTwo">CONTACT</label>
          <label htmlFor="partThree">CONTACT INFORMATION</label>
          <label htmlFor="partFour">CATEGORIES</label>
        </div>
        <Locations list={this.state.warehouseList} />
      </div>
    );
  }
}

export default MainPage;
