import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    pageUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    pageUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    pageUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    pageUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    pageUrl: ''
                }
            ]
        }
    }

    /* 
        const SHOP_DATA = 
    */
    render() {
        return(
            <div className='directory'>
                {this.state.sections.map(({id,...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory;