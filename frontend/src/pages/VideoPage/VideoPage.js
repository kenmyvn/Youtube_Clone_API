import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { KEY } from "../../localKey";
import axios from "axios";
import "./VideoPage.css";
import { DATAONE } from "../../localDataVideoOne";
import DisplayComments from "../../components/DisplayComment/DisplayComment";
import CreateComment from "../../components/CreateComment/CreateComment";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

const VideoPage = () => {
  const [videos, setVideos] = useState();
  const { id } = useParams();
  const auth = useContext(AuthContext);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchRelatedVideos();
    fetchComments();
  }, []);

  const fetchRelatedVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=${id}&key=${KEY}&part=snippet&type=video&maxResults=2`
      );
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchComments = async () => {
    console.log(auth);
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/comments/${id}/`
      );
      setComments(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const postComment = async (newComment) => {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/comments/`,
        newComment,
        config
      );
      setComments([...comments, response.data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="videosPage">
      <div className="videoInfo">
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
        ></iframe>
      </div>
      <div className="relatedvideos">
        {videos &&
          videos.map((video) => {
            return (
              <div className="vid" key={video.snippet.title}>
                <p>{video.snippet.title}</p>
                <img src={video.snippet.thumbnails.medium.url} />
              </div>
            );
          })}
      </div>
      <div className="background-color">
        <div className="border-box">
          <CreateComment addNewCommentProperty={postComment} videoId={id} />
        </div>
        <div className="border-box-2">
          <DisplayComments parentComments={comments} />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
