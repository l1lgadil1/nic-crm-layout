import React from 'react';
import CheckboxCard from './CheckboxCard';

const BotPart = ({ styles, icon, days, pencil, title, paused, clicked }) => {
  const [isPaused, setIsPaused] = React.useState(false);
  const [isChanging, setIsChanging] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(title);

  const onHandlePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <tr className={styles.bot}>
      <td className={styles.botLeftSide}>
        <div className={isPaused ? styles.botLeftSideCardPaused : styles.botLeftSideCard}>
          <span onClick={onHandlePause}>
            <img src={isPaused ? paused : icon} alt="icon" />
          </span>
          {isChanging ? (
            <>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </>
          ) : (
            <>
              <span>{inputValue}</span>
            </>
          )}
          <span onClick={() => setIsChanging((prev) => !prev)}>
            <img src={pencil} alt="change" />
          </span>
        </div>
      </td>
      <td className={isPaused ? styles.botCardPaused : styles.botCard}>
        {days.map((item, idx) => (
          <CheckboxCard
            key={idx}
            week={item.week}
            isPaused={isPaused}
            clicked={clicked}
            styles={styles}
          />
        ))}
      </td>
    </tr>
  );
};

export default BotPart;
