import React from 'react';
import styles from './style.module.scss';

import downarrow from '../../assets/Down Arrow-2.svg';

const AddDiscount = ({ close, plus }) => {
  return (
    <div className={styles.wrap}>
      {close && (
        <svg
          className={styles.closeBtn}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="5" fill="#F6F6F6" />
          <path
            d="M12.5 11.5L21.5 20.5"
            stroke="#979797"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.5 11.5L12.5 20.5"
            stroke="#979797"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {plus && (
        <svg
          className={styles.closeBtn}
          width="33"
          height="34"
          viewBox="0 0 33 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.5005 11.3074V22.6632"
            stroke="#A1D214"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.1835 16.9854H10.8168"
            stroke="#A1D214"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.7629 1.5H9.23714C4.17381 1.5 1 5.08373 1 10.157V23.843C1 28.9163 4.15905 32.5 9.23714 32.5H23.7629C28.841 32.5 32 28.9163 32 23.843V10.157C32 5.08373 28.841 1.5 23.7629 1.5Z"
            stroke="#A1D214"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      <div className={styles.discountCount}>0000000000000</div>
      <div className={styles.searchByName}>
        <div className="">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="10.786"
              cy="10.786"
              r="8.23951"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5168 16.9447L19.7471 20.1666"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input type="text" placeholder="Поиск по наименованию" />
        <span>
          <img src={downarrow} alt="" />
        </span>
      </div>
      <div className={styles.price}>000.00</div>
      <div className={styles.price}>-0%</div>
    </div>
  );
};

export default AddDiscount;
