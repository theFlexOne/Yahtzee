import Modal from "../Modal/Modal";
import TextField from "../TextField/TextField";
import YahtzeeButton from "../YahtzeeButton/YahtzeeButton";
import "./commentModal.css";
import Form from "../Form/Form";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  subject: "",
  comment: "",
};

const ModalButton = ({ isOpen, toggleModal }) => {
  return (
    <button className="modal-button" type="button" onClick={toggleModal}>
      <span className="material-symbols-outlined">
        {isOpen ? "remove" : "comment"}
      </span>
    </button>
  );
};

const onSubmit = (closeModal) => (values) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  };
  fetch("/comments", options).then((res) => {
    res.ok && closeModal();
  });
};

const CommentModal = ({ toggleModal, isOpen, closeModal, ...otherProps }) => {
  const formik = useFormik({ initialValues, onSubmit: onSubmit(closeModal) });
  return (
    <>
      <Modal isOpen={isOpen} {...otherProps}>
        {" "}
        <Form onSubmit={formik.handleSubmit}>
          <TextField
            name="name"
            label="Name:"
            placeholder="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <TextField
            name="subject"
            label="Subject:"
            placeholder="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
          />
          <TextField
            name="comment"
            label="Leave a comment:"
            placeholder="comment here..."
            type="textarea"
            value={formik.values.comment}
            onChange={formik.handleChange}
          />

          <div className="form-buttons">
            <YahtzeeButton type="submit">Submit</YahtzeeButton>
          </div>
        </Form>
      </Modal>
      <ModalButton isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
};

export default CommentModal;
