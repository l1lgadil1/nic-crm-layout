import React from 'react';

const HeaderLeft = ({ style }) => {
  return (
    <div className={style.headerLeft}>
      <div className={style.headerLeftTop}>
        <strong className={style.headerCommodity}>
          Товары <span>19,783</span>
        </strong>
        <strong className={style.headerDiscount}>
          Скидки <span>19,783</span>
        </strong>
      </div>
      <p>
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9.5" r="9" fill="#A1D214" />
          <path
            d="M13 7.92934L9.71327 11.2741C9.32138 11.6729 8.67862 11.6729 8.28673 11.2741L5 7.92934"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <span>г. Минск ул Беломорская дом 7</span>
      </p>
    </div>
  );
};

export default HeaderLeft;
