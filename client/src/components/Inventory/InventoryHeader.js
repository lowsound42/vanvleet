import React from 'react';

class InventoryHeader extends React.Component {
  render(){
    return(
      <>
        <div className="Inventory__Header">
          <div className="Inventory__Header__Title">
            <h1>Inventory</h1>
          </div>
          <div className="Inventory__Header__SearchBar">
            <form>
              <input type="text" name="ItemSearch" id="ItemSearch" placeholder="search here"/>
            </form>
          </div>
        </div>
      </>
    )}
}

export default InventoryHeader;
