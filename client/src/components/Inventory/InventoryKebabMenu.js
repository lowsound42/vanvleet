import React from 'react';

class InventoryKebabMenu extends React.Component {
  KebabMenu = () => {
    if (this.props.Kebab === false) {
      //display none
      console.log("hide kebab");
    } else {
      //display on
      console.log("show kebab");
    }
  }
  render(){
    return(
      <>
        {this.KebabMenu}
      </>
    )}
}

export default InventoryKebabMenu;
