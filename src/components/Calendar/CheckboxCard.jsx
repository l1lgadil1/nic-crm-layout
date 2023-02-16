import React from 'react';

import greenCircle from '../../assets/img/greenCircle.svg';

const CheckboxCard = ({ clicked, styles, week, isPaused }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const [clicks, setClicks] = React.useState(0);

  const dayOffs = week === 'сб' || week === 'вс';

  if (isPaused) {
    return <span className="">H</span>;
  }

  switch (clicks) {
    case 0:
      return (
        <span
          onClick={() => !isPaused && !dayOffs && setClicks(1)}
          className={dayOffs ? styles.botCardTextDayoff : styles.botCardText}>
          H
        </span>
      );
    case 1:
      return <img src={clicked} alt="mg" onClick={() => !isPaused && !dayOffs && setClicks(2)} />;
    case 2:
      return (
        <img
          src={greenCircle}
          alt="circleimg"
          onClick={() => !isPaused && !dayOffs && setClicks(0)}
        />
      );
    default:
      return <></>;
  }
};

export default CheckboxCard;
