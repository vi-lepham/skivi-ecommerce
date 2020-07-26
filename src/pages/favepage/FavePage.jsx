import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFaveItems } from '../../redux/favorites/fave.selectors';

import CollectionItemsList from '../../components/collection-items-list/CollectionItemsList';

const FavePage = ({ fave }) => {
    return (
        <div className="fave-page">
            <h1 className='title'>Your Faved Items</h1>
            {
                fave ?
                <CollectionItemsList items={fave} /> : null
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    fave: selectFaveItems
})
 
export default connect(mapStateToProps)(FavePage);