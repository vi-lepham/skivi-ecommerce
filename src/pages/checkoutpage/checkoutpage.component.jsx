import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectTotal } from '../../redux/cart/cart.selectors';

import './checkoutpage.styles.scss';

const CheckOutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
    <div className='item-block'>
        <h2>My Cart</h2>
        <div className='item-list'>
            {
                cartItems.map(cartItem => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                ))}
        </div>
    </div>
    <div className='total-block'>
        <h2>Total: ${total}</h2>
    </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotal
})

export default connect(mapStateToProps)(CheckOutPage);