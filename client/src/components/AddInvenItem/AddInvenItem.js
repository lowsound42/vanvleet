import React from "react";
import Switch from "react-switch";
import Modal from 'react-modal';
import AddInvenModal from "./AddInvenModal"
import './AddInvenItem.scss';


Modal.setAppElement('#root')
class AddInvenItem extends React.Component {
state = { showModal: false};

handleOpenModal = () => {
    this.setState({ showModal: true});
}
handleCloseModal= () => {
    this.setState({ showModal: false});
}


    render() {
        return (
        <div>
            <button onClick={this.handleOpenModal}><img src="../../assets/Icons/SVG/Icon-add.svg"/></button>
            <Modal 
            className="content" 
            overlayClassName="overlay"
           
            isOpen={this.state.showModal}
            contentLabel="add new inventory modal"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={false}
            >

            <AddInvenModal />
            </Modal>
        </div>
        );
    }
}

export default AddInvenItem;