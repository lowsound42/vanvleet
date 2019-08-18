import React from "react"
import Switch from "react-switch";
import "./AddInvenModal.scss";

class Modal extends React.Component {
    state = { checked : false }

    handleChange = (checked) => {
        this.setState({ checked });
    }
    render () {
        return (
                <form className="add-inventory-item-form" name="newInventoryForm" onSubmit="" method="post">
            <div className="add-inventory-item-form__title">Create New</div>
            <div className="add-inventory-item-form__wrapper">
                <div className="add-inventory-item-form__wrapper__input-box">
                    <div className="add-inventory-item-form__wrapper__input-box__text">PRODUCT</div>
                    <input className="add-inventory-item-form__wrapper__input-box__input-text" type="text" name="itemName" placeholder="Item Name" />
                </div>
                <div className="add-inventory-item-form__wrapper__input-box">
                    <div className="add-inventory-item-form__wrapper__input-box__text">LAST ORDERED</div>
                    <input className="add-inventory-item-form__wrapper__input-box__input-text" type="text" name="orderDate" placeholder="yyyy-mm-dd" />
                </div>
                <div className="add-inventory-item-form__wrapper__input-box">
                    <div className="add-inventory-item-form__wrapper__input-box__text">CITY</div>
                    <input className="add-inventory-item-form__wrapper__input-box__input-text" type="text" name="cityName" placeholder="City" />
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
                    <Switch checkedIcon={false} uncheckedIcon={false} onChange={this.handleChange} checked={this.state.checked}/>
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
        )
    }
}

export default Modal;