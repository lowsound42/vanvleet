import React from "react";
import axios from "axios";
import Locations from "../Locations/Locations.js";
import NavBar from "../NavBar/NavBar";
import "./MainPage.scss";

class MainPage extends React.Componen t {
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


    return (
      <>
      <NavBar/>
      <div className="mainPage">
        <div className="mainPage__header">
          <h1>Locations</h1>
          <input type="text" name="search" placeholder="Search" />
        </div>
        <div className="mainPage__labels">
          <div className="mainPage__labels--one">
            <label htmlFor="partOne">WAREHOUSE</label>
          </div>
          <div className="mainPage__labels--two">
            <label htmlFor="partTwo">CONTACT</label>
          </div>
          <div className="mainPage__labels--three">
            <label htmlFor="partThree">CONTACT INFORMATION</label>
          </div>
          <div className="mainPage__labels--four">
            <label htmlFor="partFour">CATEGORIES</label>
          </div>
        </div>
        <Locations list={this.state.warehouseList} />
      </div>
      </>
    );
  }
}

export default MainPage;
