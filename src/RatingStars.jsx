import "./RatingStars.scss";

import clsx from "clsx";
import React, { useRef, useState } from "react";

const RatingStars = () => {
  const [rating, setRating] = useState(1);

  return (
    <div className="rating-stars">
      <div className="rating-stars">
        {new Array(10).fill(0).map((el, idx) => {
          return (
            <div className="item" key={"star-item" + idx}>
              <Star
                filled={idx + 1 <= rating}
                setRating={setRating}
                thisRating={idx + 1}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Star = ({ filled, setRating, thisRating }) => {
  const svgRef = useRef();

  const clickHandler = () => {
    setRating(thisRating);
  };

  return (
    <div ref={svgRef} onClick={clickHandler} className="icon-container">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55.01 54.56"
        className={clsx(filled && "shadowed")}
      >
        <defs>
          <clipPath id="clip-path" transform="translate(-0.01)">
            <path
              d="M32.26,3.94l4.84,9.68A6,6,0,0,0,41,16.51L49.78,18c5.61.94,6.93,5,2.89,9L45.85,33.8a6,6,0,0,0-1.43,5l1.95,8.44c1.54,6.69-2,9.27-7.92,5.78l-8.22-4.87a6,6,0,0,0-5.45,0L16.56,53c-5.89,3.49-9.46.88-7.92-5.78l1.95-8.44a6,6,0,0,0-1.43-5L2.34,27c-4-4-2.72-8.08,2.89-9L14,16.51a6,6,0,0,0,3.88-2.89l4.84-9.68C25.36-1.31,29.65-1.31,32.26,3.94Z"
              style={{ fill: "#e9ecf4" }}
            />
          </clipPath>
        </defs>
        <g>
          <path
            d="M32.26,3.94l4.84,9.68A6,6,0,0,0,41,16.51L49.78,18c5.61.94,6.93,5,2.89,9L45.85,33.8a6,6,0,0,0-1.43,5l1.95,8.44c1.54,6.69-2,9.27-7.92,5.78l-8.22-4.87a6,6,0,0,0-5.45,0L16.56,53c-5.89,3.49-9.46.88-7.92-5.78l1.95-8.44a6,6,0,0,0-1.43-5L2.34,27c-4-4-2.72-8.08,2.89-9L14,16.51a6,6,0,0,0,3.88-2.89l4.84-9.68C25.36-1.31,29.65-1.31,32.26,3.94Z"
            transform="translate(-0.01)"
            style={{ fill: "#e9ecf4" }}
          />
          <g style={{ clipPath: "url(#clip-path)" }}>
            <rect
              width="55.01"
              height="54.56"
              style={{
                fill: "#fbbc05",
                transform: `translate(-${filled ? 0 : 100}%)`,
                pointerEvents: "none",
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default RatingStars;
