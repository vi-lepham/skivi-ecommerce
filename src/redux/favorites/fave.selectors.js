import { createSelector } from 'reselect';

const selectFave = state => state.favorites;

export const selectFaveItems = createSelector(
    [selectFave],
    favorites => favorites.fave
)