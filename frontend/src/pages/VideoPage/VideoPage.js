import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { KEY } from "../../localKey";
import axios from "axios";
import "./VideoPage.css";
import { DATAONE } from "../../localDataVideoOne";

const VideoPage = () => {
  const [videos, setVideos] = useState(DATAONE.items);
  const { id } = useParams();

  useEffect(() => {
    // fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=vaKVbKPQOqY&key=${KEY}&part=snippet&type=video&maxResults=5`
      );
      setVideos(response.data);
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
    </div>
  );
};

export default VideoPage;
