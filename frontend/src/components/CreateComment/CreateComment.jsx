import React, { useState } from "react";

const CreateComment = (props) => {
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newComment = {
      text: comment,
      likes: 0,
      dislikes: 0,
      video_id: props.videoId,
    };
    console.log(newComment);
    props.addNewCommentProperty(newComment);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Comment</label>
        <textarea
          className="form-control"
          rows="3"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: "1em", alignSelf: "right" }}
      >
        Comment
      </button>
    </form>
  );
};

export default CreateComment;
