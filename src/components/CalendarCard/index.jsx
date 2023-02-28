import React from 'react';
import { monthDaysArr } from '../../db';
import style from './style.module.scss';

import DiscountCard from './DiscountCard';

const discountArr = [
  {
    title: 'Акции 1+1 (1000)',
    paused: false,
  },
  {
    title: 'Акции 2+1 (1000)',
    paused: true,
  },
  {
    title: 'Скидка от суммы чека  (1000)',
    paused: false,
  },
  {
    title: 'Скидка по Промокоду (1000)',
    paused: false,
  },
];

const CalendarCard = ({ month }) => {
  return (
    <table>
      <tr className={`${style.table} `}>
        <td className={style.month}>{month}</td>
        <td className={style.weeks}>
          {monthDaysArr.map((obj, index) => (
            <div className={style.days}>
              <span className={style.objDay}>{obj.day}</span>
              <span className={style.objWeek}>{obj.week}</span>
            </div>
          ))}
        </td>
      </tr>
      <div className={style.cardwrap}>
        {discountArr.map((obj, index) => (
          <DiscountCard {...obj} style={style} key={index} />
        ))}
      </div>
    </table>
  );
};

export default CalendarCard;
