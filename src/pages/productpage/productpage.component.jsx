import React from 'react';
import ShopData from '../shoppage/shop.data';
import './productpage.styles.scss';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: ShopData
        }
    } 
    render() {
        const {collections} = this.state;
        console.log(collections)
        return (
            <div className='shoppage'>
                <h1 className='title'>{collections.title.toUpperCase()}</h1>
                {collections.items.map(item => (
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
        )
    }
}

export default ProductPage;