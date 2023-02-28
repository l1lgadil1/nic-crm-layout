import React from 'react';
import style from './style.module.scss';

import downarrow from '../../assets/Down Arrow-2.svg';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Category = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const [isSearchActive, setIsSearchActive] = React.useState(false);
  const [isCategoryPopup, setIsCategoryPopup] = React.useState(false);

  return (
    <div className={!isSearchActive && style.category}>
      {!isSearchActive && (
        <div className={style.categoryLeftSide}>
          <button className={style.addDiscount}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.99998 6.63336V13.3492"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3611 9.99127H6.63892"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.2952 0.833313H5.70468C2.71024 0.833313 0.833252 2.95272 0.833252 5.95304V14.0469C0.833252 17.0472 2.70151 19.1666 5.70468 19.1666H14.2952C17.2983 19.1666 19.1666 17.0472 19.1666 14.0469V5.95304C19.1666 2.95272 17.2983 0.833313 14.2952 0.833313Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Добавить скидку
          </button>
          <div className={style.buttons}>
            <button className={style.buttonActive}>Активные</button>
            <button className={style.buttonNonactive}>Неактивные</button>
          </div>
          <div className={style.discountType}>
            <div className="">
              <span>Тип скидки</span>
              <strong>
                2<span>+</span>1
              </strong>
            </div>
            <span>
              <img src={downarrow} alt="" />
            </span>
          </div>
          <div className={style.discountType}>
            <div className="">
              <span>% скидки</span>
              <strong>50%</strong>
            </div>
            <span className={style.discountTypeImg}>
              <img src={downarrow} alt="" />
            </span>
          </div>
          <div className={style.period}>
            <div className="">
              <span className={style.periodTitle}>Период</span>
              <strong className={style.datePickerWrap}>
                <span>
                  <DatePicker
                    className={style.datePicker}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                  />
                </span>
                <span>-</span>
                <span>
                  <DatePicker
                    className={style.datePicker}
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                  />
                </span>
              </strong>
            </div>
            <span className={style.periodImg}>
              <img src={downarrow} alt="" />
            </span>
          </div>
          <div
            className={`${style.period} ${style.category}`}
            onClick={() => setIsCategoryPopup((prev) => !prev)}>
            <div className="">
              <span className={style.periodTitle}>Категория товаров</span>
              <strong>Полуфабрикаты</strong>
            </div>
            <span className={style.periodImg}>
              <img src={downarrow} alt="" />
            </span>
            {isCategoryPopup && (
              <div className={style.categoryPopup}>
                <span>something</span>
                <span>something</span>
                <span>something</span>
                <span>something</span>
                <span>something</span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={style.searchWrap}>
        <div className={`${isSearchActive ? style.searchActive : style.search}`}>
          <svg
            onClick={() => setIsSearchActive(true)}
            className={isSearchActive && style.searchIco}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="9.78602"
              cy="9.78602"
              r="8.23951"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5167 15.9447L18.7471 19.1667"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {isSearchActive && (
            <>
              <input type="text" className={isSearchActive ? style.searchInputActive : ''} />
              <span
                onClick={() => setIsSearchActive(false)}
                className={isSearchActive ? style.closeIco : ''}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.59998 1.60001L12.4 12.4"
                    stroke="#979797"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.4 1.60001L1.60003 12.4"
                    stroke="#979797"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
