import { useState } from "react";
import "./commentBubble.css";
import YahtzeeButton from "../YahtzeeButton/YahtzeeButton";
import { useUser } from "../../context/UserContext";
import { useFormik } from "formik";
import Form from "../Form/Form";
import TextField from "../TextField/TextField";

const initialValues = {
  name: "",
  subject: "",
  comment: "",
};

const CommentBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCommentBubbleOpen = () => setIsOpen(() => !isOpen);

  const handleCommentBubbleClose = (e) => {
    if (e.target.id === "dialogBackground") setIsOpen(false);
  };

  const onSubmit = (values) => {
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => {
      if (!res.ok) return console.error("ERROR");
      formik.resetForm();
      setIsOpen(false);
    });
  };

  const formik = useFormik({ initialValues, onSubmit });

  return (
    <>
      <dialog
        id="dialogBackground"
        open={isOpen}
        onClick={handleCommentBubbleClose}
      >
        <div className="comment-form-container">
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

            {/* <label htmlFor="nameInput">
            Name:
            <input
              type="text"
              id="nameInput"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </label>
          <label htmlFor="subjectInput">
            Subject:
            <input
              type="text"
              id="subjectInput"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
            />
          </label>
          <label htmlFor="commentTextArea">
            Leave a comment!
            <textarea
              id="commentTextArea"
              name="comment"
              cols="30"
              rows="5"
              value={formik.values.comment}
              onChange={formik.handleChange}
              required
            />
          </label> */}
            <div className="form-buttons">
              <YahtzeeButton type="submit">Submit</YahtzeeButton>
            </div>
          </Form>
        </div>
      </dialog>
      <span
        className="material-symbols-outlined comment-bubble-icon"
        onClick={handleCommentBubbleOpen}
      >
        comment
      </span>
    </>
  );
};

export default CommentBubble;
