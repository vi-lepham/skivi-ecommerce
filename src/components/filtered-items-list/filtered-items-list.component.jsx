import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import FilteredItems from '../filtered-items/filtered-items.component';

const FilteredItemsList = ({ collections, keyword }) => {
    return (
        <div className='filtered-items-list'>
            <div className='filtered-items'>
                {
                    collections.map(({ id, ...otherCollectionProps}) => (
                        <FilteredItems key={id} {...otherCollectionProps} keyword={keyword} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(FilteredItemsList);