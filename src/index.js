import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";
import axios from "axios";

// const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
const httpClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }, //받아온 key를 key에 설정
});
const youtube = new Youtube(httpClient);
// constructor(key) {
//   this.youtube = axios.create({
//     baseURL: "https://www.googleapis.com/youtube/v3",
//     params: { key: key }, //받아온 key를 key에 설정
//   });
// }

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
