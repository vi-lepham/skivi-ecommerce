import React from 'react';
import './collection-preview.component.css';

const CollectionPreview = ({ title, items }) => (
    <div className='collection'>
        <div className='title'>
            <h1>{title.toUpperCase()}</h1>  
            <p className='see-more'>See more</p>      
        </div>
        <div className='preview'>
            {items.filter((item, idx) => idx < 4)
                .map(item => (
                <div key='{item.id}' className='item'>
                    <div className='image'
                        style={{
                            backgroundImage: `url(${item.imageUrl})`
                        }}
                    ></div>
                    <div className='info'>
                        <h2 className='name'>{item.name}</h2>
                        <p className='price'>${item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default CollectionPreview;