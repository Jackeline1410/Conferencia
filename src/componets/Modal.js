import React from 'react';
import ReactDOM from 'react-dom';

import './styles/Modal.css'
function Modal (props) {
    if (!props.isOpen){
        return null;
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <button onClick={props.onClose} className="Modal__close-button">x</button>
                {/* props.children muestra lo que este dentro de la etiquetas del comonente cuando este se l
                llama desde otro */}
                {props.children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;