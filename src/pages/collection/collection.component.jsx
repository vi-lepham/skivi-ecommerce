import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const Collection = ({ collection, history }) => {
    const { title, items } = collection;
    return (
    <div className='collection'>
        <h1>{title}</h1>
        <div className='items'>
        {
            items.map(item => <CollectionItem key={item.id} item={item} />)
        }
        </div>
        <p onClick={() => history.push('/shop')}>Other Categories</p>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default withRouter(connect(mapStateToProps)(Collection));