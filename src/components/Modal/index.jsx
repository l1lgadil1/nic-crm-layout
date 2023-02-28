import React from 'react';

import downarrow from '../../assets/Down Arrow-2.svg';
import style from './style.module.scss';
import { AppContext } from '../../pages/Home';

import AddDiscount from '../AddDiscount';
import DescrPopup from '../DescrPopup';

const Modal = () => {
  const { setIsModalShown } = React.useContext(AppContext);
  const [isDescrOpen, setIsDescrOpen] = React.useState(false);
  const [isAddbtn, setIsAddbtn] = React.useState(false);

  return (
    <div className={style.wrap}>
      <button className={style.closeBtn} onClick={() => setIsModalShown(false)}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.79999 1.79999L16.2 16.2"
            stroke="#979797"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.2 1.79999L1.80001 16.2"
            stroke="#979797"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className={style.content}>
        <strong className={style.title}>Добавление скидки</strong>
        <div className={style.header}>
          <div className={style.headerFirst}>
            <div className={style.discountType}>
              <span>Выберите тип скидки</span>
              <span>
                <img src={downarrow} alt="" />
              </span>
            </div>
            <div className={style.discountPeriod}>
              <strong>Период акции</strong>
              <div className={style.discountCalendar}>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 2C7.44772 2 7 2.44772 7 3V4H6C4.34315 4 3 5.34315 3 7V9V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9V7C21 5.34314 19.6569 4 18 4H17V3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3V4H9V3C9 2.44772 8.55228 2 8 2ZM16 6H8H6C5.44772 6 5 6.44772 5 7V8H19V7C19 6.44772 18.5523 6 18 6H16ZM5 19V10L19 10V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19Z"
                        fill="black"
                        fill-opacity="0.5"
                      />
                    </g>
                  </svg>
                </span>
                <span>00.00.0000 - 00.00.0000</span>
              </div>
              <div className={style.weeks}>
                <button className={style.weekBtn}>Все</button>
                <button className={style.weekBtn}>Чет.</button>
                <button className={style.weekBtn}>Нечет.</button>
                <button className={style.breakDay}>П</button>
                <button className={style.weekDay}>В</button>
                <button className={style.weekDay}>С</button>
                <button className={style.breakDay}>Ч</button>
                <button className={style.weekDay}>П</button>
                <button className={style.weekDay}>С</button>
                <button className={style.weekDay}>В</button>
              </div>
            </div>
          </div>
          <div className={style.headerSecond}>
            <strong>Использовать текущие акции</strong>
            <div className={style.stocks}>
              <button className={style.stockBtn}>2+1</button>
              <button className={style.stockBtn}>1+1</button>
              <button className={style.stockBtn}>Сумма чека</button>
              <button className={style.stockBtn}>По промокоду</button>
              <button className={style.stockBtn}>Сумма чека</button>
              <button className={style.stockBtn}>По промокоду</button>
              <button className={style.stockBtn}>Сумма чека</button>
              <button className={style.stockBtn}>По промокоду</button>
              <button className={style.stockBtn}>Сумма чека</button>
              <button className={style.stockBtn}>По промокоду</button>
              <button className={style.stockBtn}>2+1</button>
              <button className={style.stockBtn}>1+1</button>
              <button className={style.stockBtn}>Сумма чека</button>
              <button className={style.stockBtn}>По промокоду</button>
            </div>
          </div>
        </div>
        <div className={style.addDescr} onClick={() => setIsDescrOpen((prev) => !prev)}>
          <div className={style.addDescrHeader}>
            <span>Добавить описание</span>

            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M13 0.447021L7 6.55301L0.999999 0.447021" stroke="#A1D214" />
            </svg>
          </div>
          {isDescrOpen && <DescrPopup />}
        </div>
        <button
          className={`${style.addBtn} ${style.addBtn1} ${isAddbtn && style.addBtn1Active}`}
          onClick={() => setIsAddbtn((prev) => !prev)}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.1522 6.52753V13.1212"
              stroke="#979797"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.4516 9.8241H6.85156"
              stroke="#979797"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.3685 0.833008H5.93422C2.99422 0.833008 1.15137 2.91388 1.15137 5.85965V13.8064C1.15137 16.7521 2.98565 18.833 5.93422 18.833H14.3685C17.3171 18.833 19.1514 16.7521 19.1514 13.8064V5.85965C19.1514 2.91388 17.3171 0.833008 14.3685 0.833008Z"
              stroke="#979797"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Добавить</span>
          {isAddbtn && (
            <ul className={style.addBtnPopup}>
              <li className={style.addbtnpopuptitleActive}>Категория</li>
              <li className={style.addbtnpopuptitle}>Товар</li>
            </ul>
          )}
        </button>
        <div className={style.titlesWrap}>
          <strong className={style.articul}>
            <span>Артикул</span>
            <span>
              <img src={downarrow} alt="" />
            </span>
          </strong>
          <strong className={style.articul}>
            <span>Фикс. прайс</span>
            <span>
              <img src={downarrow} alt="" />
            </span>
          </strong>
        </div>
        <div className={style.articulWrap}>
          <div className={style.AddDiscountWrap}>
            <AddDiscount close />
            <AddDiscount close />
            <AddDiscount close />
            <AddDiscount close />
            <AddDiscount close />
            <AddDiscount close />
            <AddDiscount close />
            <AddDiscount plus />
          </div>
          <button className={`${style.addBtn} ${style.addBtn2}`}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.1522 6.52753V13.1212"
                stroke="#979797"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.4516 9.8241H6.85156"
                stroke="#979797"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.3685 0.833008H5.93422C2.99422 0.833008 1.15137 2.91388 1.15137 5.85965V13.8064C1.15137 16.7521 2.98565 18.833 5.93422 18.833H14.3685C17.3171 18.833 19.1514 16.7521 19.1514 13.8064V5.85965C19.1514 2.91388 17.3171 0.833008 14.3685 0.833008Z"
                stroke="#979797"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Добавить</span>
          </button>
        </div>
        <div className={style.bottom}>
          <div className={style.bottomLeftside}>
            <button className={style.saveBtn}>Сохранить</button>
            <button className={style.stopBtn}>Остановить</button>
          </div>
          <button className={style.deleteBtn}>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
