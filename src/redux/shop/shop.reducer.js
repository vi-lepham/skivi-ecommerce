import ShopData from './shop.data.js';
import shopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: ShopData
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;