import React from 'react';
import MovieCard from "../movie-card/movie-card";
import PageContent from "../page-content/page-content";
import PropTypes from "prop-types";

const Main = (props) => {
  const {title, genre, year} = props;

  return (
    <>
      <MovieCard
        title = {title}
        genre = {genre}
        year = {year}
      />
      <PageContent />
    </>
  );
};

Main.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default Main;
