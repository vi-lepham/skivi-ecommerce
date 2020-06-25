import React from 'react';

import './checkout-item.styles.scss';

const CheckOutItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity} = cartItem;
    return (
    <div className='checkout-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>${price}</span>
        <div className='remove-button'>&#10005;</div>
        </div>    
    </div>
)}

export default CheckOutItem;