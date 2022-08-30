import { useState } from "react";
import "./commentBubble.css";
import YahtzeeButton from "../YahtzeeButton/YahtzeeButton";
import { useUser } from "../../context/UserContext";

const initialState = {
  name: "",
  subject: "",
  comment: "",
};

const CommentBubble = () => {
  const user = useUser();

  const [formData, setFormData] = useState({ ...initialState });

  // const [name, setName] = useState("");
  // const [subject, setSubject] = useState("");
  // const [comment, setComment] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleCommentBubbleClick = () => {
    setIsOpen(() => !isOpen);
  };

  const handleCommentBubbleClose = (e) => {
    // console.log("e.target", e.target);
    if (e.target.tagName === "DIALOG") setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (!res.ok) return console.error("ERROR");
      setFormData(initialState);
      setIsOpen(false);
    });
  };

  return (
    <>
      <dialog open={isOpen} onClick={handleCommentBubbleClose}>
        <div className="comment-form-container">
          <form className="comment-form" onSubmit={handleSubmit}>
            <label htmlFor="nameInput">
              Name:
              <input
                type="text"
                id="nameInput"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </label>
            <label htmlFor="subjectInput">
              Subject:
              <input
                type="text"
                id="subjectInput"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </label>
            <label htmlFor="commentTextArea">
              Leave a comment!
              <textarea
                id="commentTextArea"
                cols="30"
                rows="5"
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                required
              />
            </label>
            <div className="form-buttons">
              <YahtzeeButton type="submit">Submit</YahtzeeButton>
            </div>
          </form>
        </div>
      </dialog>
      <span
        className="material-symbols-outlined comment-bubble-icon"
        onClick={handleCommentBubbleClick}
      >
        comment
      </span>
    </>
  );
};

export default CommentBubble;
