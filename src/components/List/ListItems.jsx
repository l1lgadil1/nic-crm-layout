import React from 'react';
import Button from '../Button';
import ButtonPopup from '../ButtonPopup';

import ButtonPlus from '../../assets/img/button-plus.svg';
import arrow from '../../assets/img/Down-Arrow-empty.svg';

import Datepicker from '../Datepicker/Datepicker';

const ListItems = ({ styles }) => {
  const [isCategoryPopupShown, setIsCategoryPopupShown] = React.useState(false);

  const categoryPopupArr = ['something 1', 'something 2', 'something 3', 'something 4'];

  return (
    <div className={styles.list}>
      <Button text="Добавить скидку" icon={ButtonPlus} bg="#A1D214" />
      <Button text="Активные" border="#A1D214" bg="white" borderWidth={2} />
      <Button text="Неактивные" bg="#E4E4E4" textColor="#222222B2" />
      <ButtonPopup title="Тип скидки" text="2+1" icon={arrow} />
      <ButtonPopup title="% скидки" text="50%" icon={arrow} />
      <Datepicker />
      <div className="" onClick={() => setIsCategoryPopupShown((prev) => !prev)}>
        <ButtonPopup title="Категория товаров " text="Полуфабрикаты" icon={arrow} />
        {isCategoryPopupShown ? (
          <div className={styles.categoryPopup}>
            {categoryPopupArr.map((obj, idx) => (
              <span key={idx}>{obj}</span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ListItems;
