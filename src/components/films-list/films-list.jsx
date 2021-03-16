import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card";

const FilmsList = (props) => {
  const [userChoice, setUserChoice] = useState(null);

  const onMouseHover = (id) => {
    setUserChoice(id);
  };

  return (
    <div className="catalog__movies-list">
      {
        props.films.map((film, index) => <SmallMovieCard
          key={film + index}
          id={film.id}
          name={film.name}
          previewImage={film.preview_image}
          previewVideoLink={film.preview_video_link}
          onMouseHover={onMouseHover}
          showVideo={userChoice === film.id}
        />)
      }
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.array.isRequired
};
export default FilmsList;
