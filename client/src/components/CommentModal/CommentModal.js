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

const CommentModal = (props) => {
  const formik = useFormik({ initialValues });
  return (
    <Modal {...props}>
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
  );
};

export default CommentModal;
