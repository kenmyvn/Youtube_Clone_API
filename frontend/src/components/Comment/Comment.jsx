import "./Comment.css";
// import CustomButton from "./CustomButton";

const Comment = (props) => {
  return (
    <div className="comment">
      <div className="name">
        <p>{props.name}</p>
      </div>
      <div className="body">
        <p>{props.body}</p>
        {/* <div className="buttons">
          <CustomButton type="up" />
          <CustomButton type="down" />
        </div> */}
      </div>
    </div>
  );
};

export default Comment;
