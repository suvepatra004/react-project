import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <FaStar
            key={index}
            className={
              starValue <= (hover || rating) ? "star active" : "star inactive"
            }
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(rating)}
            size={40}
          />
        );
      })}
    </div>
  );
}
