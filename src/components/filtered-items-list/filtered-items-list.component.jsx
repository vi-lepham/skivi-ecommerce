import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import FilteredItems from '../filtered-items/filtered-items.component';

const FilteredItemsList = ({ collections, keyword }) => {
    return (
        <div className='filter-items-list'>
           {
               collections.map(({ id, ...otherCollectionProps}) => (
                   <FilteredItems key={id} {...otherCollectionProps} keyword={keyword} />
               ))
           }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(FilteredItemsList);