import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const Window = ({ show, person, onClose, item }) => {
  
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className={"close-btn-ctn"}>
        <h1 className="window-header" style={{ flex: "1 90%" }}>
          CANDIDATE DETAILS
        </h1>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
      <div>
        <h2>Candidate name</h2>
        <div className="candidate-details">
          <p>👨‍🏫{item.person}</p>
        </div>
        <h2>Role</h2>
        <div className="candidate-details">
          <p>🔧{item.content}</p>
        </div>
        <h2>Status</h2>
        <div className="candidate-details">
          <p>
            {item.icon}{"  "}
            {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default Window;
