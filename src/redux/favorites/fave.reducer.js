import { faveActionTypes } from './fave.types';

const INITIAL_STATE = {
    fave: []
}

const faveReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case faveActionTypes.ADD_TO_FAVE:
            return {
                ...state,
                fave: [...state.fave, action.payload]
            }
        case faveActionTypes.REMOVE_FROM_FAVE:
            return {
                ...state,
                fave: state.fave.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default faveReducer;