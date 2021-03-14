import React, {useState} from 'react';
import RatingInput from './rating-input';

const RATINGS = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`];

const AddReviewForm = () => {
  const [review, setReview] = useState(``);
  const [filmRating, setFilmRating] = useState(``);

  const handleReviewChange = (evt) => {
    const {value} = evt.target;
    setReview(value);
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            RATINGS.map((rating, index) => {
              <RatingInput
                rating = {rating}
                key = {index}
                checked={filmRating === rating}
                onChange={() => setFilmRating((rating))}
              />;
            })
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={review} onChange={handleReviewChange}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

export default AddReviewForm;
