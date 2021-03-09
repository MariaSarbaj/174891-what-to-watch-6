import React from 'react';
import PropTypes from 'prop-types';

const RatingInput = (props) => {
  return (
    <>
      <input className="rating__input" id={`star-${props.rating}`} type="radio" name="rating" value={props.rating}/>
      <label className="rating__label" htmlFor={`star-${props.rating}`}>Rating {props.rating}</label>
    </>
  );
};

RatingInput.propTypes = {
  rating: PropTypes.string.isRequired
};

export default RatingInput;
