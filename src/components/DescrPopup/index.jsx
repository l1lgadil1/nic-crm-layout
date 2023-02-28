import React from 'react';
import style from './style.module.scss';

const DescrPopup = () => {
  return (
    <textarea
      className={style.textarea}
      placeholder="Состав
 креветки (Pandalus borealis), вода (защитная глазурь).
Краткое описание
 Варено-мороженые водные беспозвоночные. Глазурь не более 14%. Зона вылова: Северные районы Атлантического океана."
    />
  );
};

export default DescrPopup;
