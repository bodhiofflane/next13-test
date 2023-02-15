import {useCallback, useEffect, useState, KeyboardEvent} from 'react';

import {RatingProps} from './Rating.props';

import styles from './Rating.module.css';
import StarIcon from './StartIcon';
import cn from 'classnames';

const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeDisplay = (index: number) => {
    if(!isEditable) {
      return
    }
    constructRating(index)
  }

  const onClickForStar = (index: number) => {
    if(!isEditable || !setRating) {
      return;
    }
    setRating(index);
  }

  const handleSpace = (index: number, e: KeyboardEvent<SVGSVGElement>) => {
    if(e.code !== 'Space' || !isEditable || !setRating) {
      return
    }
    setRating(index);
  };

  const constructRating = (currentRating: number): void => {
    const updatedArray = ratingArray.map((_, index) => {
      return (
        <span
          key={index}
          onMouseEnter={() => {
            changeDisplay(index + 1);
          }}
          onMouseLeave={() => {
            changeDisplay(rating);
          }}
          onClick={() => onClickForStar(index + 1)}
        >
          <StarIcon
            className={cn(styles.star, {
              [styles.filled]: index < currentRating,
              [styles.editable]: isEditable,
            })}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGSVGElement>) => {
              if (isEditable) {
                handleSpace(index + 1, e);
              }
            }}
          />
        </span>
      );
    });

    setRatingArray(updatedArray);

  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  console.log("Rating");

  return (
    <div {...props}>
      {ratingArray.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};

export default Rating;
