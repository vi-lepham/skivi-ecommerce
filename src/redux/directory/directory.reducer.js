const INITIAL_STATE = {
    sections: [
        {
            title: 'womens',
            imageUrl: 'https://images.unsplash.com/photo-1525722212921-6e4e548016db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
            size: 'large',
            id: 1,
            pageUrl: '/shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
            size: 'large',
            id: 2,
            pageUrl: '/shop/mens'
        },
        {
            title: 'hats',
            imageUrl: 'https://images.unsplash.com/photo-1517941823-815bea90d291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
            id: 3,
            pageUrl: '/shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            id: 4,
            pageUrl: '/shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
            id: 5,
            pageUrl: '/shop/sneakers'
        } 
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

export default directoryReducer;