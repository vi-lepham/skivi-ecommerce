import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, deleteItemFromCart } from '../../redux/cart/cart.actions';

import './CheckOutItem.scss';

const CheckOutItem = ({ cartItem, addItem, removeItem, deleteItemFromCart }) => {

    const { imageUrl, name, price, quantity} = cartItem;
    
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <div className='quantity-change'>
                <span className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</span>
                <span className='quantity'>{quantity}</span>
                <span className='arrow'onClick={() => addItem(cartItem)}>&#10095;</span>
            </div>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => deleteItemFromCart(cartItem)}>&#10005;</div>
        </div>    
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: cartItem => dispatch(addItem(cartItem)),
    removeItem: cartItem => dispatch(removeItem(cartItem)),
    deleteItemFromCart: cartItem => dispatch(deleteItemFromCart(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);