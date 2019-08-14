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
            <form className="add-inventory-item-form">
            <div className="add-inventory-item-form__title">Create New</div>
            <div className="add-inventory-item-form__wrapper">
                <div className="add-inventory-item-form__wrapper__input-box">
                    <div className="add-inventory-item-form__wrapper__input-box__text">PRODUCT</div>
                    <input className="add-inventory-item-form__wrapper__input-box__input-text" type="text" placeholder="Item Name" />
                </div>
                <div className="add-inventory-item-form__wrapper__input-box">
                    <div className="add-inventory-item-form__wrapper__input-box__text">LAST ORDERED</div>
                    <input className="add-inventory-item-form__wrapper__input-box__input-text" type="text" placeholder="yyyy-mm-dd" />
                </div>
                <div className="add-inventory-item-form__wrapper__input-box">
                    <div className="add-inventory-item-form__wrapper__input-box__text">CITY</div>
                    <input className="add-inventory-item-form__wrapper__input-box__input-text" type="text" placeholder="City" />
                </div>
                <div className="add-inventory-item-form__wrapper__input-box">
                    <div className="add-inventory-item-form__wrapper__input-box__text">COUNTRY</div>
                    <select className="add-inventory-item-form__wrapper__input-box__input-text--select">
                    <option value="canada">Canada</option>
                    <option value="korea">Korea</option>
                    </select>
                </div>
                <div className="add-inventory-item-form__wrapper__input-box">
                    <div className="add-inventory-item-form__wrapper__input-box__text">QUANTITY</div>
                    <input className="add-inventory-item-form__wrapper__input-box__input-text" type="text" placeholder="0" />
                </div>
                <div className="add-inventory-item-form__wrapper__input-box">
                    <div className="add-inventory-item-form__wrapper__input-box__text">STATUS</div>
                    <label className="add-inventory-item-form__wrapper__input-box__label">
                    <div className="add-inventory-item-form__wrapper__input-box__label__text">In Stock</div>
                    <Switch onChange={this.handle} checked={this.state.checked}/>
                    </label>
                </div>
                <div className="add-inventory-item-form__wrapper__input-box">
                    <div className="add-inventory-item-form__wrapper__input-box__text">ITEM DESCRIPTION</div>
                    <textarea className="add-inventory-item-form__wrapper__input-box__textarea" placeholder="(Optional)"/>
                </div>
            </div>
            <div className = "add-inventory-item-form__button-wrapper">
            <button className = "add-inventory-item-form__button-wrapper__save">SAVE</button>
            <button className = "add-inventory-item-form__button-wrapper__cancel">CANCEL</button>
            </div>
            </form>
        );
    }
}

export default AddInvenItem;