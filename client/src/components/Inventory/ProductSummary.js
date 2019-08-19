import React from "react";
import Navbar from "../NavBar/NavBar";
import axios from "axios";
import BackArrow from "./Icons/SVG/Icon-back-arrow.svg";
import "./ProductSummary.scss";
import { Link } from "react-router-dom";
//this is the product factory that pumps out products based on data passed through props

class ProductSummary extends React.Component {
  state = {
    inventoryItem: {}
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/inventory/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          inventoryItem: response.data[0]
        });
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="product">
          <div className="product__details">
            <div className="product__details__container">
              <div className="product__details__container--img">
                <Link to="/inventory">
                  <img src={BackArrow} alt="back arrow" />
                </Link>
              </div>
              <div className="product__details__container--header">
                <h2>{this.state.inventoryItem.name}</h2>
              </div>
            </div>
            <div
              id="stock"
              className={
                this.state.inventoryItem.isInstock ? "instock" : "outOfStock"
              }
            >
              {this.state.inventoryItem.isInstock ? "In Stock" : "Out Of Stock"}
            </div>
            <div className="desktopContainer--align">
              <div className="desktopContainer--align__description">
                <div className="product__details__description">
                  <h4 className="product__details__description--header">
                    ITEM DESCRIPTION
                  </h4>
                  <p className="product__details__description--info">
                    {this.state.inventoryItem.description}
                  </p>
                </div>
              </div>
              <div className="align">
                <div className="product__details__ordered">
                  <h4 className="product__details__ordered--header">
                    ORDERED BY
                  </h4>
                  <p className="product__details__ordered--info">
                    {this.state.inventoryItem.lastOrdered}
                  </p>
                </div>
                <div className="product__details__reference">
                  <h4 className="product__details__reference--header">
                    REFERENCE NUMBER
                  </h4>
                  <p className="product__details__reference--info">
                    {this.state.inventoryItem.name}
                  </p>
                </div>
                <div className="product__details__last">
                  <h4 className="product__details__last--header">
                    LAST ORDERED
                  </h4>
                  <p className="product__details__last--info">
                    {this.state.inventoryItem.lastOrdered}
                  </p>
                </div>
                <div className="product__details__location">
                  <h4 className="product__details__location--header">
                    LOCATION
                  </h4>
                  <p className="product__details__location--info">
                    {this.state.inventoryItem.location}
                  </p>
                </div>
                <div className="product__details__quantity">
                  <h4 className="product__details__quantity--header">
                    QUANTITY
                  </h4>
                  <p className="product__details__quantity--info">
                    {this.state.inventoryItem.quantity}
                  </p>
                </div>
                <div className="product__details__categories">
                  <h4 className="product__details__categories--header">
                    CATEGORIES
                  </h4>
                  <p className="product__details__categories--info">
                    {this.state.inventoryItem.categories}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="product__button">EDIT</button>
        </div>
      </>
    );
  }
}

export default ProductSummary;
