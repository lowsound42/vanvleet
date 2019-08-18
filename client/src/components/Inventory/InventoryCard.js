import React from 'react';
import KebabIcon from '../../Assets/Icons/SVG/Icon-kebab-default.svg';
import './Inventory.scss';
import InventoryKebabMenu from './InventoryKebabMenu';

class InventoryCard extends React.Component {
  state = {
    Kebab : false
  }
  OnKebabClick = () => {
    if (this.state.Kebab === false) {
      this.setState({
        Kebab : true
      })
    } else {
      this.setState({
        Kebab : false
      })
    }
    console.log(this.state.Kebab);
  }
  render(){
    return(
      <>
      <div className="InventoryCard">
          <div className="InventoryCard__container">
            
            <label className="InventoryCard__container__labelOne">ITEM</label>
            <div className="InventoryCard__container--one">
            <h2>{this.props.name}</h2>
              <p>{this.props.description}</p>
              </div>
            <label className="InventoryCard__container__labelTwo">LAST ORDERED</label>
            <div className="InventoryCard__container--two">{this.props.lastOrdered}</div>
            <label className="InventoryCard__container__labelThree">LOCATION</label>
            <div className="InventoryCard__container--three">{this.props.location}</div>
            <label className="InventoryCard__container__labelFour">QUANTITY</label>
            <div className="InventoryCard__container--four">{this.props.quantity}</div>
            <label className="InventoryCard__container__labelFive">STATUS</label>
            <div className="InventoryCard__container--five">{this.props.isInstock ? 'In Stock' : 'Out of Stock'}</div>
            <div className="InventoryCard__container__button">
              <img src={KebabIcon} onClick={this.OnKebabClick}/>
            </div>
          </div>
              <InventoryKebabMenu Kebab={this.state.Kebab}  />
            </td>
          </table>
        </div>
      </>
    )}
}

export default InventoryCard;
