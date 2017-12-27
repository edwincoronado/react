import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption} //'!!' will force "true" booleans. Converts "undefined" to false
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        ariaHideApp={false}
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>
            Close
        </button>
    </Modal>
);

export default OptionModal;