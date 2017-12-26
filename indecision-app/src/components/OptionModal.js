import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption} //'!!' will force "true" booleans. Converts "undefined" to false
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>
            Close
        </button>
    </Modal>
);

export default OptionModal;