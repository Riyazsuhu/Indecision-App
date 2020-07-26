import React from 'react'
import Modal from 'react-modal'
const OptionModal=(props)=>(<Modal
    isOpen={!!props.selectedOption}
    contentLabel='Selected Option'
    ariaHideApp={false}
    closeTimeOutMS={200}
    className="modal"
    >
        <div>
            <h3 className="modal-title">Selected Option</h3>
            {!!props.selectedOption && <p className="modal-body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleSelectedOption}>Okay</button>
        </div>
    </Modal>
)
export default OptionModal