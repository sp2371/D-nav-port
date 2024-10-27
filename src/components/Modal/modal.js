import React from 'react';
import './Modal.css';
import { redirectPage } from '../../pages/Projects/project';
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null; // Don't render if modal is not open

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ion-icon name="arrow-redo-outline" id="icon" onClick={redirectPage}></ion-icon>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                {title && <h2 className="modal-title">{title}</h2>}
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;