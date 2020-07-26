import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFaveItems } from '../../redux/favorites/fave.selectors';

import CollectionItem from '../../components/collection-item';

import './FavePage.scss';

const FavePage = ({ fave }) => {
    return (
        <div className="fave-page">
            <h1>Your Faved Items</h1>
            {
                fave ?
                (
                    fave.map(item => <CollectionItem key={item.id} item={item} />)
                ) : null
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    fave: selectFaveItems
})
 
export default connect(mapStateToProps)(FavePage);