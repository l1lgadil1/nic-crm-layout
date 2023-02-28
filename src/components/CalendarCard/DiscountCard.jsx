import React from 'react';

import { monthDaysArr } from '../../db';
import DiscountDay from './DiscountDay';

import playbtn from '../../assets/play-btn.svg';
import pausebtn from '../../assets/pause-btn.svg';
import pencil from '../../assets/pencil.svg';

const DiscountCard = ({ style, title, paused }) => {
  const [isPaused, setIsPaused] = React.useState(paused);
  const [isEditable, setIsEditable] = React.useState(false);

  return (
    <tr className={style.table}>
      <td className={style.leftSide}>
        <span onClick={() => setIsPaused((prev) => !prev)} className={style.discountBtn}>
          <img src={isPaused ? pausebtn : playbtn} alt="" />
        </span>
        {isEditable ? (
          <input type="text" />
        ) : (
          <span className={paused ? style.discountTextPaused : style.discountTextActive}>
            {title}
          </span>
        )}
        <span className={style.discountEditImg} onClick={() => setIsEditable((prev) => !prev)}>
          <img src={pencil} alt="" />
        </span>
      </td>
      <td className={style.discountDays}>
        {monthDaysArr.map((obj, index) => (
          <DiscountDay {...obj} style={style} key={index} paused={isPaused} />
        ))}
      </td>
    </tr>
  );
};

export default DiscountCard;
