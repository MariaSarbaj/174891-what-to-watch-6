import React from 'react';
import MovieCard from "../movie-card/movie-card";
import PageContent from "../page-content/page-content";
import PropTypes from "prop-types";

const Main = (props) => {
  const {title, genre, year, films} = props;

  return (
    <>
      <MovieCard
        title = {title}
        genre = {genre}
        year = {year}
        films = {films}
      />
      <PageContent />
    </>
  );
};

Main.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired
};

export default Main;
