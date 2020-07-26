import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../collection-overview/CollectionsOverview';
import Collection from '../collectionpage/Collection';
import WithSpinner from '../../components/with-spinner/withSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const ShopPage = ({ match, isCollectionLoaded, fetchCollectionsAsync}) => {

    useEffect(() => {
        fetchCollectionsAsync()
    }, [fetchCollectionsAsync])

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
        </div>
    )
}  
  
const mapStateToProps = createStructuredSelector({
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);