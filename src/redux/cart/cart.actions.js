import { cartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.SET_HIDDEN_STATE
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})