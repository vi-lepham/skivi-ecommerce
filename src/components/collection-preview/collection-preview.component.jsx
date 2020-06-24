import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.component.scss';

const CollectionPreview = ({ title, routeName, items }) => (
    <div className='collection'>
        <div className='title'>
            <h1>{title.toUpperCase()}</h1>  
            <p className='see-more'>See more</p>      
        </div>
        <div className='preview'>
            {items.filter((item, idx) => idx < 4)
                .map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default CollectionPreview;