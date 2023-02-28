import React from 'react';

import HeaderRight from '../HeaderRight';
import HeaderLeft from '../HeaderLeft';

const Header = ({ style }) => {
  return (
    <div className={style.header}>
      <HeaderLeft style={style} />
      <HeaderRight style={style} />
    </div>
  );
};

export default Header;
