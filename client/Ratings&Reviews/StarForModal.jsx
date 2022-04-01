import React, {useState, useContext} from 'react';
import ToolTipStarModal from './ToolTipStarModal.jsx'
import {AppContext } from '../context.js';

const StarForModal = () => {
  const {rating, setRating} = useContext(AppContext)
  const [hover, setHover] = useState(0);

  return (
    <div className="add-star-rating"> Overall Rating*
      {[...Array(5)].map((star, starIndex) => {
        starIndex += 1;
        return (
          <div className='tooltip' key={starIndex}>
          <button
            id= 'addstar-review'
            type='button'
            className={starIndex <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(starIndex)}
            onMouseEnter={() => setHover(starIndex)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="add-star">&#9733;</span>
          </button>
          <ToolTipStarModal starIndex={starIndex}/>
          </div>
        );
      })}
    </div>
  );
};

export default StarForModal;