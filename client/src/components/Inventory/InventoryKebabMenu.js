import React from 'react';
import KebabIcon from '../../Assets/Icons/SVG/Icon-kebab-default.svg';
import './Inventory.scss';
import './TestStyling.scss';
class InventoryKebabMenu extends React.Component {
  state = {
    isKebabOn : false
  }
  ShowKebabMenu = () => {
    this.setState({ isKebabOn : true }, () => {
      document.addEventListener('click', this.HideKebabMenu);
      console.log("Hello!");
    });
  }
  HideKebabMenu = () => {
    this.setState({ isKebabOn : false }, () => {
      document.removeEventListener('click',this.HideKebabMenu);
      console.log("Mello!");
    });
  } 
  render(){
    return(
      <>
        <div className="IventoryKebabMenu">
          <div className="IventoryKebabMenu__Icon"
            onClick={this.ShowKebabMenu}>
            <img src={KebabIcon} alt="Item Menu" />
          </div>
          <div className={ this.state.isKebabOn ? "InventoryKebabMenu__On" : "InventoryKebabMenu__Off"}> 
            <p>Remove</p>
          </div>
        </div>
      </>
    )}
}

export default InventoryKebabMenu;
