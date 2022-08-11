import Comment from "../Comment/Comment";

const DisplayComments = (props) => {
  return (
    <div>
      {props.parentComments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            name={comment.user.username}
            body={comment.text}
          />
        );
      })}
    </div>
  );
};

export default DisplayComments;
