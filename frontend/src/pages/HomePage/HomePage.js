import React, { useState, useEffect } from "react";
import { KEY } from "../../localKey";
import axios from "axios";
import { DATA } from "../../localData";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [videos, setVideos] = useState(DATA.items);

  useEffect(() => {
    // fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=monstax&key=${KEY}&part=snippet&type=video&maxResults=5`
      );
      setVideos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="videoscontainer">
      {videos &&
        videos.map((video) => {
          return (
            <div className="vid" key={video.snippet.title}>
              <p>{video.snippet.title}</p>
              <Link to={`/video/${video.id.videoId}`}>
                <img src={video.snippet.thumbnails.medium.url} />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
