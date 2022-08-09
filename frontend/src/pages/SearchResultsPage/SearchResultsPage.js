import React, { useState, useEffect } from "react";
import { KEY } from "../../localKey";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./SearchResultsPage.css";
import { res } from "./test";

const SearchResultsPage = () => {
  const [videos, setVideos] = useState();
  const { search } = useParams();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY}&part=snippet&type=video&maxResults=5`
      );
      console.log(response);
      setVideos(response.data.items);
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

export default SearchResultsPage;
