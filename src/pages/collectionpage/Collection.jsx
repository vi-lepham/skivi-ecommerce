import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItemsList from '../../components/collection-items-list/CollectionItemsList';

import './Collection.scss';

const Collection = ({ collection, history }) => {
    const { title, items } = collection;
    return (
    <div className='collection'>
        <h1 className='title'>{title}</h1>
        <CollectionItemsList items={items} />
        <p onClick={() => history.push('/shop')} className='other-categories'>Other Categories &#8594;</p>
    </div>
)}

const mapStateToProps = (state, ownProps) => {
    const collectionId = ownProps.match.params.collectionId;
    return {
        collection: selectCollection(collectionId)(state)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps)
)(Collection);