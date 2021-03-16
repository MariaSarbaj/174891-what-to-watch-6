import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const VideoWrapper = (props) => {
  return (
    <>
      <div className="small-movie-card__image">
        <img src={props.previewImage} alt={props.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/films/:id" className="small-movie-card__link">{props.name}</Link>
      </h3>
    </>
  );
};

VideoWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired
};

export default VideoWrapper;
