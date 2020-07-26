import { cartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.SET_HIDDEN_STATE
})

export const addCartItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const deleteItemFromCart = item => ({
    type: cartActionTypes.DELETE_ITEM_FROM_CART,
    payload: item
})

export const removeCartItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})
