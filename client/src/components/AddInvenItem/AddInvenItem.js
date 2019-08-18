import React from "react";
import Modal from 'react-modal';
import AddInvenModal from "./AddInvenModal"
import './AddInvenItem.scss';
import LogoImg from "../../Assets/Icons/SVG/Icon-add.svg";


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
            <button className="button" onClick={this.handleOpenModal}><img className="button__logo-img" src={LogoImg}/></button>
            <Modal 
            className="content" 
            overlayClassName="overlay"
            isOpen={this.state.showModal}
            contentLabel="add new inventory modal"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
            >
            <AddInvenModal />
            </Modal>
        </div>
        );
    }
}

export default AddInvenItem;