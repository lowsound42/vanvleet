import React from "react";
import axios from "axios";
import Locations from "../Locations/Locations.js";

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
    console.log(this.state.warehouseList)

    return (
      <div>
        <div>
          <h1>Locations</h1>
          <input type="text" name="search" placeholder="Search" />
        </div>
        <Locations list={this.state.warehouseList} />
      </div>
    );
  }
}

export default MainPage;
