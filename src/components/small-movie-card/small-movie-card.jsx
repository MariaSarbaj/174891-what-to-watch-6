import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {
  const {card} = props;
  const {posterImage, title, id} = card;

  return (
    <article id={id} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={posterImage} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/film/${id}`}>{title}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired
  }).isRequired
};

export default SmallMovieCard;
