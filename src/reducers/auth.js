import {SAVE_SEARCH} from 'actions/types';

export default function(state=[], action) {
    switch (action.type) {
        case SAVE_SEARCH:
            return [...state, action.payload];
        default:
            return state;
    }
}