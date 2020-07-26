import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-btn/CustomButton';
import { addCartItem } from '../../redux/cart/cart.actions';

import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item;
    return (
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            ></div>
            <div className='info'>
                <h2 className='name'>{name}</h2>
                <p className='price'>${price}</p>
            </div>
            <CustomButton onClick={() => addItem(item)}> ADD TO CART </CustomButton>
        </div>
)}

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);