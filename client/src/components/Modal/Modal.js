import "./modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
  const handleBackdropClick = (e) => {
    e.target.classList.contains("modal-backdrop") && closeModal();
  };
  return (
    isOpen && (
      <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal modal-container">
          <button type="button" className="close-button" onClick={closeModal}>
            {" "}
            X{" "}
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
