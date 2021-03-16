import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  return (
    <video
      height="100%"
      width="100%"
      autoPlay={props.auto}
      muted={props.muted}
      controls
      poster={props.previewImage}>
      <source
        src={props.previewVideoLink}
        type="video/mp4"
      />
    </video>
  );
};

VideoPlayer.propTypes = {
  previewVideoLink: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  auto: PropTypes.bool.isRequired
};

export default VideoPlayer;
