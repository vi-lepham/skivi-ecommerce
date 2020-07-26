import { faveActionTypes } from './fave.types.js';

export const addToFave = (item) => ({
    type: faveActionTypes.ADD_TO_FAVE,
    payload: item
})

export const removeFromFave = (id) => ({
    type: faveActionTypes.REMOVE_FROM_FAVE,
    payload: id
})