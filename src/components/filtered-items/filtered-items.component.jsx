import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './filtered-items.styles.scss';

const FilteredItems = ({ items, keyword }) => {
    if (keyword !== '') {
        const searchResults = items.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()))
        return (
            <div className='filtered-items'>
                {
                    searchResults.map(item => <CollectionItem className='collection-item' key={item.id} item={item} />) 
                }
            </div>
        )
    } else {
        return null;
    }
    
}

export default FilteredItems;