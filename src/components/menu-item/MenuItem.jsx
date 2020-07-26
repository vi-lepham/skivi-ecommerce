import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, history, pageUrl}) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${pageUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='background-cover'></div>
    <h1 className='menu-title'>{title.toUpperCase()}</h1>
  </div>
);

export default withRouter(MenuItem);