import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {

  return (
    <article className="small-movie-card catalog__movies-card" id={props.id}>
      <div className="small-movie-card__image">
        <img src={props.posterImage} alt={props.name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/films/:id?">{props.name}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SmallMovieCard;
