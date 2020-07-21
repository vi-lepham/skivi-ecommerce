import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/CollectionItem';

import './Collection.scss';

const Collection = ({ collection, history }) => {
    const { title, items } = collection;
    return (
    <div className='collection'>
        <h1>{title}</h1>
        <div className='items'>
        {
            items.map(item => <CollectionItem className='collection-item' key={item.id} item={item} />)
        }
        </div>
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