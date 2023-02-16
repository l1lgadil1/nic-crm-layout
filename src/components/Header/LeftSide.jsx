import React from 'react';
import arrow from '../../assets/img/arrow-down.svg';

const LeftSide = ({ styles }) => {
  return (
    <>
      <div className={styles.leftSide}>
        <div className={styles.info}>
          <h1 className={`${styles.h1} ${styles.f1}`}>
            Товары <span className="">19,783</span>
          </h1>
          <h1 className={`${styles.h1} `}>
            Скидки <span>19,783</span>
          </h1>
        </div>
        <div className={styles.bot}>
          <span>
            <img src={arrow} alt="arrow" />
          </span>
          <span>г. Минск ул Беломорская дом 7</span>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
