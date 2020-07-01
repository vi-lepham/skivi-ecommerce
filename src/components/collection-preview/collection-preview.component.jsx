import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.component.scss';

const CollectionPreview = ({ title, items , history }) => (
    <div className='collection'>
        <div className='title'>
            <h1>{title.toUpperCase()}</h1>  
            <p className='see-more'
                onClick={() => history.push(`/shop/${title.toLowerCase()}`)}
            >
            See more &#8594;
            </p>      
        </div>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 5)
                .map(item => (
                <CollectionItem className='collection-item' key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default withRouter(CollectionPreview);