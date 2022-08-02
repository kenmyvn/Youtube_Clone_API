import React, { useState, useEffect } from "react";
import { KEY } from "../../localKey";
import axios from "axios";
import { DATA } from "../../localData";
import "./SearchResultsPage.css";

const SearchResultsPage = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`
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
              <img src={video.snippet.thumbnails.medium.url} />
            </div>
          );
        })}
    </div>
  );
};

export default SearchResultsPage;
