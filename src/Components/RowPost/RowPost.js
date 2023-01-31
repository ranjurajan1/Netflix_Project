import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "axios";
import { API_KEY, baseUrl, imageUrl } from "../../constant/constants";
import Youtube from "react-youtube";

///===================================================================================================>

function RowPost(props) {
  const [movies, SetMovies] = useState([]);
  const [UrlId, setUrlId] = useState("");

  useEffect(() => {
    axios
      // .get(baseUrl + `discover/tv?api_key=${API_KEY}&with_networks=213`)
      .get(baseUrl + props.url)
      .then((responce) => {
        console.log(responce.data);
        SetMovies(responce.data.results);
      });
    // .catch((err) => {
    //   // alert("netwrk error");
    // });
  }, []);

  ///==================================================================================================>
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  //=================================================================================================>

  const handleMovieClick = (id) => {
    console.log(id);
    axios
      .get(baseUrl + `movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        setUrlId(response.data.results[0].key);
        if (response.data.results.length !== 0) {
          // setUrlId(response.data.results[0]);
        } else {
          console.log("Array empty");
        }
      });

  };
  //================================================================================================>

  return (
    <div className="row">
      <h2> {props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            src={`${imageUrl + obj.backdrop_path}`}
            className={props.isSmall ? "smallPoster" : "poster"}
            onClick={() => handleMovieClick(obj.id)}
          />
        ))}
      </div>
      {UrlId != "" ? <Youtube videoId={UrlId} opts={opts} /> : null}
    </div>
  );
}
export default RowPost;

///================================================================================================>
