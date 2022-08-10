import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { KEY } from "../../localKey";
import axios from "axios";
import "./VideoPage.css";
import { DATAONE } from "../../localDataVideoOne";
import DisplayComments from "../../components/DisplayComment/DisplayComment";
import CreateComment from "../../components/CreateComment/CreateComment";

const VideoPage = () => {
  const [videos, setVideos] = useState(DATAONE.items);
  const { id } = useParams();

  const [comments, setComments] = useState([]);

  function addNewComment(comment) {
    let tempComments = [...comments, comment];

    setComments(tempComments);
  }

  useEffect(() => {
    // fetchVideos();
    fetchComments();
  }, []);

  const fetchVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=vaKVbKPQOqY&key=${KEY}&part=snippet&type=video&maxResults=5`
      );
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchComments = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/comments/${id}`
      );
      console.log(response);
      setComments(response.data);
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
          frameborder="0"
        ></iframe>
      </div>
      <div className="relatedvideos">
        {videos &&
          videos.map((video) => {
            if (video.snippet) {
              return (
                <div className="vid" key={video.snippet.title}>
                  <p>{video.snippet.title}</p>
                  <img src={video.snippet.thumbnails.medium.url} />
                </div>
              );
            }
          })}
      </div>
      <div className="background-color">
        <div className="border-box">
          <CreateComment addNewCommentProperty={addNewComment} />
        </div>
        <div className="border-box-2">
          <DisplayComments parentComments={comments} />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
