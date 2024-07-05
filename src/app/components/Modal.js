// Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" onClick={hide} />
          <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
              <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-content">{children}</div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
