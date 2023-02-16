import React from 'react';
import close from '../../assets/img/Close.svg';
import Button from '../Button';
import arrow from '../../assets/img/Down-Arrow-empty.svg';
import search from '../../assets/img/Search.svg';
import PlusFilled from '../../assets/img/PlusFilled.svg';

const ModalCard = ({ styles, isAdded = false }) => {
  return (
    <div className={styles.modalCard}>
      {isAdded ? (
        <img
          src={PlusFilled}
          alt="plus-img"
          style={{
            width: 32,
            height: 32,
          }}
        />
      ) : (
        <Button icon={close} />
      )}
      <input type="text" placeholder="0000000000000" className={styles.input} />
      <div className={styles.searchBar}>
        <div
          className=""
          style={{
            display: 'flex',
            gap: 10,
          }}>
          <img src={search} alt="searchico" />
          <input type="text" placeholder="Поиск по наименованию" />
        </div>
        <img
          src={arrow}
          alt="arrow-img"
          style={{
            width: 12,
            height: 12,
          }}
        />
      </div>
      <Button text="000.00" bg="white" textColor="#1F201C80" borderWidth={1} />
      <Button text="-0%" bg="white" textColor="#1F201C80" borderWidth={1} />
    </div>
  );
};

export default ModalCard;
