import React, { useState } from "react";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
  const { title, poster_path, vote_average, overview } = props;
  const [isMouseOn, setMouseOn] = useState(false);

  const isMouseEnter = () => {
    setMouseOn(true);
  }

  const isMouseLeave = () => {
    setMouseOn(false);
  }

  return (
    <div className="movie-container" onMouseEnter={isMouseEnter} onMouseLeave={isMouseLeave}>
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" style={{ width: '10%', height: 'auto' }}/>
      <div>
          <h4>제목 : {title}</h4>
      </div>
      {isMouseOn && (
          <div className="movie-detail">
              <p>{overview}</p>
              <span>평점 : {vote_average}</span>
          </div>
      )}
    </div>
  );
}
