import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-btn/CustomButton';
import { ReactComponent as PlusHeart } from '../../assets/plus-heart.svg';
import { ReactComponent as MinusHeart } from '../../assets/minus-heart.svg';

import { selectFaveItems } from '../../redux/favorites/fave.selectors';
import { addCartItem } from '../../redux/cart/cart.actions';
import { addToFave, removeFromFave } from '../../redux/favorites/fave.actions';

import './CollectionItem.scss';

const CollectionItem = ({ item, favedItems, addCartItem, addToFave, removeFromFave }) => {
    const { id, imageUrl, name, price } = item;

    let faved = false;

    // Check if item is already faved
    if (favedItems.length) {
        if (favedItems.includes(item)) {
            faved = true;
        }
    }
        
    const faveItem = item => {
        faved = true;
        addToFave(item)
    }

    const unfaveItem = id => {
        faved = false;
        removeFromFave(id);
    }

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
            <div className="actions">
                <CustomButton onClick={() => addCartItem(item)}> ADD TO CART </CustomButton>
                {
                    faved ?
                    (
                        <MinusHeart onClick={() => unfaveItem(id)} />
                    ) : (
                        <PlusHeart onClick={() => faveItem(item)} />
                    )
                }
            </div>
        </div>
)}

const mapStateToProps = createStructuredSelector({
    favedItems: selectFaveItems
})

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item)),
    addToFave: item => dispatch(addToFave(item)),
    removeFromFave: id => dispatch(removeFromFave(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);