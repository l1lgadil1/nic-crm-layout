import React from 'react';

import styles from './Modal.module.scss';
import close from '../../assets/img/Close.svg';
import ButtonPopup from '../ButtonPopup';
import Button from '../Button';
import arrow from '../../assets/img/Down-Arrow-empty.svg';
import calendar from '../../assets/img/calendar-img.svg';
import { currentStocks } from '../../assets/data';
import plus from '../../assets/img/button-plus.svg';
import ModalCard from './ModalCard';

const index = ({ onHandleModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.closeBtn} onClick={onHandleModal}>
        <Button icon={close} />
      </div>
      <div className={styles.content}>
        <h1>Добавление скидки</h1>
        <div className={styles.separate}>
          <div className={styles.separate1}>
            <ButtonPopup
              width={420}
              className={styles.btn}
              border={true}
              icon={arrow}
              text="Выберите тип скидки"
            />
            <div className={styles.p}>
              <p>Период акции</p>

              <Button
                width={330}
                icon={calendar}
                text="00.00.0000 - 00.00.0000"
                bg="white"
                borderWidth={1}
                border="#CDCDCB"
              />
              <div className={styles.categories}>
                <Button text="Все" textColor="#B7B9B9" />
                <Button text="Чет." textColor="#B7B9B9" />
                <Button text="Нечет." textColor="#B7B9B9" />
                <Button text="П" bg="#A1D214" textColor="white" />
                <Button text="В" textColor="#B7B9B9" />
                <Button text="С" textColor="#B7B9B9" />
                <Button text="Ч" bg="#A1D214" textColor="white" />
                <Button text="П" textColor="#B7B9B9" />
                <Button text="C" textColor="#B7B9B9" />
                <Button text="В" textColor="#B7B9B9" />
              </div>
            </div>
          </div>
          <div className={styles.separate2}>
            <h1 className={styles.separate2Heading}>Использовать текущие акции</h1>
            <div className={styles.stocks}>
              {currentStocks &&
                currentStocks.map((item, idx) => (
                  <Button bg="#F6F6F6" textColor="#B7B9B9" text={item} key={idx} />
                ))}
            </div>
          </div>
        </div>
        <div
          style={{
            marginBottom: 30,
          }}>
          <ButtonPopup textColor="#A1D214" text="Добавить описание" icon={arrow} />
        </div>
        <div
          style={{
            marginBottom: 22,
          }}>
          <Button icon={plus} text="Добавить" bg="#F6F6F6" textColor="#797979" />
        </div>

        <div className={styles.adminWrap}>
          <div
            className=""
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <ButtonPopup text="Артикул" icon={arrow} textColor="#B6B6B6" />
            <ButtonPopup text="Фикс. прайс" icon={arrow} textColor="#B6B6B6" />
          </div>
          <div className={styles.admin}>
            <ModalCard styles={styles} />
            <ModalCard styles={styles} />
            <ModalCard styles={styles} />
            <ModalCard styles={styles} />
            <ModalCard styles={styles} />
            <ModalCard styles={styles} isAdded />
            <ModalCard styles={styles} isAdded />
          </div>
          <div
            className=""
            style={{
              marginTop: 10,
              marginBottom: 30,
            }}>
            <Button icon={plus} text="Добавить" bg="#F6F6F6" textColor="#797979" />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer1}>
            <Button bg="#A1D214" textColor="white" text="Сохранить" />
            <Button
              bg="white"
              text="Остановить"
              border="#EDEDED"
              borderWidth={1}
              textColor="#C4C4C4"
            />
          </div>
          <div className="">
            <Button text="Удалить" bg="#F6F6F6" textColor="#C4C4C4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
