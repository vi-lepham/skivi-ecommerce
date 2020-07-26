import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';

import './CollectionItemsList.scss';

const CollectionItemsList = ({ items }) => (
    <div className="collection-items-list">
        {
            items.map(item => <CollectionItem className='collection-item' key={item.id} item={item} />)
        }
    </div>
)
 
export default CollectionItemsList;