import React, { useState, useEffect } from "react";
import {KEY} from "../../localKey";
import axios from "axios";
import { DATA } from "../../localData";

const HomePage = () => {
  const [videos, setVideos] = useState(DATA.items);

  useEffect(() => {
    // fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=monstax&key=${KEY}&part=snippet&type=video&maxResults=5`);
      setVideos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      {videos &&
        videos.map((video) => {
          return <li key={video.snippet.title}>
            {video.snippet.title}
            <img src={video.snippet.thumbnails.default.url} />
          </li>;
        })}
    </div>
  );
};

export default HomePage;
