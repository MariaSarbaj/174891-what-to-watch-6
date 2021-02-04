import React from 'react';
import MovieCard from "../movie-card/movie-card";
import PageContent from "../page-content/page-content";
import PropTypes from 'prop-types';

const App = (props) => {
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

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default App;
