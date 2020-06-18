import React from 'react';
import './menu-item.styles.css';

const MenuItem = ({ title, imageUrl, size, id }) => (
    <div className={`${size} menu-item`}>
        <div 
            className='content'
        >
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
    
)

export default MenuItem;