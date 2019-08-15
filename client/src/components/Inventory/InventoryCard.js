import React from 'react';
import KebabIcon from '../../Assets/Icons/SVG/Icon-kebab-default.svg';

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
          <table>
            <td>{this.props.name}</td>
            <td>{this.props.lastOrdered}</td>
            <td>{this.props.location}</td>
            <td>{this.props.quantity}</td>
            <td>{this.props.isInstock}</td>
            <td>
              <img src={KebabIcon} onClick={this.OnKebabClick}/>
            </td>
          </table>
        </div>
      </>
    )}
}

export default InventoryCard;
