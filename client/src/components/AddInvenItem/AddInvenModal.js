import React from "react"
import "./AddInvenModal.scss";
import InvenSwitch from "./InvenSwitch";
import axios from "axios";

class AddInvenModalForm extends React.Component {
    // state = {
    //     name : "",
    //     lastOrdered:"",
    //     location:"",
    //     quantity: "",
    //     description: ""
    // }

sendInvenToServer= event => {
    event.preventDefault();
    console.log(event.target.itemDescription.value);
    if (event.target.itemName.value !== "" && event.target.orderDate !== "" && event.target.cityName.value !== "" && event.target.itemQuantity.value !== "") {
    axios.post('http://localhost:8080/inventory', { 

        name : event.target.itemName.value,
        lastOrdered : event.target.orderDate.value,
        location: event.target.cityName.value,
        quantity: event.target.itemQuantity.value,
        description: event.target.itemDescription.value,
        // isInstock: event.target.itemInstock.value
    }).then(window.location.reload()
    ); } else {alert("please fill in the blank")}
}

    render () {
        return (
                <form className="add-inventory-item-form" name="newInventoryForm" onSubmit={this.sendInvenToServer}>
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
                    <input className="add-inventory-item-form__wrapper__input-box__input-text" type="text" name ="itemQuantity" placeholder="0" />
                </div>
                <div className="add-inventory-item-form__wrapper__input-box">
                    <div className="add-inventory-item-form__wrapper__input-box__text">STATUS</div>
                    <label className="add-inventory-item-form__wrapper__input-box__label">
                    <div className="add-inventory-item-form__wrapper__input-box__label__text">In Stock</div>
                   < InvenSwitch name="itemInstock"/>
                    </label>
                </div>
                <div className="add-inventory-item-form__wrapper__input-box">
                    <div className="add-inventory-item-form__wrapper__input-box__text">ITEM DESCRIPTION</div>
                    <textarea className="add-inventory-item-form__wrapper__input-box__textarea" name="itemDescription" placeholder="(Optional)"/>
                </div>
            </div>
            <div className = "add-inventory-item-form__button-wrapper">
            <button type="submit" className = "add-inventory-item-form__button-wrapper__save">SAVE</button>
            <button className = "add-inventory-item-form__button-wrapper__cancel">CANCEL</button>
            </div>
            </form>
        )
    }
}

export default AddInvenModalForm;