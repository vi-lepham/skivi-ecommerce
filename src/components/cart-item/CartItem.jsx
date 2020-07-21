import React from 'react';

import './CartItem.scss';

const CartItem = ({ item: { imageUrl, name, price, quantity }}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='price'>${price}</span>
            <span className='name'>{name}</span>
            <span className='quantity'>Qty: {quantity}</span>
        </div>
    </div>
)

export default CartItem;