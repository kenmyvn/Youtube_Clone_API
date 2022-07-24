import React from "react";
import { useEffect, useState } from "react";
import {KEY} from "../../localKey";
import axios from "axios";

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=monstax&key=${KEY}&part=snippet&type=video&maxResults=5`);
        setVideos(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchVideos();
  }, );

  return (
    <div className="container">

    </div>
  );
};

export default HomePage;
