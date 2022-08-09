import Comment from "../Comment/Comment";

const DisplayComments = (props) => {
  return (
    <table>
      <tbody>
        {props.parentComments.map((comment) => {
          return <Comment name={comment.name} body={comment.comment} />;
        })}
      </tbody>
    </table>
  );
};

export default DisplayComments;
