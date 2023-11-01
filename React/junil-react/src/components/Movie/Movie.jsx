import React, { useState } from "react";
import styled from "styled-components";
//import { MovieContainer, MovieDetail } from "./Movie.style";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

const MovieContainer = styled.div`
  border: 1px solid rgb(78, 73, 73);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export default function Movie(props) {
  const { title, poster_path, vote_average, overview } = props;
  // const [isMouseOn, setMouseOn] = useState(false);

  // const isMouseEnter = () => {
  //   setMouseOn(true);
  // }


  // const isMouseLeave = () => {
  //   setMouseOn(false);
  // }
  
  return(
    <MovieContainer>
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" style={{ width: '10%', height: 'auto' }}/>

    </MovieContainer>
  );
  }
  

  // return (
  //   <MovieContainer onMouseEnter={isMouseEnter} onMouseLeave={isMouseLeave}>
  //     <img src={IMG_BASE_URL + poster_path} alt="영화포스터" style={{ width: '10%', height: 'auto' }}/>
  //     <div>
  //         <h4>제목 : {title}</h4>
  //     </div>
  //     {isMouseOn && (
  //         <MovieDetail>
  //             <p>{overview}</p>
  //             <span>평점 : {vote_average}</span>
  //         </MovieDetail>
  //     )}
  //   </MovieContainer>
  // );
