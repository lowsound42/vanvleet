import React from "react";
import axios from "axios";
import Locations from "../Locations/Locations.js";

class MainPage extends React.Component {
  state = {
    list: []
  };
componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios.get("http://localhost:8080/warehouses/").then(response => {
      console.log(response.data);
      this.setState({
        list: response.data
      });
    });
  };

  render() {
    console.log(this.state.list)
    return (
      <div>
        <div>
          <h1>Locations</h1>
          <input type="text" name="search" placeholder="Search" />
        </div>
        <Locations list={this.state.list} />
      </div>
    );
  }
}

export default MainPage;
