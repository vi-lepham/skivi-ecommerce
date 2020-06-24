import React from 'react';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingBag className='shopping-icon' />
        <div className='item-count'>0</div>
    </div>
)

export default CartIcon;