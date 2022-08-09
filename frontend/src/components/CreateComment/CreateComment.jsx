import React, { useState } from "react";

const CreateComment = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newComment = {
      name: name,
      comment: comment,
    };
    console.log(newComment);
    props.addNewCommentProperty(newComment);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          class="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Comment</label>
        <textarea
          class="form-control"
          rows="3"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        style={{ "margin-top": "1em", "align-self": "right" }}
      >
        Comment
      </button>
    </form>
  );
};

export default CreateComment;
