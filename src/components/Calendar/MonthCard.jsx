import React from 'react';
import styles from './Calendar.module.scss';

import BotPart from './BotPart';

import { CalendarBotPartArr } from '../../assets/data';

const MonthCard = ({ days, month }) => {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <table>
      <tr className={styles.top}>
        <td className={styles.month}>{month}</td>
        <td className={styles.daysWrap}>
          {days.map((item, idx) => (
            <div key={idx} className={styles.days}>
              <span className={styles.day}>{item.day}</span>
              <span className={styles.week}>{item.week}</span>
            </div>
          ))}
        </td>
      </tr>
      {CalendarBotPartArr &&
        CalendarBotPartArr.map((obj, idx) => (
          <BotPart key={idx} styles={styles} {...obj} days={days} />
        ))}
    </table>
  );
};

export default MonthCard;
