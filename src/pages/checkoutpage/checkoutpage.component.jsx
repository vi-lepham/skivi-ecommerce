import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectTotal } from '../../redux/cart/cart.selectors';

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
        <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242
        <br />
        Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotal
})

export default connect(mapStateToProps)(CheckOutPage);