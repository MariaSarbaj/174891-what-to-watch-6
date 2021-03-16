import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player";
import VideoWrapper from "../video-wrapper/video-wrapper";

const SmallMovieCard = (props) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let timerId = null;

    if (props.showVideo) {
      timerId = setTimeout(() => (setToggle(true)), 1000);
    }

    return () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      setToggle(false);
    };
  }, [props.showVideo]);

  return (
    <article className="small-movie-card catalog__movies-card" id={props.id}
      onMouseEnter={() => props.onMouseHover(props.id)}
      onMouseLeave={() => props.onMouseHover(null)}
    >
      {!toggle ?
        <VideoWrapper
          name={props.name}
          previewImage={props.previewImage}
        />
        :
        <VideoPlayer
          previewVideoLink={props.previewVideoLink}
          previewImage={props.previewImage}
          muted={true}
          auto={true}
        />
      }
    </article>
  );
};

SmallMovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  onMouseHover: PropTypes.func.isRequired,
  showVideo: PropTypes.bool.isRequired
};

export default SmallMovieCard;
