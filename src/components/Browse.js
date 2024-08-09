import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        mainContainer
          - VideoBackground
          - VideoTitle
        secondaryContainer
          - movieList * n
            - cards * n
        */}
    </div>
  );
};

export default Browse;
