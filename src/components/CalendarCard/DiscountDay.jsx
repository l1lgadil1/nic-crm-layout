import React from 'react';

const DiscountDay = ({ style, paused, week }) => {
  const [clicks, setClicks] = React.useState(0);

  switch (clicks) {
    case 0:
      return (
        <span
          onClick={() => setClicks(1)}
          className={`${style.discountDay} ${paused && style.discountDayPaused} ${
            (week == 'сб' || week == 'вс') && style.breakDay
          }`}>
          H
        </span>
      );
    case 1:
      return (
        <svg
          onClick={() => setClicks(2)}
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="25" height="25" rx="5" fill="#333333" />
          <path
            d="M8 12.0846L10.9409 15L17 9"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case 2:
      return (
        <svg
          onClick={() => setClicks(0)}
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="25" height="25" rx="5" fill="#7CCE04" />
          <rect x="8" y="8" width="9" height="9" rx="4.5" fill="white" />
        </svg>
      );
    default:
      return null;
  }
};

export default DiscountDay;
