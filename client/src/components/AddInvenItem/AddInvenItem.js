import React from "react";
import "./AddInvenItem.scss";
import Switch from "react-switch";
class AddInvenItem extends React.Component {
state = { checked: false };
 
handleChange(checked) {
    this.setState({ checked });
}
    render() {
        return (
            <>
            <div className="title">Create New</div>
            <div className="input-boxes">
                <div>
                    <div>PRODUCT</div>
                    <input type="text" placeholder="Item Name" />
                </div>
                <div>
                    <div>LAST ORDERED</div>
                    <input type="text" placeholder="yyyy-mm-dd" />
                </div>
                <div>
                    <div>CITY</div>
                    <input type="text" placeholder="City" />
                </div>
                <div>
                    <div>COUNTRY</div>
                    <input type="text" placeholder="Canada" />
                </div>
                <div>
                    <div>QUANTITY</div>
                    <input type="text" placeholder="0" />
                </div>
                <div>
                    <div>STATUS</div>
                    <label>
                    <div>In Stock</div>
                    <Switch onChange={this.handle} checked={this.state.checked}/>
                    </label>
                </div>
            </div>
            </>
        );
    }
}

export default AddInvenItem;