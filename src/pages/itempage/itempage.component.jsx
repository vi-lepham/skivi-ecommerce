import React from 'react';

import CustomButton from '../../components/custom-btn/custom-btn.component';

import './itempage.styles.scss';

const ItemPage = () => (
    <div className='item-page'>
        <div className='details-block'>
            <h1>Item Name</h1>
        </div>
        <div className='image-block'>
            <img alt='item'/>
        </div>
        <div className='cta-block'>
            <span className='price'></span>
            <CustomButton> ADD TO CART </CustomButton>
        </div>
    </div>
)

export default ItemPage;