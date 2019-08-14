import React from 'react';
import {Link} from 'react-router-dom'; 

class InventoryHeader extends React.Component {
  render(){
    return(
      <>
        <div className="Inventory__Header">
          <div className="Inventory__Header__Title">
            <h1><Link to='/inventory'>Inventory</Link></h1>
          </div>
          <div className="Inventory__Header__SearchBar">
            <form>
              <input type="text" name="ItemSearch" id="ItemSearch" />
            </form>
          </div>
        </div>
      </>
    )}
}

export default InventoryHeader;
